
const express = require('express')
    
const server = express()
    
server.get('/', (req, res) => {
    return res.json({ message: 'Hello World!' })
})

module.exports = server
