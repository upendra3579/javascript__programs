var arr = [1,4,66,44,23,4,66];
var y;
function duplicate(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
               y=arr[i];
               console.log("Duplicate Number is",y);
            }
           
       }
       
   }
   
}
var num = duplicate(arr);
console.log(num);
