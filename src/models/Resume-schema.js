const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    middelName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    profession: {
        type: String
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    pincode: {
        type: Number,
        required: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true,
        trim: true
    },
    email: {
        type: Email,
        required: true,
        trim: true
    },
    jobTitle: {
        type: String
    },
    employer: {
        type: String
    },
    employerCity: {
        type: String
    },
    employerState: {
        type: String
    },
    StartData: {
        type: string
    },
    EndData: {
        type: string
    },
    CurrentWorking: {
        type: Boolean
    }


})