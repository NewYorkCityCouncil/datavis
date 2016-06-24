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

vizuly.svg.text = {}

// Creates a single line path that can be used for texts along an arc
vizuly.svg.text.arcPath = function (r,t) {
    var radian = 0.0174533;
    var d={};
    d.angle=t;
    d.startAngle = d.angle - (179 * radian);
    d.endAngle  = d.angle + (179 * radian);
    var pd=d3.svg.arc().innerRadius(r).outerRadius(r)(d);
    var justArc = /[Mm][\d\.\-e,\s]+[Aa][\d\.\-e,\s]+/;
    var arcD = justArc.exec(pd)[0];
    return arcD;
}