import buyProduct from "../../api/cart/buyProducts.js";
import page from "//unpkg.com/page/page.mjs";


// Get Product Details
// const loginUser = async () => {
//   const response = await $.ajax({
//     type: "GET",
//     xhrFields: { withCredentials: true },
//     url: `${apiUrl}/product`,
//   });
//   console.log(response)
//   return response;
// };

// Get Items in Cart, Match and Display

const checkout = (ctx, next) => {
  $(".modal-backdrop.show").remove();

  // Local Storage

  // Get card items
  let cart = localStorage.getItem('cart');
  cart = JSON.parse(cart);
  console.log(cart);

  let list;
  /*template*/
  $('#content').append(`
<div class="shoppingbag-wrapper">
<h3>SHOPPING BAG<h3>
<div class="items-wrapper">
<table class="table">
  <thead>
    <tr>
      <th scope="col">ITEMS</th>
      <th scope="col">QUANTITY</th>
      <th scope="col">AVAILABILITY</th>
      <th scope="col">PRICE</th>
      <th scope="col">ORDER VALUE</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody class="cart-list">
  </tbody>
</table>
</div>
</div>
  `);


  // Load items when page loads in table
  // Table
  $(() => {
    if(cart){

      let total = 0;
      for (let i = 0; i < cart.length; i++) {
        // calculate total order value
        let eachTotal = cart[i].prodPrice * cart[i].quantity;
        total = total + eachTotal;
  
        // append content
        $(".cart-list").append(`
      <tr>
    <td><img src="${cart[i].img}"></td>
    <td>
  
    <div class="dropdown">
    <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    ${cart[i].quantity}
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a id="dropdown1"class="dropdown-item">1</a>
      <a id="dropdown2" class="dropdown-item">2</a>
      <a id="dropdown3" class="dropdown-item">3</a>
      <a id="dropdown4" class="dropdown-item">4</a>
      <a id="dropdown5" class="dropdown-item">5</a>
      <a id="dropdown6" class="dropdown-item">6</a>
      <a id="dropdown7" class="dropdown-item">7</a>
      <a id="dropdown8" class="dropdown-item">8</a>
      <a id="dropdown9" class="dropdown-item">9</a>
    </div>
  </div>
  
    </td>
    <td>Availability</td>
    <td>$${cart[i].prodPrice}</td>
    <td>$${eachTotal}</td>
    <td>
    

    <p>Remove item</p>
    <svg class="removeIcon" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
    <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
    <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
  </svg>

    </td>
    </tr>
      `);
      }
      // addTotal(total);
      addTotal(total);
  
    } else{
      $(".cart-list").append("<p class='noitems'>There are no items in the cart.<p>")
    }

    }
)

function addTotal(total){
  $(".cart-list").append(`<tr>
  <td></td>
  <td></td>
  <td></td>
  <td style="font-weight: 800;">Total:</td>
  <td style="font-weight: 800;"><p>$${total}</p>
  <button class="btn btn-primary" id="checkoutBtn" type="submit">Checkout</button>
  </td>
  </tr>`);



  $("#checkoutBtn").on("click", ()=>{


    for(let i=0; i<cart.length; i++){
      let formData = {
        "_id": cart[i].prodID,
        "quantity": cart[i].quantity     
    }
    buyProduct(cart[i].prodID, formData).then(()=>{
  
    })
    }
    alert("Thank you for your order!");
    // once sucessfull checkout, clear local storage
    window.localStorage.clear();
    // redirect to homepage. cart page will auto reset next time and pick up empty local storage
    page.redirect('/home');
  })

}

}
export default checkout;