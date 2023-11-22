const express = require ('express')
const app = express()
app.use(express.static('public'))
app.set("view engine", "ejs")
const PORT = 8080

app.get("/", (requisicao, resposta) => {
    resposta.render('Início')
})
app.get("/du", (requisicao, resposta) => {
    resposta.render('DUDH')
})
app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`))