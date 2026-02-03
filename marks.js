const disha = 56; 
const salma = 91; 

if (disha > salma) {
    console.log("Disha will get the strawberry"); 
} else {
    console.log("Salman will eat the strawb")
}

// inside a function 
function getMax (num1, num2) {
    if (num1 > num2) {
        return num1; 
    } else {
        return num2; 
    }
}

const max1 = getMax(56, 89); 
const max2 = getMax(76, 69); 
const ultimateMax = getMax(max1, max2); 
console.log("Max of two is: ", ultimateMax); 