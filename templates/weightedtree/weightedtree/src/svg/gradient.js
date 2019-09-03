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

vizuly.svg.gradient={};

// Creates a color blend gradient across two colors and a given angle
vizuly.svg.gradient.blend = function (viz,color1,color2,direction) {

    var c = String(color1).replace("#","") + String(color2).replace("#","");
    var id = "vz_gradient_blend_" + viz.id() + "_" + c;

    var x1,x2,y1,y2;

    if (direction == "horizontal") {
        x1 = "100%"; x2="0%";
        y1 = "0%"; y2="0%";
    }
    else {
        x1 = "0%"; x2="0%";
        y1 = "100%"; y2="0%";
    }

    var defs=vizuly.util.getDefs(viz);

    var gradient = defs.selectAll("#" + id).data([c]).enter()
        .append("linearGradient")
        .attr("id", id)
        .attr("class","vz-svg-gradient-blend")
        .attr("x1",x1).attr("x2",x2).attr("y1",y1).attr("y2",y2);

    gradient.append("stop").attr("offset","0%").attr("stop-color",color1);
    gradient.append("stop").attr("offset","100%").attr("stop-color",color2);

    gradient = defs.selectAll("#" + id);

    return gradient;
};

// Creates a color fade gradient to a given opacity in a given direction
vizuly.svg.gradient.fade = function (viz,color,direction,opacity,ratio) {

    if (!ratio) ratio=[0,1];
    if (!opacity) opacity= [.75,.9];

    var c = String(color).replace("#","");
    var id = "vz_gradient_fade_" + viz.id() + "_" + c;

    var x1,x2,y1,y2;

    if (direction == "horizontal") {
        x1 = "0%"; x2="100%";
        y1 = "0%"; y2="0%";
    }
    else {
        x1 = "0%"; x2="0%";
        y1 = "100%"; y2="0%";
    }

    var defs=vizuly.util.getDefs(viz);

    var gradient = defs.selectAll("#" + id).data([c]).enter()
        .append("linearGradient")
        .attr("id", id)
        .attr("class","vz-svg-gradient-fade")
        .attr("x1",x1).attr("x2",x2).attr("y1",y1).attr("y2",y2);

    gradient.append("stop").attr("offset",(ratio[0]*100) + "%").attr("stop-color",color).attr("stop-opacity",opacity[0]);
    gradient.append("stop").attr("offset",(ratio[1]*100) + "%").attr("stop-color",color).attr("stop-opacity",opacity[1]);

    gradient = defs.selectAll("#" + id);

    return gradient;
};

// Creates a radial fade gradient
vizuly.svg.gradient.radialFade = function (viz,color,opacity,ratio) {

    if (!ratio) ratio=[0,1];
    if (!opacity) opacity= [.75,.9];

    var c = String(color).replace("#","");
    var id = "vz_gradient_radial_fade" + viz.id() + "_" + c;

    var defs=vizuly.util.getDefs(viz);

    var gradient = defs.selectAll("#" + id).data([c]).enter()
        .append("radialGradient")
        .attr("id", id)
        .attr("class","vz-svg-gradient-radial-fade")

    gradient.append("stop").attr("offset",(ratio[0]*100) + "%").attr("stop-color",color).attr("stop-opacity",opacity[0]);
    gradient.append("stop").attr("offset",(ratio[1]*100) + "%").attr("stop-color",color).attr("stop-opacity",opacity[1]);

    gradient = defs.selectAll("#" + id);

    return gradient;
};

// Creates a gradient that makes a given color darker.
vizuly.svg.gradient.darker = function (viz,color,direction) {

    var c = String(color).replace("#","");
    var id = "vz_gradient_darker_" + viz.id() + "_" + c;

    var x1,x2,y1,y2;

    if (direction == "horizontal") {
        x1 = "100%"; x2="0%";
        y1 = "0%"; y2="0%";
    }
    else {
        x1 = "0%"; x2="0%";
        y1 = "100%"; y2="0%";
    }

    var defs=vizuly.util.getDefs(viz);

    var gradient = defs.selectAll("#" + id).data([c]).enter()
        .append("linearGradient")
        .attr("class","vz-gradient-darker")
        .attr("id",id)
        .attr("x1",x1).attr("x2",x2).attr("y1",y1).attr("y2",y2);

    gradient.append("stop").attr("offset","0%").attr("stop-color",color).attr("stop-opacity",.75);
    gradient.append("stop").attr("offset","100%").attr("stop-color",d3.rgb(color).darker()).attr("stop-opacity",.9);

    gradient = defs.selectAll("#" + id);

    return gradient;
};
