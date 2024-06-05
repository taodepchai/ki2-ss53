
let delayCallback = (cb = (i:number) => {console.log(i)}) => {
    setTimeout(() => {
        cb(1);
    },1000)
    
}
delayCallback();