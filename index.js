const express = require("express");
const routes = require("./routes.js");

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(routes)



app.listen(3000, () => {
  console.log('rodando na porta 3000')
})