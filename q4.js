// num=int(input("enter a number of calss attended "))
// clas=int(input("enter a number of class held"))
// varx=num/clas*100
// if varx>=75:
//     print("student is allowed to seat in exam ")
// else:
//     print("the attendance is low so you not allowed to seat in exam")

const a=require("readline-sync")
var num=a.questionInt("enter a number of class attended:")
var clas=a.questionInt("enter a number class held :")
var varx=num/clas*100
if (varx>=75){
    console.log("student is allowed to seat in exam ")
}else{
    console.log("the attendance is low not allow to exam")
}