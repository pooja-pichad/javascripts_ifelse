//
const a=require("readline-sync")
var num=a.questionInt("enter a number :")
var winning_number=27
if (num==winning_number){
    console.log("you won")
}else{
    if (num<winning_number){
        console.log("too low")
    }else{
        console.log("too high")
    }
}