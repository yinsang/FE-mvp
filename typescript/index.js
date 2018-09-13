"use strict";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Pink"] = 1] = "Pink";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
console.log(Color);
for (var item in Color) {
    if (isNaN(Number(item))) {
        console.log(item);
        var dom = document.createElement('p');
        dom.innerText = item;
        document.body.appendChild(dom);
    }
}
