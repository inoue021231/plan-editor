import express from "express";

const app = express();
const port = 9000;

app.get("/", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>React SSR App</title>
  </head>
  <body>
    <div id="root">HELLO WORLD</div>
  </body>
  </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
