
var arr = new Array(4);
var cursor = -1;

function createStack(size){
    arr = new Array(size);
}

function push(x){
    if(cursor<arr.length-1){ 
        cursor++;
        arr[cursor] = x;
    }else{
        console.log("stack overflow exception");
    }
};

function pop(){
   if(cursor >= 0){
     var temp = arr[cursor];
     arr[cursor] = 0;
     cursor--;
     return temp;
   }else{
    console.log("nothing to pop....");
   }
};
push(10);
push(30);
push(45);
push(9);
push(78);

pop();
pop();
pop();
var res = pop();
console.log(res);
console.log(arr);
pop();
push(34);

