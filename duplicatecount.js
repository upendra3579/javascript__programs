var arr=[12,23,45,1,15,3,27,47,12,12,13,13,15,92];

function dup(arr){
    var countArray=[];
for(var i=0;i<arr.length;i++){
    countArray[i]=-1;
}
   for(var i=0;i<arr.length;i++){
       count=1;
       for(var j=i+1;j<arr.length;j++){
           if(arr[i]==arr[j]){
               countArray[j]=0;
               count++;
            }
        }
        if(countArray[i]!=0){
           countArray[i]=count;
        }
    }
    for(var i=0;i<arr.length;i++){
        console.log(countArray[i]);
        if(countArray[i]!=0 && countArray[i]!=1){
        console.log("The duplicate element is"+arr[i]+ "and its count"+countArray[i]);
        }
    }
 }
 var numbers = dup(arr);