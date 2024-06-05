"use strict";
let delayCallback = (cb = (i) => { console.log(i); }) => {
    setTimeout(() => {
        cb(1);
    }, 1000);
};
delayCallback();
