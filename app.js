const express = require('express')
const app = express()
const rotas = require('./controllers/rotas')

app.use(express.json())

app.listen(3000, () => {
    console.log(`Example app listening on port 3k`)
})

rotas(app)