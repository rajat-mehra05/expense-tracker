const mongoose = require('mongoose')

//creating schema
const TransactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Add some text']
    },

    amount: {
        type: Number,
        required: [true, 'Add a positive or negative number']
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Transaction', TransactionSchema)