const today = new Date().getDay()

switch (today){
    case 0:
        console.log("Today is holiday") /// sunday
        break;
    case 1:
        console.log("Working day today")
        break;
    case 2:
        console.log("Working day today")
        break;
    case 3:
        console.log("Working day today")
        break;
    case 4:
        console.log("Working day today")
        break;
    case 5:
        console.log("Working day today")
        break;
    case 6:
        console.log("Today is holiday") // saturday
    default:
        console.log("Invalid day")
}    


// improved version of above
switch (today){
    case 0:
        console.log("Today is holiday") /// sunday]
        break;
    case 6:
        console.log("Today is holiday") // saturday
        break;
    default:
        console.log("Working day")
}


// you can write exact solution using if/else
if(today === 0 || today === 6){
    console.log("Today is holiday")
}else if(today > 6){
    console.log("Invalid day")
}else{
    console.log("Working day")
}

// best ever solution on this planet
const workingDays = [1, 2, 3, 4, 5]
const holidays = [0, 6]

if(workingDays.includes(today)){
    console.log("today is working day")
}else if(holidays.includes(today)){
    console.log("Today is holiday boooo")
}else{
    console.log("On this planet, this is not a day, check on mars")
}


// on more solution
if(today === 0 || today === 6){
    console.log("Today is holiday boooo")
}else if(today > 0 && today < 6){
    console.log("today is working day")
}else{
    console.log("On this planet, this is not a day, check on mars")
}
