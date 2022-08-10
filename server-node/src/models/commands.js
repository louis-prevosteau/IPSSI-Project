const mongoose = require("mongoose");
const CommandSchema = mongoose.Schema({
    state: {type: Number, required: false, default: 0},
    userId: {type: String, required: true},
    amount: {type: Number, required: true},
    created_at: {type: Date, required: true, default: Date.now}
}, {versionKey: false // You should be aware of the outcome after set to false
})

const Command = mongoose.model("Command", CommandSchema);

module.exports = Command;
