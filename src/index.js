import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import App from "./components/App/App";

ReactDOM.render(
  // StrictMode для помощи в обнаружении ошибок
  <React.StrictMode>
    {/*  обёртка BrowserRouter для работы роутов*/}
    <BrowserRouter>
    {/* глав комп стр */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
