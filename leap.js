
const a=require("readline-sync")
var year=a.questionInt("enter a year :")
if (year%4==0){
    if(year%100==0){
        if (year%400==0){
            console.log("its leap year")
        }else{
            console.log("no its not leap year")
        }
    }else{
        console.log("leap year")
    }
}else{
    console.log("not leap year")
}