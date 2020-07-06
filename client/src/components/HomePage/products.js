import { apiUrl } from "../../consts.js";


const getProducts = async () => {
  const response = await $.ajax({
    type: "GET",
    xhrFields: { withCredentials: true },
    url: `${apiUrl}/product`,
  });
  // console.log(response);
  return response;
};


const products = async (ctx, next) => {
  getProducts().then((response) => {

    const productList = $('<div class="product-wrapper"</div>');
    response.forEach((product, i) => {
      // add create + event listener for click button one liner
      // check if its already in cart if it is just modify the quantiy in the cart cart[index].quantity++;
        /*template*/
      productList.append(`<div class="list-wrapper">   
      <img src=${product.img}></img>
      <p>${product.name}</p>
      <p>$${product.price}</p>
      <div class="quantity">
      <button id="plus${i}" type="button">
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4z"/>
      <path fill-rule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"/>
    </svg>
    </button>
    <input class="quantityInput" id="quantityInput${i}" type="text" maxlength="1" value="1">
<button id="minus${i}" type="button">
<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-minus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4z"/>
  <path fill-rule="evenodd" d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
</svg>
      </button>
      </div>
      <button class="addToCart" id="addToCart${i}">Add to Cart</button>
      </div>
   `);

   $("#content").append(productList);

      // Quantity Icons
      // Need code clean to make it dry code - Scope clean up
      $(`#plus${i}`).on("click", () => {
        let currentNo = parseInt($(`#quantityInput${i}`).val());
        let addNo = currentNo+1;
        // Limit on order quantity
        if(currentNo<9){
          $(`#quantityInput${i}`).val(addNo);
        }
       })
  
       $(`#minus${i}`).on("click", () => {
        let currentNo = parseInt($(`#quantityInput${i}`).val());
        let addNo = currentNo-1;
        if(currentNo >1){
          $(`#quantityInput${i}`).val(addNo);
        }
       })

   // Local Storage
   let addToCartBtn = $(`#addToCart${i}`);
   let quantityInput = $(`#quantityInput${i}`).val();



      addToCartBtn.on('click', () => {

        let cart = localStorage.getItem('cart'); // cart object

        // check if cart exists - if yes check if item exists
        if(cart){
          cart = JSON.parse(cart);
          for (let i = 0; i<cart.length; i++){
            // console.log("current cart", cart);
            // console.log("product id", product._id);
            // console.log("card product", cart[i].prodID);
            // if item exists update quantity only
            if (product._id == cart[i].prodID){
              // console.log("current cart", cart)
              // console.log("found!")
              let index = i;
              // console.log(index);
         
              // console.log("current quantity", cart[i].quantity);
              // somehow does not like quantityInput as a var
              // console.log("input", parseInt($(`#quantityInput${i}`).val()));
              if(cart[index].quantity < 9){
                cart[index].quantity = cart[index].quantity + parseInt($(`#quantityInput${i}`).val());
              } else{
                alert("9 items limit per order");
              }
              // console.log("qauntiy updated");
              console.log("final cart",cart);
              localStorage.setItem('cart', JSON.stringify(cart));
               // stop loop once first one is found
              return product._id == cart[index].prodID;
            }          
          }
          // otherwise add new item
          cart.push({   
            img: product.img,
            prodID: product._id,
            prodName: product.name,
            prodPrice: product.price,
            quantity: parseInt($(`#quantityInput${i}`).val())
           });          
        }else{
        // if cart does not exists - push cart is new item
          cart = [{
              img: product.img,
              prodID: product._id,
              prodName: product.name,
              prodPrice: product.price,
              quantity: parseInt($(`#quantityInput${i}`).val())
             }]}
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log("final cart",cart);
        })
    })
  })
}



export default products;