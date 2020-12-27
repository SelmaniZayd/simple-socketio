const mongoose = require("mongoose");

const theNumberSchema = new mongoose.Schema({
    value: Number
});

const TheNumber = mongoose.model("TheNumber", theNumberSchema);

module.exports = TheNumber;