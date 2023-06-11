const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: [5, 'Name is too short!'],
        match: [/^[A-Za-z0-9]+$/, 'Name must be auphanumeric!'],
    },
    description: String,
    imageUrl: String,
});

const Accessory = mongoose.model('Accessory', accessorySchema);
module.exports = Accessory;