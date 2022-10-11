
let a = [1, 2, 3, 4];
let b = ["ram", "shyam", "sita", "gita"]
 
// Checking if the array lengths are same
// and none of the array is empty
 function convertToObj(a, b){
  if(a.length != b.length || a.length == 0 || b.length == 0){
   return null;
  }
  let obj = {};
   
// Using the foreach method
  a.forEach((k, i) => {obj[k] = b[i] })
  return obj;
}
console.log(convertToObj(a, b));


const obj = {
    name:[{name1: 'Jean-Luc Picard',name2 : 'hhhhh'},{name1: 'Jean-Luc Picard',name2 : 'hhhhh'}],
    rank: [{name1: 'Jean-Luc Picard',name2 : 'hhhhh'},{name1: 'Jean-Luc Picard',name2 : 'hhhhh'}]

  };
  var val;
  // Prints "name Jean-Luc Picard" followed by "rank Captain"
 var value =  Object.keys(obj).map(key => {
val = {key , value : obj[key]}
return val ;
  });

  console.log(value);

  //  this.courseGropList = Object.keys(groupedCollection).map(key =>{
  //       console.log(key);
    
  //       var dummy = { "key": key, value: groupedCollection[key] };
  //         console.log(dummy);
  //         return dummy;
  //     } );