const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pls add your name"]
    },
    email: {
        type: String,
        required: [true, "Pls add your email address"],
        unique: true,
        trim: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ]
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
        minLength: [6, "Password should be at least 6 characters"]
    }
})

const User = mongoose.Model("User", userSchema)
module.exports = User