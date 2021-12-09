const express = require('express');

const server = express();
server.use(express.json());
const blockchain = [];

server.get('/', (req, res) => {
    return res.json(blockchain);
})

server.post('/', (req, res) => {
    const { amount } = req.body;
    blockchain.push(amount);

    return res.json(blockchain);
})

server.put('/:index', (req, res) => {
    const { index } = req.params;
    const { amount } = req.body;

    blockchain[index] = amount;

    return res.json(blockchain);
} )

server.listen(3000); //localhost:3000


