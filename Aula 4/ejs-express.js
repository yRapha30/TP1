const port = 8080;

//Express
const express = require("express");
const app = express();
app.set('view engine', 'ejs');

app.get("/teste", (request, response) => {
response.render("teste");
});

app.use((request, response, next) => {
response.status(404).send("<h1>Formulário enviado!</h1>");
})

app.listen(port, () => {
console.log(`Servidor funcionando na porta: ${port}`);
});