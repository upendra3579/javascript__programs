var arr1=[2,3,4,5,6,7,8,9];
var arr2=[9,10,11,12,13,14,15];
  var temp;
  function copy(arr1,arr2){
    if(arr1.length<=arr2.length){
    for(var i=0;i<=arr1.length-1;i++){
        temp=arr1[i];
        arr1[i]=arr2[i];
        arr2[i]=temp;  
        }
        console.log("arr1 after swap if",arr1);
        console.log("arr2 after swap if",arr2);
    }
    else{
        for(var i=0;i<=arr2.length-1;i++){
            temp=arr1[i];
            arr1[i]=arr2[i];
            arr2[i]=temp;  
            }
            console.log("arr1 after swap else",arr1);
            console.log("arr2 after swap else",arr2);
        }
    
    
    
  }
  var altele = copy(arr1,arr2);
    console.log(altele);