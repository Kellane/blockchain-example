const express = require('express');
const Blockchain = require('./blockchain');

const server = express();
server.use(express.json());
const blockchain = new Blockchain();

server.get('/', (req, res) => {
    return res.json(blockchain);
})

server.post('/', (req, res) => {
    blockchain.addBlock(req.body);
    
    return res.json(blockchain);
})

server.listen(3000); //localhost:3000


