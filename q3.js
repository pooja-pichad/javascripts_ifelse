//   age 
const a=require("readline-sync")
var age=a.questionInt("enter a age :")
if (age>=18){
    console.log("eligible for vote ")
}else{
    console.log("not eligible for vote ")
}