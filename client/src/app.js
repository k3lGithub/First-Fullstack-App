import page from "//unpkg.com/page/page.mjs";

page.configure({window:window});

//components
import nav from './components/common/nav.js';
import homepage from './components/HomePage/products.js';
import login from './components/userPages/loginUserForm.js';
import newUser from './components/userPages/createUserForm.js';
import checkout from './components/CartPage/shoppingBag.js';


const showPages = () => {
    //configure routes

    page('/', () => {
        page.redirect('/home');
    });

    page('/home', nav, homepage);

    page('/login', nav, login);

    page('/signup', nav, newUser);

    page('/checkout', nav, checkout);



    
    page({hashbang: true});
}


//jquery on ready
$(() => {
    showPages();
});