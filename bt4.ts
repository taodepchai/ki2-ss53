let k = 0;

let displayNumber = (delay:number,cb = (i:number) => {console.log(`phan tu thu thu ${i}`)}) => {
    setTimeout(() => {
        k++;
        cb(k);
        displayNumber(delay);
    },delay)
    
}

displayNumber(1000);