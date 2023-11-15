const express = require ('express')
const app = express()
app.set("view engine", "ejs")

app.get("/", (requisicao, resposta) => {
    resposta.render('index')
})
app.get("/morales", (requisicao, resposta) => {
    resposta.render('miles')
})
app.get("/stacy", (requisicao, resposta) => {
    resposta.render('gwen')
})
app.get("/o'hara", (requisicao, resposta) => {
    resposta.render('miguel')
})
app.listen(8080)