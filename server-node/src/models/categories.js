const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
    name: {type: String, required:true, maxLength: 50},
    description: {type: String, required: true},
}, {versionKey: false // You should be aware of the outcome after set to false
})

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;