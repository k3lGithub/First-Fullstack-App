import {apiUrl} from '../../consts.js';
import page from "//unpkg.com/page/page.mjs";

const logout = async() => {
   const response = await $.ajax({
        type: "GET",
        url: `${apiUrl}/user/logout`,
        contentType: 'application/json',
    }).then(()=>{
        alert("User has been sucessfully logged out");
    }).catch((e)=>{
        alert(e.responseText);
    })
    page.redirect('/home');
}

export default logout;