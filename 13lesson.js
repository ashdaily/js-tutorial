/*
    15 x 1 = 15
    15 x 2 = 30
    15 x 3 = 45
    15 x 4 = 60
    15 x 5 = 75
    15 x 6 = 90
    15 x 7 = 105
    15 x 8  = 120
    15 x 9 = 135
    15 x 10 = 150
*/

var number = 15;
var times;

for(times = 1; times <=100; times++){
    console.log(`${number} x ${times} = ${number*times}`)
}

var favFood = ["biryani", "meat", "banana"]
// favFood.length will be 3, indexes will be 0, 1, 2
// favFood[0][0]
var i;

for(i = 0; i <= 2; i++){
    console.log(favFood[i])
}
// step1: i = 0
// step2: 0 < 3 is true
// step3: run the code block, favFood[0] (biryani will print)
// step4: add 1 to i, now i = 1
// step5: 1 < 3 is true
// step6: run the code block, favFood[1] (meat will print)
// step7: add 1 to i, now i = 2
// step8: 2 < 3 is true
// step9: run the code block, favFood[2] (banana will print)
// step10: add 1 to i, now i = 3
// step11: 3 < 3 is false
// step12: it will not run the code block (loop finished)