
function final_digit_sum(num){

function digit_sum(num) {

    var digit_value = 0;
    while (num) {
        digit_value += num % 10;
        num = Math.floor(num / 10);
    }
    return digit_value;
};

var num = 12345;

var count = 0;
while(num>=10){
    count++;
    num = digit_sum(num);
      
}
return count;
};

console.log(final_digit_sum(1234));



// function digit_to_one(num) {

//     var digitSum = function(num) {

//         var digit_sum = 0;
//         while (num) {
//             digit_sum += num % 10;
//             num = Math.floor(num / 10);
//         }

//         return digit_sum;
//     };

//     var result = 0;

//     while (num >= 10) {
//         result += 1;
//         num = digitSum(num);
//     }

//     return result;
// }

// console.log(digit_to_one(123))
// console.log(digit_to_one(156))
