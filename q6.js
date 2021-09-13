// 
const a=require("readline-sync")
var medicalcause=a.question("eter a cause :")
var classheld=a.questionInt("enter a number of class held")
var classattended=a.questionInt("enter a number of class attended")
var varx=classattended/classheld*100
if (medicalcause=="y"){
    console.log("yes allowed")
    if (varx>=75){
        console.log("allowed for exam")
    
    }else{
        console.log("not allowed for exam")
    }
}else{
    console.log("not allowed")
}