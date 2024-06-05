"use strict";
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let processArray = (item, cb = (i) => { console.log(`vi tri thu ${i}`); }) => {
    setTimeout(() => {
        cb(item);
    }, 1000);
};
for (let i = 0; i < arr.length; i++) {
    processArray(i + 1);
}
