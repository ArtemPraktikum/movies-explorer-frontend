import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header(props) {
  // Состояние BurgerMenu
  const [isBurgerMenuOpen, setisBurgerMenuOpen] = useState(false);

  // Открыть/закрыть BurgerMenu
  function handleOpenBurgerMenu() {
    setisBurgerMenuOpen(true);
  }
  function handleCloseBurgerMenu() {
    setisBurgerMenuOpen(false);
  }

  return (
    // контейнер хедера
    <header className="header">
      {/* лого сайта, показывать всегда */}
      <NavLink className="header__logo" to="/" />

      {/* если логин тру : показать фильмы, сохр. фильмы */}
      {props.loggedIn && (
        // контейнер с ссылками фильмы сохр. фильмы
        <nav className="header__nav-links">
          {/* ссылки текстом */}
          <NavLink className="header__link header__link_movie" to="/movies">
            Фильмы
          </NavLink>
          <NavLink
            className="header__link header__link_movies"
            to="/saved-movies"
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
      )}

      {/* если логин тру показать ссылку текст и значок профиля или на 768 и ниже ссылку текст и бургер кнопку  */}
      {props.loggedIn ? (
        // контейнер
        <nav className="header__nav-profile">
          {/* текст на профиль */}
          <NavLink className="header__link header__link_account" to="/profile">
            Аккаунт
          </NavLink>

          {/* картинка ссылка на профиль */}
          <NavLink className="header__profile-image" to="/profile"></NavLink>

          {/* кнопка бургер меню скрытая на 1280 при клике открыть бургер */}
          <button
            className="header__burger-menu-button"
            type="button"
            onClick={handleOpenBurgerMenu}
          ></button>
        </nav>
      ) : (
        // если логин фолс показать кнопки регистрации и логина

        // контейнер с кнопками авторизации
        <nav className="header__auth-link-container">
          {/* текст на регистрацию */}
          <NavLink className="header__link header__link_auth" to="/signup">
            Регистрация
          </NavLink>

          {/* текст кнопка на логин */}
          <NavLink
            className="header__link header__link_auth header__link_auth_singin"
            to="/signin"
          >
            Войти
          </NavLink>
        </nav>
      )}

      {/* при разрешении <769, при срабатывании бургерменю кнопки, открыть сайдменю навигации */}

      {/* конейнер сайд нав меню */}
      <aside
        // всегда скрыт с помощью динамического класса, если не нажат бургер
        className={
          isBurgerMenuOpen ? "header__side-menu_open" : "header__side-menu"
        }
      >
        {/* кнопка закрытия сайд меню каторая меняет стейт */}
        <button
          className="header__side-menu_close-btn"
          type="button"
          onClick={handleCloseBurgerMenu}
        ></button>

        {/* конейнер в сайд меню для двух контейнеров с ссылками */}
        <ul className="header__side-menu_container">
          {/*контейнер для ссылок в сайд меню */}
          <li className="header__side-menu_container_element">
            {/* текст ссылки в нав меню */}
            <NavLink className="header__link header__link_side-menu" to="/">
              Главная
            </NavLink>
            <NavLink
              className="header__link header__link_side-menu"
              to="/movies"
            >
              Фильмы
            </NavLink>
            <NavLink
              className="header__link header__link_side-menu"
              to="/saved-movies"
            >
              Сохранённые фильмы
            </NavLink>
          </li>

          {/* контейнер для ссылок в профиль, в сайд меню */}
          <li className="header__side-menu_container_element">
            {/* текст на профиль */}
            <NavLink
              className="header__link header__link_account header__link_account_side-menu"
              to="/profile"
            >
              Аккаунт
            </NavLink>
            {/* картинка ссылка на профиль */}
            <NavLink
              className="header__profile-image header__profile-image_side-menu"
              to="/profile"
            ></NavLink>
          </li>
        </ul>
      </aside>
    </header>
  );
}

export default Header;
