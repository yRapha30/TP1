const PORT = 8080;
const express = require("express");
const app = express();
const fs = require('fs');

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
res.render('conta')
})

app.post('/app',(req, res) => {
const data = {
n1: req.body.n1,
n2: req.body.n2,
res: parseFloat(req.body.n1) + parseFloat(req.body.n2),
}
res.render('resultado', {data})
})

app.listen(PORT, () => {
console.log(`server funcionando na porta ${PORT}`)
})