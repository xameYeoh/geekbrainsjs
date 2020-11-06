const calculateCartPrice = (cart) => {
    let sumPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        item = cart[i];
        sumPrice += item.price;
    }
    return sumPrice;
};

let cart = [];

for (let i = 0; i <= Math.random() * 10; i++) {
    const item = {
        name: String,
        price: Number

    };

    item.name = `Product #${i+1}`;
    item.price = Math.floor(Math.random() * 100);
    cart.push(item);
}

console.log(cart); // сама корзина
console.log(calculateCartPrice(cart)); // стоимость корзины