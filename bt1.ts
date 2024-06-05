
let sum = (a:number,b:number, cb = (a:number,b:number) => {return a+b}) => {
    return cb(a,b);
}

console.log(sum(2,3));