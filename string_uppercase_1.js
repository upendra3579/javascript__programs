// var str = "there is an apple";
// function first_letter_change_touppercase(str){
//     var str = str.split(" ");
//     for(var i=0;i<str.length;i++){
//         str[i] = str[i][0].toUpperCase() + str[i].substr(1)
    
//     }
//     return str.join(" ");
// }
// console.log(first_letter_change_touppercase(str));

function check_for_1_and_3(arr){
    if (arr.includes(1) || arr.includes(3)){
        return true;
    } else {
        return false;
    }
}
let arr = [1,4];
console.log(check_for_1_and_3(arr));
console.log(check_for_1_and_3([2,4]));
console.log(check_for_1_and_3([3,2]));