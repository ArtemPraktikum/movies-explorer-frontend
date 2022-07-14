import React from "react";
import { NavLink } from "react-router-dom";
import "./NavTab.css";

function NavTab() {
  return (
    // контейнер с навигацией по странице «О проекте»
    <nav className="navtab">
      {/* текст ссылки на id компонентов текущей страницы */}
      <a className="navtab__link" href="#AboutProject">
        О проекте
      </a>
      <a className="navtab__link" href="#Techs">
        Технологии
      </a>
      <a className="navtab__link" href="#AboutMe">
        Студент
      </a>
    </nav>
  );
}

export default NavTab;
