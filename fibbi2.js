var fibonacci_series = function (num){
    if (num===1) {
      return [0, 1];
    } 
    else 
    {
      var sum = fibonacci_series(num - 1);
     // console.log(sum[sum.length - 1]);
     // console.log(sum.length - 1);
      console.log(sum[11]);
      sum.push(sum[sum.length - 1] + sum[sum.length - 2]);
      return sum;
    }
  };

 var res = fibonacci_series(12);
 console.log(res);