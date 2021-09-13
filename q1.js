// num=int(input("enter a number"))
// if num%3==0 and num%5==0:
//     print("fizz-buzz")
// elif num%3==0:
//     print("fizz")
// elif num%5==0:
//     print("buzz")
// else:
//     print("buzz fizz")


const num1 = require("readline-sync");
var num= num1.questionInt("enter a number : ")
if (num%3==0 && num%5==0){
    console.log("fizz-buzz")
}else
if (num%3==0){
    console.log("fizz")  
}else
if (num%5==0){
    console.log("buzz")
}else{
    console.log("buzz-fizz")
}

