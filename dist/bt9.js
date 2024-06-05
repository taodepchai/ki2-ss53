"use strict";
let myFilter = (arr, n, cb) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], n)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};
let arr2 = [1, 2, 3, 4, 5, 2, 7];
const callback1 = (arrElement, n) => arrElement === n;
const result1 = myFilter(arr2, 2, callback1);
console.log(result1);
