/* contains all methods 
that will use model to 
interact with the database */

const TransactionModel = require('../models/TransactionModel')

// @desc get all transactions
// @route GET /api/v1/transactions
// @access Public (for now)
exports.getTransactions = async (req,res,next) => {
    try {
        const transactions = await TransactionModel.find()

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

// @desc Add a transaction
// @route POST request /api/v1/transactions
// @access Public (for now)
exports.addTransactions = async (req,res,next) => {
    try {
        const { text, amount } = req.body;

        const transaction = await TransactionModel.create(req.body)

        return res.status(201).json({
            success: true,
            data: transaction
        });
    } catch (err) {
        if(err.name === "ValidationError") {
            const messages = Object.values(err.errors).map(val => val.messages)
            //client error -> 400 
            return res.status(400).json({
                success: false,
                error: messages
            }); 
        }   else {
            return res.status(500).json({
            success: false,
            error: 'Server Error'
        });   
    }
}
}
// @desc delete all transactions
// @route GET request /api/v1/transactions:id
// @access Public (for now)
exports.deleteTransactions = async (req,res,next) => {
   try {
       const transaction = await TransactionModel.findById(req.params.id)

       if(!transaction) {
           return res.status(404).json({
               success: false,
               error: 'No transaction found'
           });
       }

       await transaction.remove();

       return res.status(200).json({
           success: true,
           data: {}
       });
   } catch (err) {
       return res.status(500).json({
            success: false,
            error: 'Server Error'
       });       
   }
}