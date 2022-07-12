import React from "react";
import Header from "../Header/Header";
import "./Main.css";

function Main(props) {
  return (
    <div>
      <Header loggedIn={props.loggedIn} />
    </div>
  );
}

export default Main;
