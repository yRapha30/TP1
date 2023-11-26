const express = require ('express')
const app = express()
const fs = require('fs')

app.use(express.static('public'))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))
const PORT = 8080

app.get("/", (requisicao, resposta) => {
    resposta.render('Início')
})
app.get("/du", (requisicao, resposta) => {
    resposta.render('DUDH')
})
app.get('/log', (request, response) => {
    resultado = ""
    response.render('index', { resultado })
})
app.post('/salvar', (req, res) => {
    let nomeNoForm = req.body.nome
    let cadastro = {nome: nomeNoForm}
    console.log(cadastro);
    console.log('\n'+JSON.stringify(cadastro)+',');
    fs.appendFileSync('nomes.json', `\n${JSON.stringify(cadastro)}`)
    resultado = `Olá, ${nomeNoForm}`
    res.render('index', { resultado })
})
app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`))