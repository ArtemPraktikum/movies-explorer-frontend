import React from "react";
// импорт компонентов
import Header from "../Header/Header";
import Promo from "../Promo/Promo";

import "./Main.css";

function Main(props) {
  return (
    <div>
      <Header loggedIn={props.loggedIn} />
      <Promo />
    </div>
  );
}

export default Main;
