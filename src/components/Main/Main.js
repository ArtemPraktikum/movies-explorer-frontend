import React from "react";
// импорт компонентов
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";

import "./Main.css";

function Main(props) {
  return (
    <main>
      <Header loggedIn={props.loggedIn} />
      <Promo />
      <AboutProject />
    </main>
  );
}

export default Main;
