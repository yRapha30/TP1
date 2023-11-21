const express = require ('express')
const app = express()
app.use(express.static('public'))
app.set("view engine", "ejs")

app.get("/", (requisicao, resposta) => {
    resposta.render('desk1')
})
app.get("/de", (requisicao, resposta) => {
    resposta.render('desk2')
})
app.get("/desk", (requisicao, resposta) => {
    resposta.render('desk3')
})
app.listen(8080)