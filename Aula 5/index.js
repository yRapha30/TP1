const PORT = 8080;
const express = require("express");
const app = express();
const fs = require('fs');

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
res.render('login')
})

app.post('/app',(req, res) => {
const data = {
nome: req.body.nome,
sobrenome: req.body.sobrenome,
cidade: req.body.cidade
}
res.render('ml', {data})
})

app.listen(PORT, () => {
console.log(`server funcionando na porta ${PORT}`)
})