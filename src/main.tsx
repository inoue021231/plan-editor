// import React from "react";
import { hydrate } from "react-dom";
// import ReactDOM from "react-dom/client";
import App from "./App";

/* ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */

hydrate(<App />, document.getElementById("root"));
