import React from "react";
import { renderToString } from "react-dom/server";
import App from "../src/App";

const ssr = () => {
  const appElement = React.createElement(App);
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>React SSR App</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="root">${renderToString(appElement)}</div>
  <script src="./bundle.cjs"></script>
</body>
</html>
`;
};

export default ssr;
