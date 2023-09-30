const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
    console.log(request);
    response.send('<h1>Welcome!</h1>');
});

app.get('/cat', (request, response, next) => {
    response.send(`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Cat</title>
          <link rel="stylesheet" href="/stylesheets/style.css" />
        </head>
        <body>
          <h1>Cat</h1>
          <p>This is my second route</p>
          <img src="/images/cool-cat.jpg" />
        </body>
      </html>
    `);
  });


  app.get('/code', (request, response, next) => {
    response.send(`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Code</title>
          <link rel="stylesheet" href="/stylesheets/style.css" />
        </head>
        <body>
          <h1>Code</h1>
          <p>This is my third route</p>
          <img src="/images/cool-code.jpg" />
        </body>
      </html>
    `);
  });

app.listen(3000, () => console.log('My first app listening on port 3000'));
