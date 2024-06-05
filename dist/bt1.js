"use strict";
let sum = (a, b, cb = (a, b) => { return a + b; }) => {
    return cb(a, b);
};
console.log(sum(2, 3));
