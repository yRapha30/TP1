const express = require ('express')
const app = express()
app.use(express.static('public'))
app.set("view engine", "ejs")

app.get("/", (requisicao, resposta) => {
    resposta.render('index')
})

app.get("/obj", (requisicao, resposta) => {
    resposta.render('objetivos')
})

app.get("/tec", (requisicao, resposta) => {
    resposta.render('tecnologias')
})

app.get("/Port", (requisicao, resposta) => {
    resposta.render('PS')
})

app.get("/C", (requisicao, resposta) => {
    resposta.render('C++')
})

app.listen(8080)