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

vizuly.util = {};


// This function converts margin absolute or relative (%) values with a specified width/height into
// a size object that has the following properties: size.top, size.left, size.height, size.width
// This function is used by many of the components and skins.

vizuly.util.size = function (margin,width,height) {

    size={};

    size.width = width - vizuly.util.measure(margin.left,width) - vizuly.util.measure(margin.right,width);
    size.height = height - vizuly.util.measure(margin.top,height) - vizuly.util.measure(margin.bottom,height);
    size.top = vizuly.util.measure(margin.top,height);
    size.left = vizuly.util.measure(margin.left,width);

    return size;
}



// This function sets a scale based on the value being passed into it.
// It will default to a linear scale if the incoming value is not a string or a date
// This solves 80% of the use cases for setting up a scale, other use cases can be handled individually at the component
// or application level

vizuly.util.getTypedScale = function (value) {
        var scale;
        if (typeof value == "string") {
            scale = d3.scale.ordinal();
        }
        else if (value instanceof Date) {
            scale = d3.time.scale();
        }
        else {
            scale= d3.scale.linear();
        }
        return scale;
}



// This function sets a range based on min and max values, and
// uses range bands if the scale is an ordinal scale (assumed by string value in the scale domain -
// as class equality is not supported in javascript outside of using protoype chains (which we don't use.)

vizuly.util.setRange = function (scale,min,max) {
    if (typeof(scale.domain()[0]) == "string") {
        scale.rangeBands([min,max],0);
    }
    else {
        scale.range([min,max]);
    }
}


// This function will see if we are using a relative (%) value against a given measure
// If we are it calculates the percentage value and returns that
// If we aren't it just returns the original m0 parameter
// This is primarily used by the vizuly.util.size function.

vizuly.util.measure = function (m0,m1) {
    if(typeof m0 == "string" && m0.substr(m0.length-1) == "%") {
        var r = Math.min(Number(m0.substr(0,m0.length-1)),100)/100;
        return (Math.round(m1 * r));
    }
    else return m0;
};




// This function generates a GUID
// All vizuly components use a GUID as an unique identifiers within the DOM

vizuly.util.guid = function()
{
    /* REAL GUID
     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
     var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
     return v.toString(16);
     });
     */

    //Simple ID that is unique enough for an DOM tree.
    return 'vzxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
};

// This function will get a reference to the svg.defs element within a component (assumes only one SVG element)
// If no def's element is present it will create one

vizuly.util.getDefs = function (viz) {
    defs = viz.selection().selectAll("svg defs");
    if (defs[0].length < 1)
        defs = viz.selection().select("svg").append("defs");
    return defs;
}



vizuly.util.createCSSKey = function(s) {
    s = String(s).replace(",", "_");
    s = s.replace(/[\s+,'+,\.,\(,\),\"]/g, "");
    s = "css" + s.toUpperCase();
    return s;
}
