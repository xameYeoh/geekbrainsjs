const calculateCartPrice = (cart) => {
    let sumPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        item = cart[i];
        sumPrice += item.price;
    }
    return sumPrice;
};

let shop = [];
let cart = [];

const generateShop = () => {
    for (let i = 0; i < 3; i++) {
        const item = {
            name: "",
            price: ""
        };

        item.name = `Product #${i+1}`;
        item.price = Math.floor(Math.random() * 100);

        shop.push(item);
    }
}

const addProductsPriceAndName = (shop) => {
    const productsPrices = document.querySelectorAll(".products__item-price");
    const productsNames = document.querySelectorAll(".products__item-name");
    for (let i = 0; i < shop.length; i++) {
        productsPrices[i].innerText = shop[i].price;
        productsNames[i].innerText = shop[i].name;
    }
}

const addItemToCartEvent = (event) => {

}

const addPriceToProducts = (shop) => {
    const products = document.querySelectorAll(".products__item");
    const buyButtons = document.querySelectorAll(".buy-button");
    for (const button of buyButtons) {
        button.onclick = () => {
            cart.push(shop[button.id]);
            console.log(cart);
        }
    }
}



generateShop();
addPriceToProducts(shop);
addProductsPriceAndName(shop);

const calculateCartButton = document.querySelector(".calculate-cart");
calculateCartButton.onclick = () => {
    const cartPrice = calculateCartPrice(cart);
    console.log(cartPrice);
    const cartPriceText = document.querySelector(".cart__order-price");
    const cartItem = document.querySelector(".cart__item");


    cartPriceText.innerText = `Total order price: ${cartPrice}`;
    document.querySelectorAll('.cart__item_new').forEach(function (a) {
        a.remove()
    })
    for (let i = 0; i < cart.length; i++) {

        let newCartItem = document.createElement("div");
        newCartItem.classList.add("cart__item", "cart__item_new");
        newCartItem.innerHTML = '';
        newCartItem.innerHTML = cartItem.innerHTML;

        document.querySelector(".cart").prepend(newCartItem);
        const cartItemName = document.querySelector(".cart__item-name");
        const cartItemPrice = document.querySelector(".cart__item-price");
        cartItemName.innerText = `Product name: ${cart[i].name}`;
        cartItemPrice.innerText = `Product price: ${cart[i].price}`;

    }
}

console.log(shop); // сама корзина 