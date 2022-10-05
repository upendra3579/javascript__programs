var repArr = [];
var nonrepArr = [];

var nonRepeated =function (arr){
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                repArr.push(arr[i]);
            }
            nonrepArr[i] = arr[i]-repArr[i];
        }
      
    }
   
console.log(nonrepArr);
console.log(repArr[i]);
 }
 var arr = [12,23,34,45,56,45,23,12,2,5,9];
 var res = nonRepeated(arr);
 console.log(res);