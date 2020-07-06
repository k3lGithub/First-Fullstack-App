const express   = require("express");
const router    = express.Router();
const User      = require('../models/User');
const bcrypt    = require('bcryptjs');

// public routes - delete later
router.get("/", async (req, res) => {
    const data = await User.find({});
    res.send(data);
});

router.post('/signup', async (req, res) => {
    let status = 404;
    let message = "try again";
    req.body.password = await bcrypt.hash(req.body.password, 12);
    try {
        const data = await User.create(req.body); 
        res.status(200).send(data);    
    }catch{
        res.status(status).send(message);
    }
});

//auth middleware check
router.post("/login", async(req,res) => {
const user = await User.findOne({username: req.body.username});
let status = 404;
let message = "not found. try again"
if (user && await bcrypt.compare(req.body.password, user.password)) {
        req.session.user = {
            username: user.username,
            id: user._id,
            loggedIn: true
        }
        status = 200;
        message = req.session.user;
}
res.status(status).send(message);
})

router.get("/logout", async(req, res) => {
    if(req.session.user){
    await req.session.destroy();
    res.send("logged out");
    }else{
        res.status("404").send("Please login first");
    }
})

module.exports = router;