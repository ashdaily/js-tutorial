/** 
Topic: if else
if: is a keyword
else: is a keyword
example of keywords: if, else, const, let, var, for etc 
usage of if: to find out the truthy statement which means whether some
    statement is true or not
*/

/**
 All the items below will always be true
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
 */
var truth = true; // this is boolean

if(truth){ // inside the brackets, the code will evaluate as true or false
    console.log("this is truth")
    // this code will run only 
    // if isTall value is true
}else{
    console.log("this is not the truth")
    // this code will run only 
    // if isTall value is false
}

var isLoggedIn = true
if(!isLoggedIn){
    console.log("you need to login")
}

if(isLoggedIn){
    console.log("Hello user, welcome to our website")
}


function checkAgeCategory(age){
    if(age < 13){
        return "You are child"
    }else if(age >= 13 && age <= 19){
        return "You are a teenager 青年"
    }else if(age > 19 && age < 35){
        return "You are young adult"
    }else if(age >= 35 && age < 60){
        return "You are oji san / oba san"
    }else{
        // this code will run when all if statements are false
        return "You are ojii san / obaa san"
    }
}


function checkNumberType(number){
    if(number < 0){
        return "Negative number"
    }else if(number > 0){
        return "Positive number"
    }else{
        return "Zero"
    }
}
var testNumber = 1111;
var numberType = checkNumberType(testNumber)
console.log(numberType, testNumber)




const result = checkAgeCategory(34)
console.log(result)


var animals = ["elephant", "cat", "rat"]
if(animals.includes("dog")){
    console.log("We have a dog")
}else{
    console.log("We do not have a dog")
}











