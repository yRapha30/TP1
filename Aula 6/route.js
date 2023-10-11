const PORT = 8080;
const express = require("express");
const app = express();
const fs = require('fs');

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.sendFile(_dirname + "/conta.ejs")
})

app.post('/',(req, res) => {
    const n1 = Number.body.n1
    const n2 = Number.body.n2
    
    const soma = n1 + n2

    res.send("resultado:" +soma)
})

app.listen(PORT, () => {
console.log(`server funcionando na porta ${PORT}`)
})