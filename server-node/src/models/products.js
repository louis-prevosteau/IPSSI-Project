const mongoose = require("mongoose");

// const filterSchema = new Schema({
//   category: String,
//   price: Number,
//   stock: Number,
// });

const ProductSchema = mongoose.Schema({
    name: {type: String, required:true, maxLength: 50},
    description: {type: String, required: true},
    price: {type: Number, required: false},
    picture: {type: String, required: false}
}, {versionKey: false // You should be aware of the outcome after set to false
})

// const ProductSchema = new Schema({
//   title: {
//     type: String,
//     required: false,
//   },
//   image: {
//     type: String,
//     required: false,
//   },
//   color: {
//     type: [],
//     required: false,
//   },
//   filters: {
//     type: [filterSchema],
//     required: true,
//   },
//   category: {
//     type: [],
//     required: false,
//   },
//   price: {
//     type: Number,
//     required: false,
//   },
//   description: {
//     type: String,
//     required: false,
//   },
//   stock: {
//     type: Number,
//     required: false,
//   },
// });

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
