var arr = [];
arr.length = 5;

var frontcursor = 0;
var rearcursor = 0;
function push (num){
  if(rearcursor<arr.length){  
   arr[rearcursor] = num;
   rearcursor++;
  }else
     console.log("overflow"); 

};
function pop(){
    if(frontcursor !== rearcursor || frontcursor<arr.length){
        console.log(frontcursor);
    var temp = arr[frontcursor];
    frontcursor++;
    return temp;
 }else 
    console.log("underflow exception");
};

push(10);
push(30);
push(34);
push(44);
pop();
 
console.log(arr);
