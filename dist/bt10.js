"use strict";
let myFindIndex = (arr, n, cb) => {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], n)) {
            return i;
        }
    }
    return -1;
};
let arr3 = [1, 2, 3, 4, 5, 2, 7];
const callback2 = (arrElement, n) => arrElement === n;
const result2 = myFindIndex(arr3, 10, callback2);
console.log(result2);
