var myname = {
    firstName :"hari",
    lastName :"vishnu"
}

let printName = function(hometown,state){
    console.log(this.firstName + " " + this.lastName + " ,"+ hometown +"," +state);
}
 
var printMyName = printName.bind(myname,"hyderabad");

printMyName("telangana");

Function.prototype.mybind = function(...args){
    let obj = this;
        params = args.slice(1);
    return function(...args2){
        obj.apply(args[0],[...params,...args2]);
    }
}

let printMyName2 = printName.mybind(myname,"hyderabad");
printMyName2("telangana");