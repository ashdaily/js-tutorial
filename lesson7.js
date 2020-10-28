// // functions
// // we are programming a robot to function as a waiter at a restaurant
// 

function ExampleFunction(){
    // we write the code here that we often need
    // to reuse again and again
}


function welcomeTheCustomer(){
    console.log("イラシャイマセ")
    console.log("bow..")
}

function offerWater(){
    console.log("now giving the water")
}

function offerMenu(){
    console.log("now giving menu")
}

function walkAway(){
    console.log("walking away")
}

function goToCustomerTable(){
    console.log("walking towards the customer")
}

function askForOrder(){
    console.log("What would you like to eat today sir/ma'am ?")
}

function sendOrderToKitchenIpad(){
    console.log("sending order to kitchen")
}

function serveTheFood(){
    console.log("now serving the food")
    console.log("bow..")
}

function receivePayment(){
    console.log("got the payment")
}

function sayThanks(){
    console.log("ありがとうございました")
}


// this is how to receive a customer
function serveTheCustomer(customerNumber){
    console.log(`serving customer number ${customerNumber}`)
    welcomeTheCustomer()
    offerWater()
    offerMenu()
    walkAway()
    goToCustomerTable()
    askForOrder()
    walkAway()
    sendOrderToKitchenIpad()
    goToCustomerTable()
    serveTheFood()
    walkAway()
    goToCustomerTable()
    offerWater()
    walkAway()
    receivePayment()
    sayThanks()
    console.log(`serving done for customer number ${customerNumber}`)
}

serveTheCustomer(1)
serveTheCustomer(2)
serveTheCustomer(3)
serveTheCustomer(4)
