// num1=int(input("enter a number"))
// num2=int(input("enter a number"))
// num3=int(input("enter a number"))
// if num1>num2 and num1>num3:
//     print(num1)
// elif num2>num1 and num2>num3:
//     print(num2)
// elif num3>num1 and num3>num2:
//     print(num3)
// else:
//     print("nothing")

const a=require("readline-sync")
var num1=a.questionInt("enter a number :")
var num2=a.questionInt("enter a number :")
var num3=a.questionInt("enter a number :")
if (num1>num2 && num1>num3){
    console.log(num1)
}else if(num2>num1 && num2>num3){
    console.log(num2)
}else if (num3>num1 && num3>num2){
    console.log(num3)
}else{
    console.log("nothing")
}