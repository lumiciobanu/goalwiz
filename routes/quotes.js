const express = require('express');
const router = express.Router();
// const { v4: uuidv4 } = require('uuid');
const quotesData = require('../data/quotes.json');

//API to GET list of all quotes list
router.get('/', (req, res) => {
    const quoteDataList = quotesData.map (quote => {
        return {
            text: quote.text,
            author: quote.author
        }
    })

    res.status(200).json(quotesData);
})

module.exports = router;