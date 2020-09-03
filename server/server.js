const express = require('express');
const cors = require('cors');
const app = express();
const quotes = require('./routes/quotes')
// const inventories = require('./routes/inventories')

app.use(cors());
app.use(express.json());

app.use('/quotes', quotes);
// app.use('/inventories', inventories);

require('dotenv').config();

app.get('/', (req, res)=>{
    res.send('Hello World!')
})

const PORT = process.env.PORT;
app.listen(PORT, function(){
    console.log(`Example app listening at http://localhost:${PORT}`)
})