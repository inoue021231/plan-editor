/* import React from "react";
import ReactDOM from "react-dom/client"; */
import App from "./App";

import ReactDOMClient from "react-dom/client";

/* ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */

const rootElement = document.getElementById("root");
if (rootElement === null) throw new Error("rootElement was not found.");

ReactDOMClient.hydrateRoot(rootElement, <App />);
