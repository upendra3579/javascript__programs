// function longest_str(arr){
//     var temp = arr[i];
//     for(var i=0;i<arr.length;i++){
//         for(var j=i+1;j<arr.length;j++){
//             if(arr[j].length > arr[i].length){
//                temp = arr[j];
//             }
//         }
        
//     }
//     return temp;
// };

// var arr = ["kiran","mahesh","vasu","venkatkrishna"]
// console.log(longest_str(arr));

function longest_str(arr){
    var temp = arr[0];
    for(var i=1;i<arr.length;i++){
            if(arr[i].length > temp.length){
               temp = arr[i];
            }  
    }
    return temp;
};

var arr = ["kiran","mahesh","vasu","venkatkrishna"]
console.log(longest_str(arr));