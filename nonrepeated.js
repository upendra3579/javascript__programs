// var nonRepeated =function (arr){
//     var result = ''
//     for(var i=0;i<arr.length;i++){
        
//         for(var j=i+1;j<arr.length;j++){
//             if(i != j && arr[i]==arr[j]){
//                 result = arr[i];
//              }
//             }
//        if(j == n){
//        // arr1.push(arr[i])
//        return arr[i];
//         }
//      }
//      return result;
//  }
 // var arr = [12,23,34,45,56,45,23,12,2,5,9];
//  var res = nonRepeated(arr);
//  console.log(res);

//var arr = [-1, 2, 5, 6, 2, 9, -1, 6, 5, -1, 3];
var arr = [12,23,34,45,56,45,23,12,2,5,9];
var n = arr.length;
var result = '';

function nonrep() {
  for (var i = 0; i < n; i++) {
    var j;
    for (j = 0; j < n; j++)
      if (i != j && arr[i] == arr[j]) {
        result = arr[i];
        break;
      }
    if (j == n)
      return arr[i];
  }
  return result;
}
console.log(nonrep())
