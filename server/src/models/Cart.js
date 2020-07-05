const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    user: {
        type: String,
        required: false
    },
    items: [{
        id: String,
        quantity: Number
    }]
});

module.exports = mongoose.model('Cart', schema);