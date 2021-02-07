const express = require("express");
const morgan = require("morgan") //middleware application logger
const fs = require("fs")
const path = require("path");

const app = express(); // crea una instancia de una aplicación de express
app.use(express.json());
app.use(express.urlencoded())

// MORGAN
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

// require de RUTAS de index.js
const routes = require("./routes");
app.use(routes);



const nunjucks = require("nunjucks");
// Configurando Nunjucks
app.set("view engine", "html"); // hace que res.render funcione con archivos html
app.engine("html", nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure("views", {noCache: true}); // apunta a nunjucks al directorio correcto para los templates


app.use(express.static("./public"));

app.listen(3000, function () {
  console.log("Estas escuhando en el puerto 3000");
});
