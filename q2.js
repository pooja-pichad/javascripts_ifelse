// num1=int(input("enter the number"))
// num2=int(input("enterthe number"))
// num3=int(input("enter the number"))
// if num1==num2==num3:
//     print("equilateral")
// elif (num1==num2!=num3) or (num1!=num2==num3) or (num1==num3!=num2) :
//     print("isoscales triangle")
// else:
//     print("scalen trIangle")  


const num=require("readline-sync")
var num1=num.questionInt("enter a number :")
var num2=num.questionInt("enter a number :")
var num3=num.questionInt("enter a number :")
if (num1==num2==num3){
    console.log("equilateral")
}else if(num1==num2!=num3 || num1!=num2==num3 || num1==num3 !=num2){
    console.log("isoscales triangle")
}else{
    console.log("scalen traingle")
}