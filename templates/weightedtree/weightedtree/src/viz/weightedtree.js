/*
 Copyright (c) 2016, BrightPoint Consulting, Inc.

 MIT LICENSE:

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
 and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
 CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 IN THE SOFTWARE.
 */

// @version 1.1.20

//
// This is the base component for a vizuly radial progress component.
//
vizuly.viz.weighted_tree = function (parent) {

    // This is the object that provides pseudo "protected" properties that the vizuly.viz function helps create
    var scope={};

    var properties = {
        "data" : null,              // Expects a single numeric value
        "margin" : {                // Our marign object
            "top": "5%",           // Top margin
            "bottom" : "5%",        // Bottom margin
            "left" : "8%",          // Left margin
            "right" : "7%"          // Right margin
        },
        "key" : null,                //used to create unique node key
        "tree" : d3.layout.tree(),   //
        "children" : null,           // Used to determine child nodes
        "duration": 500,            // This the time in ms used for any component generated transitions
        "width": 300,               // Overall width of component
        "height": 300,              // Height of component
        "value" : null,             // Radius value of the nodes and line weights;
        "branchPadding": -1,         // Determines vertical branch spacing as ratio of height - defaults to automatic adjustment
        "fixedSpan" : -1,           // Determines horizontal branch spacing as ratio of height - defaults to automatic adjustment
        "label" : function (d,i)    // Default function used to render center label
        { return d; }
    };

    //Create our viz and type it
    var viz=vizuly.component.create(parent,scope,properties,['node_refresh','data_prepped']);
    viz.type="viz.chart.weighted_tree";

    var dataIsDirty=true;
    var refreshNeeded=false;
    viz.on("data_change.internal",onDataChanged);


    var colors = ["#bd0026", "#fecc5c", "#fd8d3c", "#f03b20", "#B02D5D",
        "#9B2C67", "#982B9A", "#692DA7", "#5725AA", "#4823AF",
        "#d7b5d8", "#dd1c77", "#5A0C7A", "#5A0C7A"];

    //Measurements
    var size;                               // Holds the 'size' variable as defined in viz.util.size()
    var tree = scope.tree;                  // Tree layout
    var nodeScale = d3.scale.sqrt();        // Scale used for node radius
    var root,nodes;                         // Data storage for display tree
    var depthSpan;                          // Width to use for horizontal span - can be fixed (scope.fixedSpan) or dynamically sized by viz.width
    var maxDepth;                           // Deepest level of tree
    var maxValues={};                       // Maximum value for a given tree level - needed to calc node radius
    var minValues={};                       // Minimum value for a give tree level - needed to calc node radius
    var diagonal = d3.svg.diagonal()        // Link layout.
        .projection(function (d) {
            return [d.y, d.x];
        });


    //Used to calc our node radius for each node based on min/max values per depth.
    var  nodeRadius = function (node) {
        //Set max size/2 for root node.
        if (node.depth == 0) return nodeScale.range()[1]/2;
        nodeScale.domain([minValues[node.depth],maxValues[node.depth]]);
        return nodeScale(scope.value(node));
    }


    //These are all d3.selection objects we use to insert and update svg elements into
    var svg, g,background, plot, plotBackground, linkPlot, nodePlot, defs;

    initialize();

    // Here we set up all of our svg layout elements using a 'vz-XX' class namespace.  This routine is only called once
    // These are all place holder groups for the invidual data driven display elements.   We use these to do general
    // sizing and margin layout.  The all are referenced as D3 selections.
    function initialize() {

        scope.selection.attr("class","vz-weighted_tree-viz");
        svg = scope.selection.append("svg").attr("id", scope.id).style("overflow","visible").attr("class","vizuly vz-weighted_tree-viz");
        defs = vizuly.util.getDefs(viz);
        background = svg.append("rect").attr("class","vz-background");
        g = svg.append("g").attr("class","vz-weighted_tree-viz");
        plot = g.append("g").attr("class","vz-weighted_tree-plot").attr("clip-path","url(#" + scope.id + "_plotClipPath)");
        plotBackground = plot.append("rect").attr("class","vz-plot-background");
        linkPlot = plot.append("g").attr("class","vz-weighted_tree-link-plot");
        nodePlot = plot.append("g").attr("class","vz-weighted_tree-node-plot");

        // Tell everyone we are done initializing
        scope.dispatch.initialize();
    }

    // The measure function performs any measurement or layout calcuations prior to making any updates to the SVG elements
    function measure() {

        // Call our validate routine and make sure all component properties have been set
        viz.validate();

        // Get our size based on height, width, and margin
        size = vizuly.util.size(scope.margin, scope.width, scope.height);

        // Transpose dimensions because we are projecting from left to right versus top to bottom
        tree.size([size.height,size.width]);

        // Each time the data changes we need to prep data and other settings for tree layout
        if (dataIsDirty==true || refreshNeeded) {

            refreshData();

            if (dataIsDirty==true) {
                function collapse(d) {
                    if (d.children) {
                        d._children = d.children;
                        d._children.forEach(collapse);
                        d.children = null;
                    }
                }
                root.children.forEach(collapse);
            }
            // Let anyone know we have just prepped data (themes, etc may need to adjust settings)

            dataIsDirty = false;
            refreshNeeded = false;
            //scope.selection.selectAll(".vz-weighted_tree-node").remove();
        }

        //We dynamically size based on how many first level nodes we have
        var scale;
        if (scope.branchPadding == -1) {
           scale = Math.min(size.height,size.width)/scope.children(scope.data).length;
            console.log("scale = " + scale);
        }
        else {
           scale = Math.min(size.height,size.width)*scope.branchPadding;
        }

        nodeScale.range([1.5,scale/2]);

        tree.nodeSize([scale,0]);

        depthSpan = (scope.fixedSpan > 0) ? scope.fixedSpan : size.width/(maxDepth+1);

        //Set max/min values
        for (var i=1; i < maxDepth+1; i++) {
            var vals = nodes.filter(function (d) { return d.depth == i});
            maxValues[i] = d3.max(vals, function (d) { return scope.value(d)});
            minValues[i] = d3.min(vals, function (d) { return scope.value(d)});
        }

        // Tell everyone we are done making our measurements
        scope.dispatch.measure();

    }

    function refreshData() {

            function setChildren(node) {
                if (scope.children(node)) {
                    if (!node._children) {
                        node.children = scope.children(node);
                        node.children.forEach(function (d) {
                            //Set these from parent node
                            d.x0 = node.x;
                            d.y0 = node.y;
                            setChildren(d);
                        });
                    }
                }
            }

            maxDepth = 0;
            setChildren(scope.data);

            root = scope.data;
            root.x0 = 0;
            root.y0 = 0;

            nodes = tree.nodes(root).reverse();

            nodes.forEach(function (node) {
                if (node.depth == 0) return;
                if (!maxValues[node.depth]) {
                    maxValues[node.depth]=-Infinity;
                    minValues[node.depth]=Infinity;
                }
                maxDepth = Math.max(maxDepth,node.depth)
            })
        scope.dispatch.data_prepped();
    }

    function onDataChanged() {
        dataIsDirty=true;

    }


    // The update function is the primary function that is called when we want to render the visualiation based on
    // all of its set properties.  A developer can change properties of the components and it will not show on the screen
    // until the update function is called
    function update(refresh) {

        // Call measure each time before we update to make sure all our our layout properties are set correctly
        measure();

        // Layout all of our primary SVG d3 elements.
        svg.attr("width", scope.width).attr("height", scope.height);
        background.attr("width", scope.width).attr("height", scope.height);
        plot.style("width",size.width).style("height",size.height).attr("transform","translate(" + size.left + "," + (size.top + size.height/2) + ")");

        // We make a call to render the root node
        updateNode(root);

    }


    // This function takes a given node and expands its children within the tree.  It gets called each time a user toggles a node.
    function updateNode(rootNode) {

        var nodes = tree(root).reverse();

        // Compute the new tree layout.
        var links = tree.links(nodes);

        positionNodes(rootNode,nodes);

        // Update the nodes…
        var node = nodePlot.selectAll(".vz-weighted_tree-node")
            .data(nodes, function(d) { return d.vz_tree_id || (d.vz_tree_id = scope.key(d)); });

        // Enter any new nodes at the parent's previous position.
        var nodeEnter = node.enter().append("g")
            .attr("class", function (d) { return "vz-weighted_tree-node vz-id-" + d.vz_tree_id;} )
            .attr("transform", function(d) {
                var y = d.y0 ? d.y0 : rootNode.y0;
                var x = d.x0 ? d.x0 : rootNode.x0;
                return "translate(" + y + "," + x + ")"; })
            .on("click",  function (d,i) { scope.dispatch.click(this,d,i) })
            .on("dblclick", function (d,i) { scope.dispatch.dblclick(this,d,i) })
            .on("mouseover", function (d,i) { scope.dispatch.mouseover(this,d,i) })
            .on("mouseout", function (d,i) { scope.dispatch.mouseout(this,d,i) });

        nodeEnter.append("circle")
            .attr("class",".vz-weighted_tree-node-circle")
            .attr("r", 1e-6)
            .style("cursor","pointer");

        nodeEnter.append("text")
            .attr("x", function(d) { return d.children || d._children ? -10 : 10; })
            .attr("dy", ".35em")
            .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
            .style("pointer-events","none")
            .text(function(d) { return scope.label(d) });


        // Update the links…
        var link = linkPlot.selectAll(".vz-weighted_tree-link")
            .data(links, function(d) { return d.target.vz_tree_id; });

        // Enter any new links at the parent's previous position.
        link.enter().append("path")
            .attr("class",  function (d) { return "vz-weighted_tree-link vz-id-" + d.target.vz_tree_id;} )
            .attr("d", function(d) {
                var y = d.target.y0 ? d.target.y0 : rootNode.y0;
                var x = d.target.x0 ? d.target.x0 : rootNode.x0;
                var o = {x: x, y: y};
                return diagonal({source: o, target: o});
            })
            .on("mouseover", function (d,i) { scope.dispatch.mouseover(this,d,i) })
            .on("mouseout", function (d,i) { scope.dispatch.mouseout(this,d,i) })
            .style("stroke-linecap", "round");


        //Before we fire transition we hit update so any external styles can take effect before we transition.
        scope.dispatch.update();

        // Transition nodes to their new position.
        var nodeUpdate = node.transition();

        endUpdate(nodeUpdate,function () { scope.dispatch.node_refresh()});

        nodeUpdate.duration(scope.duration)
            .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

        nodeUpdate.select("circle")
            .attr("r", function (d) { return nodeRadius(d)});

        // Transition exiting nodes to the parent's new position.
        var nodeExit = node.exit().transition()
            .duration(scope.duration)
            .attr("transform", function(d) {
                d.x0=null;
                d.y0=null;
                return "translate(" + rootNode.y + "," + rootNode.x + ")"; })
            .remove();

        nodeExit.select("circle")
            .attr("r", 1e-6);

        nodeExit.select("text");


        // Transition links to their new position.
        link.transition()
            .duration(scope.duration)
            .attr("d", diagonal)
            .style("stroke-width",function (d) {
                return nodeRadius(d.target)*2});

        // Transition exiting nodes to the parent's new position.
        link.exit().transition()
            .duration(scope.duration)
            .attr("d", function(d) {
                var o = {x: rootNode.x, y: rootNode.y};
                return diagonal({source: o, target: o});
            })
            .remove();

        // Stash the old positions for transition.
        nodes.forEach(function(d) {
            d.x0 = d.x;
            d.y0 = d.y;
        });


    }

    // Repositions nodes according to layout
    function positionNodes(rootNode,nodes) {

        // Figuure out our total height of current display
        var minY=d3.min(nodes,function (d) { return d.x});                              // min y position
        var maxY=d3.max(nodes,function (d) { return d.x});                              // max y position
        var maxX=d3.max(nodes,function (d) {return d.depth }) * depthSpan;              // max x position
        var h = Math.max(scope.height,maxY - minY + size.top);   // calc height
        var w = Math.max(scope.width,maxX + scope.width *.2 + size.left);               // calc width;


        // if the span between minY and maxY is less than the total height, but maxY + half the height is MORE than the total height
        // we need to make the height bigger.  i.e.  If expanded node is below the root node and it expands beyond the bottom of the screen.
        if (size.height/2 + maxY > h) h = size.height/2 + maxY + tree.nodeSize()[0];

        svg.transition().duration(scope.duration).style("height",h + "px").style("width",w + "px");

        //Now determine how far above the fold this minY is
        var offsetY = Math.max(0,-minY  - size.height/2) + tree.nodeSize()[0]/2;

        // Normalize for fixed-depth.
        nodes.forEach(function(d) {
            // if (tree.nodeSize()) d.x= d.x + size.height/2;
            d.y = d.depth * depthSpan;

            //Adjust y position to accomodate offset
            d.x = d.x + offsetY - tree.nodeSize()[0];
        });

        //Scroll to position of the rootNode node.
        scrollTop(rootNode.x);
    }

    // Fired after all transitions for tree are complete
    function endUpdate(transition, callback) {
        var n = 0;
        transition
            .each(function() { ++n; })
            .each("end", function() { if (!--n) callback.apply(this, arguments); });
    }


    // Scrolls to the top measure provided
    function scrollTop(top) {
        scope.selection.transition().duration(scope.duration)
            .tween("scrolltween", scrollTopTween(top));

        function scrollTopTween(scrollTop) {
            return function() {
                var i = d3.interpolateNumber(this.scrollTop, scrollTop);
                return function(t) { this.scrollTop = i(t); };
            };
        }
    }

    // Toggles node.
    function toggleNode(d) {
        if (d.children) {
            d._children = d.children;
            d.children = null;
        } else {
            d.children = d._children;
            d._children = null;
        }
        updateNode(d);
    }


    // This is our public update call that all viz components implement
    // Passing in a refresh will update all data;
    viz.update = function (refresh) {
        if (refresh == true) refreshNeeded=true;
        update();
        return viz;
    };

    viz.toggleNode = function (d) {
        toggleNode(d);
    };


    // Returns our glorious viz component :)
    return viz;

};