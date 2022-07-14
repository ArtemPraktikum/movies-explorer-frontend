import React from "react";
import { NavLink } from "react-router-dom";
import "./NavTab.css";

function NavTab() {
  return (
    // контейнер с навигацией по странице «О проекте»
    <nav className="navtab">
      {/* текст ссылки на компоненты текущей страницы */}
      <NavLink className="navtab__link" to="#AboutProject">
        О проекте
      </NavLink>
      <NavLink className="navtab__link" to="#Techs">
        Технологии
      </NavLink>
      <NavLink className="navtab__link" to="#AboutMe">
        Студент
      </NavLink>
    </nav>
  );
}

export default NavTab;
