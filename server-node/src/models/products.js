const mongoose = require("mongoose");


const ProductSchema = mongoose.Schema({
    name: {type: String, required:true, maxLength: 50},
    description: {type: String, required: true},
    price: {type: Number, required: false},
    picture: {type: String, required: false},
    id_category: {type: String, required: true}
}, {versionKey: false // You should be aware of the outcome after set to false
})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
