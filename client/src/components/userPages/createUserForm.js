import createUser from "../../api/user/signupApi.js";

const submitHandler = async (formData) => {
    createUser(formData).then(() => {
      $("#form-signup").prepend(`<div class="alert alert-success" role="alert">Account created</div>`);
    }).catch((e)=>{
      console.log(e);
      $("#form-login").prepend(`<div class="alert alert-danger" role="alert">Please try again</div>`);
    });
  }

const signup = (ctx, next) => {
  /*template*/
  $('#content').append(`
  <form id="form-signup">

  <div class="form-row name">
    <div class="col-md-4 mb-3">
      <label for="validationServer01">Name</label>
   
      <input type="text" class="form-control" id="username" placeholder="Given name" value="" required>
    </div>

    <div class="col-md-4 mb-3 email">
      <label for="validationServer02">Password</label>
      <input type="text" class="form-control" id="password" placeholder="password" value="" required>
    </div>

    <div class="col-md-4 mb-3 phone">
      <label for="phone">Email</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="email">Email</span>
           </div>
           <input type="text" class="form-control" id="validationServerUsername" placeholder="Email" aria-describedby="inputGroupPrepend3" required>
         </div>
    </div>
  </div>

  <div class="form-row address">
    <div class="col-md-6 mb-3">
      <label for="validationServer03">Address</label>
      <input type="text" class="form-control id="address" placeholder="City" required>
    </div>

    <div class="col-md-3 mb-3 state">
      <label for="validationServer04">State</label>
      <input type="text" class="form-control" id="state" placeholder="State" required>
    </div>

    <div class="col-md-3 mb-3 postcode">
      <label for="validationServer05">Postcode</label>
      <input type="text" class="form-control" id="postcode" placeholder="2000" required>
    </div>
  </div>

  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck3" required>
      <label class="form-check-label" for="invalidCheck3">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
  `);



  $("#form-signup").submit((e) => {
    e.preventDefault();
    let username = $("#username").val();
    console.log(username);
    let password = $("#password").val();
    let email = $("#email").val();
    let address = $("#address").val();
    let state = $("#state").val();
    let postcode = $("#postcode").val();

      const formData = {
        username: username,
        password: password,
        email: email,
        address: address,
        state: state,
        postcode: postcode
      };
      console.log(formData);
      submitHandler(formData);
  });
}

export default signup;