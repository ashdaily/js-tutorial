function addTwoNumbers(a, b){
    return a + b; // this function's result
}

const result1 = addTwoNumbers(1, 2)
const result2 = addTwoNumbers(1001, 18978987)

console.log(result1)
console.log(result2)

function fullName(firstName, middleName, lastName){
    return firstName + " " + middleName + " " + lastName + "　さん"
}


const user1 = fullName("Miki", "", "Asano")
const user2 = fullName("Shinich", "", "Asano")
const user3 = fullName("Mayu", "", "Kimura")

console.log(user1)
console.log(user2)
console.log(user3)


// in japan we use centimeter
function fromInchesToCentimeter(inches){
    // NOTE: 1 inch = 2.54 cm
    return `${inches * 2.54} センチ`
}

const user1Height = fromInchesToCentimeter(64)
const user2Height = fromInchesToCentimeter(78)
const user3Height = fromInchesToCentimeter(65)

console.log(user1, "is", user1Height);
console.log(user2, "is", user2Height);
console.log(user3, "is", user3Height);


// ground floor in india is 0
// ground floor in japan is 1

function fromJapaneseFloorNumberToIndianFloorNumber(floorNumber){
    return floorNumber - 1;
}

function fromIndianFloorNumberToJapaneseFloorNumber(floorNumber){
    return floorNumber + 1;
}


const myJapaneseHouse = fromJapaneseFloorNumberToIndianFloorNumber(2)
const myIndianHouse = fromIndianFloorNumberToJapaneseFloorNumber(3)


console.log("Me to Indian friend: my house in Japan is  on", myJapaneseHouse, "floor number")

console.log("Me to Japanese friend: my house in India is  on", myIndianHouse, "floor number")



// there is elevator with 300 kg of weight capacity

function dangerWarning(person1, person2, person3, person4, person5){
    var totalWeight = person1 + person2 + person3 + person4 + person5
    
    return totalWeight > 300 ? "Beep Beep Beep, too heavy" : ""
}

const check1 = dangerWarning(0, 0, 0, 0, 0)
console.log(check1)