const mongoose = require('mongoose');

const CarsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },

    detail:{
        type: String,
        required: true,
    },

    price:{
        type: Number,
        required: true,
    },
});

const CarsModel = mongoose.model('Cars', CarsSchema);
module.exports = CarsModel;