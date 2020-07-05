import loginUser from "../../api/user/loginApi.js";


const submitHandler = async (formData) => {
    loginUser(formData).then(() => {
      $("#form-login").prepend(`<div class="alert alert-success" role="alert">User successfully logged in</div>`);
    }).catch((e)=>{
      $("#form-login").prepend(`<div class="alert alert-danger" role="alert">User not found. Please try again.</div>`);
    });
  }

const login = (ctx, next) => {
   /*template*/
  $('#content').append(`
  <form id="form-login">
      <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" id="username" 
                          placeholder="username..." name="username">
      </div>
      <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" 
                  id="password" name="password" placeholder="password...">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  `);


  $("#form-login").submit((e) => {
      e.preventDefault();

      const formData = {
          username: $("#username").val(),
          password: $("#password").val()
      };

      console.log(formData);
      submitHandler(formData);
  });

}

export default login;