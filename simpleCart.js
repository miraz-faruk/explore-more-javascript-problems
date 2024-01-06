function totalCostOfProducts(products) {
    let totalPrice = 0;
    for (let i = 0; i < products.length; i++) {
        const items = products[i];
        totalPrice = totalPrice + items.price;
    }
    return totalPrice;
}

const product = [
    { name: 'Suit', price: 15000 },
    { name: 'Shirt', price: 2500 },
    { name: 'Shoe', price: 3500 },
    { name: 'Belt', price: 1500 },
    { name: 'Tie', price: 500 }
];

const totalCostForShopping = totalCostOfProducts(product);
console.log(totalCostForShopping, 'for shopping');
