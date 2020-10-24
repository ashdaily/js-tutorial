// array list of things
var toDoList = ["Need to buy socks", "Need to call mom", "Need to go to park", "Need to study Japanese"]

console.log(toDoList) 
console.log(toDoList.length)
console.log(toDoList[0]) // means first element of the array toDoList
// [0, 1, 2, 3, 4, 5, ....] indexes start from 0



// objects inside array
const restaurant1 = {name: "Bali's Rooftop Lounge", website: "http://balislounge.com/", rating: 4.7, address: "Hotel Oyster SCO: 1-2-3, Sector 17A, Chandigarh, 160017 インド", phoneNumber: "+91 98784 30460"}
const restaurant2 = {name: "Barbeque Nation - Chandigarh ", website: "https://www.barbequenation.com/", rating: 4.5, address: "SCO 39, Madhya Marg, Block 2, Sector 26,", phoneNumber: "+91 96549 16060"}

var myFavoriteRestaurants = [restaurant1, restaurant2]

console.log("--")
console.log(myFavoriteRestaurants[0].name)
console.log(myFavoriteRestaurants[0].website)
console.log(myFavoriteRestaurants[0].phoneNumber)
console.log("--")
console.log(myFavoriteRestaurants[1].name)
console.log(myFavoriteRestaurants[1].website)
console.log(myFavoriteRestaurants[1].phoneNumber)

// array can contain any data type or functions 
const myArray = ["my name is bla bla", 1, true, false, null, undefined]