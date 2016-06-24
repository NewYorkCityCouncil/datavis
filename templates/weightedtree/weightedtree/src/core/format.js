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

vizuly.format = {};

// Used for time series axis to format dates in following hierarchy
// - YEAR
// -- Month
// --- Month-Day

vizuly.format.YEAR_Mon_MonDay = d3.time.format.multi([
    [".%L", function (d) { return d.getMilliseconds(); }],
    [":%S", function (d) {  return d.getSeconds(); }],
    ["%I:%M", function (d) {  return d.getMinutes(); }],
    ["%I %p", function (d) {  return d.getHours(); }],
    ["%a %d", function (d) { return d.getDay() && d.getDate() != 1; }],
    ["%b %d", function (d) { return d.getDate() != 1; }],
    ["%b", function (d) { return d.getMonth(); }],
    ["20%y", function (d) { return true; }]
]);