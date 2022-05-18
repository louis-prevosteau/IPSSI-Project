const mongoose = require("mongoose");
const CommentarySchema = mongoose.Schema({
    title: {type: String, required:true, maxLength: 50},
    content: {type: String, required: true},
    grade: {type: Number, required: false},
    userId: {type: String, required: false},
    productId: {type: String, required: false},
    created_at: {type: Date, required: true, default: Date.now}
}, {versionKey: false // You should be aware of the outcome after set to false
})

const Commentary = mongoose.model("Commentary", CommentarySchema);

module.exports = Commentary;
