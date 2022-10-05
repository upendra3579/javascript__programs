const lcm = (arr)=>
{
    const gcd = (a,b)=>(b?gcd(b,a%b):a);
    return arr.reduce((a,b)=>(a*b)/gcd(a,b));
}
var arr = [24,36,72,144];
console.log(lcm(arr));
