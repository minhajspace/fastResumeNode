const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,

    },
    accessToken: {
        type: String
    },
    userId: {
        type: String
    }

})


const User = new mongoose.model('User', userSchema)

module.exports = User;

