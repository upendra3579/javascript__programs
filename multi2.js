// let studentsData = [['Jack', 24], ['Sara', 23],];

// // looping outer array elements
// for(let i = 0; i < studentsData.length; i++){

//     // get the length of the inner array elements
//     let innerArrayLength = studentsData[i].length;
    
//     // looping inner array elements
//     for(let j = 0; j < innerArrayLength; j++) {
//         console.log(studentsData[i][j]);
//     }
// };

// var somedata = [["hello","sundar",24],["heyy","sunny",23]];
// somedata.forEach((value)=>{
//    value.forEach((res)=>{
//     console.log(res);
//    })
// });

var data = [["mrs","radhe",24],["mr","shyam",25]];
for(let i of data){
    for(let j of i){
        console.log(j);
    }
};