const express = require('express')
const app = express()
const port = 3000

let items = []

app.use(express.json())

app.get('/', (req, res) => {
    res.json(items[1])
})

app.post('/', (req, res) => {
    items.push(req.body.name)
    console.log(req.body)
    res.send(`Criando dados de ${req.body.name}`)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})