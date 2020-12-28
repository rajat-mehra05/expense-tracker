const express = require('express');
const router = express.Router();
const { getTransactions, addTransactions, deleteTransactions } = require('../controllers/transactionControl');

router
    .route('/')
    .get(getTransactions)
    .post(addTransactions)

//for delete we need an id
router
    .route('/:id')
    .delete(deleteTransactions)    

module.exports = router;