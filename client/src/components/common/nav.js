import countQuantity from "../../components/common/calculateQuantity.js";

const nav = (ctx, next) => {
  $('#content').empty();
  /*template*/
  $("#content").append(`<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">BRAND LOGO</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/login">login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/signup">Signup</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="/logout">Logout</a>
    </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" id="searchInput" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-light my-2 my-sm-0" id="searchBtn" type="submit">
        <svg class="bi bi-search" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
          <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
        </svg>
      </button>
      <button class="btn btn-outline-light my-2 my-sm-0" id="cartIcon" type="button" data-toggle="modal" data-target="#shoppingBagModal">
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-handbag" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M8 1a2 2 0 0 0-2 2v4.5a.5.5 0 0 1-1 0V3a3 3 0 0 1 6 0v4.5a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z"/>
      <path fill-rule="evenodd" d="M3.405 6a.5.5 0 0 0-.498.45l-.912 6.9A1.5 1.5 0 0 0 3.488 15h9.024a1.5 1.5 0 0 0 1.493-1.65l-.913-6.9a.5.5 0 0 0-.497-.45h-9.19zm-1.493.35A1.5 1.5 0 0 1 3.405 5h9.19a1.5 1.5 0 0 1 1.493 1.35L15 13.252A2.5 2.5 0 0 1 12.512 16H3.488A2.5 2.5 0 0 1 1 13.251l.912-6.9z"/>
    </svg>
      </button>
      <div class="modal" id="shoppingBagModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-center" id="exampleModalLabel">${countQuantity()}ITEMS IN BAG</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <a type="button" class="btn btn-primary" id="checkout"  href="/checkout">Checkout</a>
        </div>
      </div>
    </div>
  </div>
    </form>
  </div>
</nav>`);

  next(); // move onto next middleware
  // update item number everytime
  $("#cartIcon").on("click", ()=>{
    $("#exampleModalLabel").text(countQuantity()+" ITEMS IN BAG");
      })
}
export default nav;