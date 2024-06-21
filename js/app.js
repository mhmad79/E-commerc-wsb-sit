// open close cart
let cart = document.querySelector(`.cart`);

function open_cart() {
  cart.classList.add(`active`);
}

function close_cart() {
  cart.classList.remove(`active`);
}
// open close menu
let menu = document.querySelector(`#menu`);

function open_menu() {
  menu.classList.add(`active`);
}

function close_menu() {
  menu.classList.remove(`active`);
}

// cheing-item-img

let bigimg = document.getElementById("bigimg");

function changeItrmImge(img){
    bigimg.src = img
};

// add items in cart

let all_products_json;

let items_in_cart = document.querySelector(".items_in_cart")
let product_cart = [];

function addToCart(id , btn){
    product_cart.push(all_products_json[id])
    btn.classList.add(`active`)

    console.log(product_cart);
    getCartItem()
}

let conunt_item = document.querySelector(`.conunt_item`);
let count_item_cart = document.querySelector(`.count_item_cart`);
let pric_cart_total = document.querySelector(`.pric_cart_total`);

let price_cart_head = document.querySelector(`.price_cart_head`);

function getCartItem(){
    let toTal_price = 0;

    let items_c = "";
    for (let i = 0; i < product_cart.length; i++) {
        items_c += `
        
        <div class="item-cart">
        <img src="${product_cart[i].img}" alt="">
        <div class="content">
            <h4>${product_cart[i].name}</h4>
            <p class="price-cart">${product_cart[i].price}</p>
        </div>
        <button onClick = "remove_from_cart(${i})" class="delete-item"><i class="fa-solid fa-trash-can"></i></button>
    </div>
        `
        toTal_price += product_cart[i].price
    }
    items_in_cart.innerHTML = items_c

    price_cart_head.innerHTML = "$ " + toTal_price

    conunt_item.innerHTML = product_cart.length;

    count_item_cart.innerHTML =  (`(${ product_cart.length} Item in cart)`)

    pric_cart_total.innerHTML = "$ " + toTal_price

}

function remove_from_cart(index){
product_cart.splice(index, 1)
getCartItem()

let addToCartButons = document.querySelectorAll(".fa-cart-plus");

for (let i = 0; i < addToCartButons.length; i++){
    addToCartButons[i].classList.remove("active")

    product_cart.forEach(product =>{
        if(product.id == i){
        addToCartButons[i].classList.add("active")
        }
    })

}
}

//

let back_to_top = document.querySelector(".back_to_top")

back_to_top.addEventListener("click", function(){
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
})