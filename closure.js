function maker(x){
    return function(y){
        return x+y;
    }
}
const add5 = maker(5);
const add6 = maker(6);


console.log(add5(5));
console.log(add6(5));