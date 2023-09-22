const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    A1: Number,
    A2: Number,
    A3: Number,
    A4: Number,
    D1: Number,
    D2: Number,
    movieName: {
        type: String,
        required: true
    },
    timing: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    }
})

const Lastbooking = mongoose.model("Lastbooking", movieSchema)

module.exports = Lastbooking