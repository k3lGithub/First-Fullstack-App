let calculateQuantity = () => {

    let cart = localStorage.getItem('cart');
    cart = JSON.parse(cart);
    let count = 0;
    if (cart) {
        for (let i = 0; i < cart.length; i++) {
            // console.log("cart lenth cart", cart);
            // console.log("cart length", cart.length);
            // console.log(parseInt(cart[i].quantity));
            count = parseInt(cart[i].quantity) + count;
            console.log("count", count);
            
        }
    }
    return count
}
export default calculateQuantity;