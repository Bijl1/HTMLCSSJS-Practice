const express = require('express');
const app = express();

app.get('/home', (request, response, next) => {
    console.log(request);
    response.send('<h1>Welcome!</h1>');
});

app.listen(3000, () => console.log('My first app listening on port 3000'));
