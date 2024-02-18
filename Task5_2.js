/*
Exercise:
Write a function that calculates and returns the cost of a shopping cart after all discounts have been applied. 
The function takes 3 parameters as arguments: 
1) Total amount of the cart; 
2) Number of items in the cart; 
3) Promotional code (null by default).
Rules and procedure (order is important!) for calculating discounts:
1. If the promotional code is 'GIVE300', then 300 is subtracted from the amount. 
Moreover, if the amount is less than 300, then the total cost will be 0.
2. If the number of items in the cart is ≥10, a 5% discount is applied to the entire amount.
3. For an amount exceeding 50,000, a 20% discount is applied to the excess amount 
(that is, to the difference between the cart amount and 50,000)
4. If the promotional code is 'DISCOUNT15', then a 15% discount is applied to the entire amount, 
but only if the amount is ≥ 20,000
Each subsequent discount must be checked and applied to the amount 
after the previous discounts have been applied.
*/

let totalCart = 303;
let itemsCart = 1;
let promocode = 'GIVE300';

function calcCart (totalCart, itemsCart, promocode = null) {
    if (promocode === 'GIVE300' && totalCart >= 300) {
        totalCart -= 300;
    } else if (promocode === 'GIVE300') {
        totalCart = 0;
    }
    if (itemsCart >= 10) {
        totalCart *= 0.95;
    }
    if (totalCart > 50000) {
        const discount = (totalCart - 50000) * 0.2;
        totalCart -= discount;
    }
    if (promocode === 'DISCOUNT15' && totalCart >= 20000) {
        totalCart *= 0.85;
    }

    return totalCart;
}

console.log(calcCart(totalCart, itemsCart, promocode));