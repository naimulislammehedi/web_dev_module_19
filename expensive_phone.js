const phones = [
    {name: 'Samsung', price: 20000, camera: '12mp', color: 'black'},
    {name: 'xaomi', price: 22000, camera: '12mp', color: 'black'},
    {name: 'Oppo', price: 25000, camera: '12mp', color: 'black'},
    {name: 'Iphone', price: 100000, camera: '12mp', color: 'black'},
    {name: 'Walton', price: 27000, camera: '12mp', color: 'black'},
    {name: 'HTC', price: 40000, camera: '12mp', color: 'black'},
]

function getExpensivePhone(phones) {
    let max = phones[0]; 
    for (const phone of phones) {
        if (phone.price > max.price) {
            max = phone
        }
    }
    return max
}

const maxPrice = getExpensivePhone(phones); 
console.log("Expensive Phone is: ", maxPrice)