import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
/* import App from "./../src/App"; */

const app = express();
const port = 9000;

app.use(express.static("dist"));

app.get("/", (req, res) => {
  /* const html = renderToString(<App />); */
  /*  const html = renderToString(React.createElement(App)); */
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>React SSR App</title>
    </head>
    <body>
      <div id="app"><h1>${html}</h1></div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
