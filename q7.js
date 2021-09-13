// 
const a=require("readline-sync")
var num=a.questionInt("enter a number :")
if (num%5==0){
    // console.log("5 aur 15 se divisible hai ")
    if (num%15==0){
        console.log("5 aur 15 se divisible hai ")

        // console.log("divisible hai")
    }else{
        console.log("divisible  nahi hai")
    }
}else{
    console.log("nahi hai")
}