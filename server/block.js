const sha256 = require('crypto-js/sha256');

class Block {
    constructor( index = 0, previousHash = null, data='Genesis') {
        this.index = index;
        this.previousHash = previousHash;
        this.hash = hash.generateHash();
        this.data = data;
        this.timeStamp = new Date();
    }

    generateHash() {
        return sha256(this.index + this.data + this.previousHash + JSON.stringify(this.data)).toString();
    }

}

module.exports = Block