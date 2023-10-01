const express = require("express");
const hbs = require("hbs");
const app = express();
const path = require("path");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => res.render ("index"));
app.get("players", (req, res, next) => res.render("player"));
app.get("/teams", (req, res, next) => res.render("teams"));

app.listen(3000, () => console.log('My app listening on port 3000! '));