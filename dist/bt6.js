"use strict";
function task10(callback1) {
    setTimeout(() => {
        console.log("Task 1 được thực thi");
        callback1 && callback1();
    }, 1000);
}
function task20(callback2) {
    setTimeout(() => {
        console.log("Task 2 được thực thi");
        callback2 && callback2();
    }, 1500);
}
function task30(callback3) {
    setTimeout(() => {
        console.log("Task 3 được thực thi! Hoàn thành");
        callback3 && callback3();
    }, 2000);
}
task10(() => {
    task20(() => {
        task30(() => {
            console.log("All tasks completed!");
        });
    });
});
