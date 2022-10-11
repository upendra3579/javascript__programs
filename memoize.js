
const memoize = (func) =>{
    let cache = {};
 return  function(...args){
    if(args.toString() in cache){
     return cache[args.toString()]
    }
   const res = func(args.toString()) ;
        cache[args.toString()] = res;
        return res; 
    
 }
}

const multiplyBy10 =(num) =>{
    return num*10;
  };
  

const memoizedmultiby10 = memoize(multiplyBy10);


console.log(memoizedmultiby10(4));
console.log(memoizedmultiby10(4));
console.log(memoizedmultiby10(4));
console.log(memoizedmultiby10(5));
console.log(memoizedmultiby10(5));



