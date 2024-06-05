let check = (value:boolean,cb = (value:boolean) => {return `trạng thái là ${value}`}) => {
    return cb(value);
}

console.log(check(true));
