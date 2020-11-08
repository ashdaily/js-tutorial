// object
// object can have many properties that can be number, string, boolean, function etc
var person1 = {name : "Donald", age: 19, gender: "male", isJapanese: false} // key:value, attribute:value, property:value
var person2 = {name : "Toshiharu", age: 17, gender: "male", isJapanese: true} 
console.log(person1.name) // object.key => (person.name)


person1.age > 18 ? console.log(person1.name, "is an adult") : console.log(person1.name, "is a baby") 
person2.age > 18 ? console.log(person2.name, "is an adult") : console.log(person2.name, "is a baby") 


var car1 = {brand: "Hyundai", color: "grey", type: "SUV", modelName: "Elantra", madeIn: "Korea"}
var car2 = {brand: "Suzuki", color: "grey", type: "Hatchback", modelName: "Swift", madeIn: "Japan"}
