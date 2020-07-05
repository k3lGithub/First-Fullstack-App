import createUser from "../../api/cart/buyProducts.js";
import page from "//unpkg.com/page/page.mjs";


// Get Product Details
const loginUser = async () => {
  const response = await $.ajax({
    type: "GET",
    xhrFields: { withCredentials: true },
    url: `${apiUrl}/products`,
  });
  console.log(response)
  return response;
};

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
  </tr>
    `);
    }
    addTotal(total);
    console.log(total);
  })

  function addTotal(total) {
    $(".cart-list").append(`<tr>
  <td></td>
  <td></td>
  <td></td>
  <td style="font-weight: 800;">Total:</td>
  <td style="font-weight: 800;">$${total}</td>
  </tr>`);
  }
}
export default checkout;