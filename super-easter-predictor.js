// Author: Mo Anibaba

var y = 2003;

var a = y % 19;

var b = y / 100;

var c = y % 100;

var d = b / 4;

var e = b % 4;

var f = (b + 8) / 25;

var g = ((b - f) + 1) / 3;

var h = (19 * (a + (b - (d - (g + 15))))) % 30;

var i = c / 4;

var k = c % 4;

var r = (32 + (2 * e) + (2 * i) - h - k) % 7;

var m = (a + (11 * h) + (22 * r)) / 451;

var n = (h + r - (7 * m) + 114) / 31

var p = (h + r - (7 * m) + 114) % 31
