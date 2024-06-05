"use strict";
let k = 0;
let displayNumber = (delay, cb = (i) => { console.log(`phan tu thu thu ${i}`); }) => {
    setTimeout(() => {
        k++;
        cb(k);
        displayNumber(delay);
    }, delay);
};
displayNumber(1000);
