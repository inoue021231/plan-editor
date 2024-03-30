import express from "express";
import ssr from "./ssr";

const app: express.Express = express();
const port = 9000;

app.use(express.static("dist"));

app.get("/", (req, res) => {
  const response = ssr();
  res.send(response);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
