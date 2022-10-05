var arr = ["pavan","kumar","ratna","rowdy"];

function sort(arr){
    for(var i=0;i<arr.length;i++){
       for(var j=i+1;j<arr.length;j++){
            if(arr[i]>=arr[j]){
               var temp=arr[i];
               arr[i]=arr[j];
               arr[j]=temp;
             }
        }
    }
      return arr;
   }
   var res = sort(arr);
   console.log(res);