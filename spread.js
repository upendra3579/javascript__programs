
 const spread = digit =>{
   return [...`${digit}`].map(v =>parseInt(v));
    
 };

console.log( spread(12333));

const digitize = n => [...`${n}`];

console.log(digitize(123));
console.log(digitize(1230));
