const express = require('express')

const dealerRouter = require('./dealer-router.js')

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('api home')
})

server.use('/api/dealer', dealerRouter);

const port = 5000;

server.listen(port, ()=> {console.log(`n** API on port ${port}**/n`)})