const express = require('express')
const app = express()

let port = 3000

// Serve static files like index.html
app.use('/', express.static(__dirname + '/web'))

// The site is served on http://localhost:port
app.listen(port)
