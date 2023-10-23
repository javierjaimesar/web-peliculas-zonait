const express = require('express');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const { default: SearchMovies } = require('./src/assets/pages/SearchMovies');

const app = express();

// Middleware para manejar rutas en el servidor
app.get('/search', (req, res) => {
  const context = {};
  const appHtml = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <SearchMovies />
    </StaticRouter>
  );

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>React Router SSR</title>
      </head>
      <body>
        <div id="root">${appHtml}</div>
      </body>
    </html>
  `;

  res.status(200).send(html);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
