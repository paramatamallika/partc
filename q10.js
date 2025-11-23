function counter(){
    let count=0;
    return function(){
        count++;
    };
}
const c=counter;
console.log(c());
console.log(c());
console.log(c());
