
var n1 = 0,n2 = 1, n3;
function fibbi(n){
    for(var i=0;i<n;i++){
        n3=n1+n2;
        n1=n2;
        n2=n3;
        console.log(n3);
    }
  
}
fibbi(15);
