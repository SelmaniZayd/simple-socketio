const TheNumber = require("../models/the-number");
const io = require("../socket");

exports.get_number = async (req, res) => {
    const value = await TheNumber.findOne();
    res.send(value);
};

exports.update_number = async (req, res) => {
    const { _id, value } = req.body;
    const newObject = await TheNumber.findOneAndUpdate({ _id }, req.body, {new: true, useFindAndModify: false});
    io.getIO().emit('number', {action: 'update', value: newObject});
    res.send(newObject);
};