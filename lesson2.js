// new data type
var x = true; // this is a boolean
var y = false; // this is also boolean

var isFunny = true;
var isOld = false;

var isJapanese = true; // OK, Yes, Something positive
var isFrench = false; // NOT OK, No, Something negative
var hasKids = null; // Nothing, None, not known

1 == 1 // true
1 == 3 // false
"abc" == "cef" // false
"abc" == "ABC" // false
true == true // true
true == false // false
null == false // false

1 == "1" // true
// == will not check data type
1 === "1"

1 === 2 ? console.log("miki") : console.log("mouse")
// before the ? js will evaluate whether true or false
// js will run the snippet on the left side of : when true
// js will run the snippet on the right side of : when false

var adultAge = 18;
var myAge = 17;

myAge > adultAge ? console.log("You can drink") : console.log("すみません、お酒はだめ")


var myName = "miki asano"
myName.length > 5 ? console.log("why is your name so long ?") : console.log("nice name")


var enterPassword = "niigata"
enterPassword.length < 8 ? console.log("Hey, that password is too short") : null

var email = "miki@gmail.com"

email.includes("@") // true
email.includes("¥") // false

// check email or not

email.includes("@") ? console.log("Nice email") : console.log("enter a valid email")


1 === 1 // true 
"abc" === "abc" // true

1 === 1 && "abc" === "abc" // && means AND, if both are true, whole statement is true

1 === 2 && "abc" === "abc" // false

1 === 2 || "abc" === "abc" // || means OR, if either is true, whole statement is true

! 1 === 1 // ! means NOT, will convert the result to opposite