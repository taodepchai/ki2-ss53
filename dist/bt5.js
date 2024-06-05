"use strict";
let check = (value, cb = (value) => { return `trạng thái là ${value}`; }) => {
    return cb(value);
};
console.log(check(true));
