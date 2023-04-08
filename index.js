
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("hola mundo!!");
});

app.get("/api/acerca", (req, res) => {
    res.send("somos un equipo de desarrollo");
});

app.get("/api/integrantes", (req, res) => {
    res.send("1.- Ernesto Miranda Choqueticlla \n 2.- Alejandro Lucio Lima Maldonado \n 3.- Deybes Richart Condori Condori");
});

app.get("/api/roles", (req, res) => {
    res.send("ROL_ADMIN");
});

app.listen(3000, () => console.log('Server listening at port 3000'));