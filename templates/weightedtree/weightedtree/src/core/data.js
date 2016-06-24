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

vizuly.data = {};

// Takes data produced by a d3.nest() call and aggregates the aggProperties according to the aggregateFunction
// This also will take all nth deep child nodes and create the same properties and associated values on the parent nest nodes.

vizuly.data.aggregateNest = function(nest,aggProperties, aggregateFunction) {

    //Go down to the last depth and get source values so we can roll them up t

    var deepestChildNode = nest[0];

    while (deepestChildNode.values) {
        deepestChildNode = deepestChildNode.values[0]
    }

    var childProperties = [];

    Object.getOwnPropertyNames(deepestChildNode).forEach(function (name) {
        childProperties.push(name);
    })


    aggregateNodes(nest);

    function setSourceFields(child, parent) {
        if (parent) {
            for (var i = 0; i < childProperties.length; i++) {
                var childProperty = childProperties[i];
                if (child[childProperty] != undefined) {
                    child["childProp_" + childProperty] = child[childProperty];
                }
                parent["childProp_" + childProperty] = (child["childProp_" + childProperty]) ? child["childProp_" + childProperty] : child[childProperty];
            }
        }

    }

    function aggregateNodes(nodes,parent) {
        for (var y = 0; y < nodes.length; y++) {
            var node = nodes[y];
            if (node.values) {
                aggregateNodes(node.values,node);
                for (var z = 0; z < node.values.length; z++) {
                    var child = node.values[z];
                    for (var i = 0; i < aggProperties.length; i++) {
                        if (isNaN(node["agg_" + aggProperties[i]])) node["agg_" + aggProperties[i]] = 0;
                        node["agg_" + aggProperties[i]] = aggregateFunction(node["agg_" + aggProperties[i]], child["agg_" + aggProperties[i]]);
                    }
                }
            }
            else {
                for (var i = 0; i < aggProperties.length; i++) {
                    node["agg_" + aggProperties[i]] = Number(node[aggProperties[i]]);
                    if (isNaN(node["agg_" + aggProperties[i]])) {
                        node["agg_" + aggProperties[i]] = 0;
                    }
                }
            }
            setSourceFields(node, parent);
        }

    }

}

