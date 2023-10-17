import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Webpack App</title>
  </head>
  <body>
    <div id="root">Hello World!!</div>
  </body>
</html>`);
});

export default app;
