const mongoose = require('mongoose')

// Arrays for Trip
const travelMethod = ['Car', 'Flight', 'Bus', 'Train', 'Walk']

const tripSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    travelMethod: [String]
})

module.exports = mongoose.model('Trip', tripSchema)
module.exports.travelMethod = travelMethod