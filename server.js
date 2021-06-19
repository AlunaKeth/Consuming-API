const express = require('express')
const app = express()

app.get('/', (req, rest) => {
    return rest.json ({ message: 'ok'})
})

app.listen ('4567')