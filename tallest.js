const height = [56, 43, 76, 66, 59, 74, 88]; 

function getMax(numbers) {
    let max = numbers[0]; 
    for (const num of numbers) {
        if (num > max) {
            max = num; 
        } 
    }
    return max; 
}

const max = getMax(height); 
console.log("Max value is: ", max); 