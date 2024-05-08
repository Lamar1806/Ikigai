"use strict";
var power = function (base, exponent) {
    if (exponent === 1)
        return base;
    return base * power(base, exponent--);
};
console.log(power(2, 2));
