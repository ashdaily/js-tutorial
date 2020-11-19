const myPet = "tiger" // declaring variable with global scope


function getMyPet(){
    // you can use outside defined variables here in this function body
    console.log(myPet);
    
    const yourPet = "mice"; // declaring variable with local scope
    console.log(yourPet)
}
// can't use local function variable here
// console.log(yourPet)

getMyPet()


// special case
function getMyCar(){
    /*
        When you don't specify type of variable, 
        it will become global once this function is called
    */
    car = "Jeep" 
}

getMyCar() // function gets called here and from now  on car variable will be global
console.log(car)

/*
{
    // whatever you define/declare within the curly brackets, 
    //will not be visible outside of the curly brackets
}
*/


function myFunction1(){
    console.log("myFunction1")

    function myFunction2(){
        console.log("myFunction2")
    }

    myFunction2() // this will work (local scope)
}


myFunction1() // this will work (global scope)

//myFunction2() // this will not work (local scope)
