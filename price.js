/*
* Shirt price --> 500
* pant price --> 300
* shoe price --> 900
*/

function eidShopping(shirt, pant, shoe) {
    const shirtPrice = 500; 
    const pantPrice = 300; 
    const shoePrice = 900; 

    const shirtTotalPrice = shirtPrice * shirt; 
    const pantTotalPrice = pantPrice * pant; 
    const shoeTotalPrice = shoePrice * shoe; 

    const totalPrice = shirtTotalPrice + pantTotalPrice + shoeTotalPrice; 

    return totalPrice; 
}

const price = eidShopping(1, 1, 1);
console.log("Total Price is: ", price); 