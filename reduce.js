var arr = [{firstName:"hari",age:24},
           {firstName:"santosh",age:35},
           {firstName:"watt",age:26}];

const output = arr.reduce((acc,cur)=>{
    if(!acc[cur.age<30]){
       acc[cur] = ++acc[cur];
    }
    return acc;
},{});
console.log(output);