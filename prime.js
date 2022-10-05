let res_arr = [];
function prime(arr){
   
    for(var i=0; i<arr.length; i++){
        var count=0;
        for(var j=2; j<arr[i]; j++){
               if(arr[i]%j==0 ){
                   count=1; 
                   
               }
            }
            if(count==0){
                console.log("the prime no is",arr[i]); 
            }
        
           
        }
       
}
var arr = [2,7,56,33,21,1,3];
var  res = prime(arr);
console.log(res);