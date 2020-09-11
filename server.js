const express = require('express');
const app = express();
const cors = require('cors');
const goalsRoutes = require('./routes/goals')
const quotesRoutes = require('./routes/quotes')

require('dotenv').config();

const PORT = process.env.PORT;
console.log(PORT)

app.use(cors());
app.use(express.json());
app.use('/goals', goalsRoutes);
app.use('/quotes', quotesRoutes);



// app.get('/', (req, res)=>{
//     res.send('Hello World!')
// })

app.listen(PORT, function(){
    console.log(`Example app listening at http://localhost:${PORT}`)
})