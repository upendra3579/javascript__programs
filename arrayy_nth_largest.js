function sort(arr,n){
    for(var i=0;i<arr.length;i++){
       for(var j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
               var temp=arr[i];
               arr[i]=arr[j];
               arr[j]=temp;
             }
        }
    }
      var p = arr.length-n;
      var res = arr[p];
      console.log(res);
   };
    var arr = [12,23,34,45,65,22];
   sort(arr,2);

   