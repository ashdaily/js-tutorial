// find the smallest number in the array
var stupidNumbers = [900, 90, 10, 56, 143, 2434, -19, 14.5]
// i = 0
// stupidNumber[i] // 900
var i; 
var sn = undefined;
for(i=0; i < 8; i++){
    if(sn === undefined){
        sn = stupidNumbers[i]
    }else if(sn > stupidNumbers[i]){
        sn = stupidNumbers[i]
    }
}

console.log(sn)
