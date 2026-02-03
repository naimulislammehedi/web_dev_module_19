const jim = 89; 
const tim = 88; 
const kim = 98; 

if (jim > tim && jim > kim) {
    console.log('Jim is the ultimate boss'); 
} else if (tim > jim && tim > kim) {
    console.log("Tim is the boss."); 
} else {
    console.log("Kim is the kardashians boss"); 
}

function maxOf(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1; 
    } else if (num2 > num1 && num2 > num3) {
        return num2; 
    } else {
        return num3; 
    }
}

const max1 = maxOf(75, 98, 63); 
console.log(max1); 


const max = Math.max(12, 45, 23, 67, 454, 23); 
console.log(max); 