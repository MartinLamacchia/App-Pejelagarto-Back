const mongoose = require('mongoose')

const CatchFishSchema = new mongoose.Schema({
    participant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    fiscal: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    species: {
        type: String,
        required: true,
        trim: true
    },
    length: {
        type: Number,
        required: true,
        min: 0
    },
    weight: {
        type: Number,
        min: 0
    },
    photo: {
        type: String, 
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('CatchFish', CatchFishSchema)