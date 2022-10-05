
const pull = (arr, ...args) => {
    let argState = Array.isArray(args[0]) ? args[0] : args;
    console.log(argState);
    let pulled = arr.filter((v) => !argState.includes(v));
    arr.length = 0;
    pulled.forEach(v => arr.push(v));
    return pulled;
  };
  let arra1 = ['a', 'b', 'c', 'a', 'b', 'c'];
  console.log(pull(arra1, 'a', 'c'));
  let arra2 =  ['a', 'b', 'c', 'a', 'b', 'c'];
  console.log(pull(arra2, 'b'));
  



// const powerset = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);
// console.log(powerset([1,2]));
// console.log(powerset([1, 2, 3]));
// console.log(powerset([1, 2, 3, 4]));
