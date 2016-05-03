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

vizuly.svg.filter={};

// This function creates a SVG drop shadow filter
vizuly.svg.filter.dropShadow = function (viz,dx,dy,dev) {

    var f = Math.round(dx*100) + "_" + Math.round(dy*100) + "_" + Math.round(dev*100);
    var id = viz.id();

    // var defs = selection.select("svg defs").data([null]).enter().append("defs");

    var defs=vizuly.util.getDefs(viz);

    var filter = defs.selectAll("#vz_filter_" + id + "_" + f).data([f]).enter()
        .append("filter")
        .attr("id", "vz_filter_" + id + "_" + f )
        .attr("class","vz-svg-filter-dropShadow")
        .attr("width","300%")
        .attr("height","300%");


    filter.append("feGaussianBlur").attr("in","SourceAlpha").attr("stdDeviation",dev);
    filter.append("feOffset").attr("dx",dx).attr("dy",dy);
    filter.append("feComponentTransfer").append("feFuncA").attr("type","linear").attr("slope",0.2);
    var merge = filter.append("feMerge");
        merge.append("feMergeNode");
        merge.append("feMergeNode").attr("in","SourceGraphic");

    return ("#vz_filter_" + id + "_" + f );
};