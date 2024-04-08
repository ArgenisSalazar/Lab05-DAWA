const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("inicio");
});

app.get("/alumnos", (req, res) => {
    res.render("alumnos");
});

app.get("/profesores", (req, res) => {
    res.render("profesores");
});

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);