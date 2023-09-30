const express = require('express');
const app = express();
app.use(express.static('public'));

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home-page.html'));
app.get('/cat', (request, response, next) => response.sendFile(__dirname + '/views/cat-page.html'));
app.get('/code', (request, response, next) => response.sendFile(__dirname + '/views/code-page.html'));
app.get("/test", (req, res) => res.render("test"));
app.get("/about", (req, res) => res.render("about"))

app.get("/", (req, res, next) => {
    let data = {
        name: "John",
        lastName: "Rocking it!",
        bio: "Passionate about learning, growing, and spreading positivity",
        cities: ["Amsterdam", "Barcelona", "Berlin", "Lisbon", "Madrid", "Mexico City", "Miami", "Paris", "Sao Paulo"]

    };
    res.render("index", data);
});
    
    


app.listen(3000, () => console.log('My first app listening on port 3000'));

