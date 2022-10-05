function sort_prime(num) {
    const prime_num1 = [];
    const prime_num2 = [];
    for (var i = 0; i <= num; i++) {
      prime_num2.push(true );
      
    }
    console.log( prime_num2.push(true));
    for (var i = 2; i <= num; i++) {
      if (prime_num2[i]) {
        prime_num1.push(i);
        for (let j = 1; i * j <= num; j++) {
          prime_num2[i * j] = false;
        }
      }
    }
  
    return prime_num1;
  }
  
  console.log(sort_prime(5))
//   console.log(sort_prime(11))
//   console.log(sort_prime(19))
  