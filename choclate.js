// var number = 12;
const r=require("readline-sync")
var number=r.question("enter a number ")
if(number%3 == 0 && number%7==0){
   console.log("choco")
}
else if(number % 3==0){
   console.log("late")
}
else if(number%7==0) {
   console.log("Chocolate")
}
else {
   console.log("Not divisible by 3 , 7")
}


