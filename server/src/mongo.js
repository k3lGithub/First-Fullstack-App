const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shop', 
{useNewUrlParser: true, useUnifiedTopology: true});


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error'));
db.once('open', function() {
    //we're connected!
    console.log("Mongoose is online")
});