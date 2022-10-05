function isprime(x){
    var count = 0;
   for(var i =1;i<=x;i++){
      if(x%i == 0){
        count++;
      }
      
   }
   return count ==2 ;
};

function prime_sort(n){
    var res_arr  = [];
    for(i= 2;i<=n;i++){
        if(isprime(i)){
         res_arr.push(i);
        }
    }
      return res_arr;
};

var res = prime_sort(56);
console.log(res);

