const path = require('path');
const Express = require('express');

const app = Express();
const port = 8080;

// This is fired every time the server side receives a request
app.use(handleRender);

// We are going to fill these out in the sections to follow
function handleRender(req, res) { /* ... */ };
function renderFullPage(html, preloadedState) { /* ... */ };

app.listen(port);
