/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

// импорт компонентов
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

function App() {
  // состояние логина
  const [loggedIn, setloggedIn] = useState(true);
  return (
    // контейнер всей страницы
    <div className="app">
      {/* свитч компонент-конейнер для всех роутов */}
      <Switch>
        {/* компонент страницы «О проекте» main */}
        <Route exact path="/">
          <Main loggedIn={loggedIn} />
        </Route>
        {/* компонент страницы с поиском по фильмам */}
        <Route exact path="/movies">
          <Movies loggedIn={loggedIn} />
        </Route>
        {/* компонент страницы с сохранёнными карточками фильмов */}
        <Route exact path="/saved-movies">
          <SavedMovies loggedIn={loggedIn} />
        </Route>
        {/* компонент страницы изменения профиля */}
        <Route exact path="/profile">
          <Profile loggedIn={loggedIn} />
        </Route>
        {/* компонент страницы регистрации */}
        <Route exact path="/signup">
          <Register />
        </Route>
        {/* компонент страницы авторизации */}
        <Route exact path="/signin">
          <Login />
        </Route>
      </Switch>
      {/* компонент для любого несуществуюшего роута */}
      <Route path="/123">
        <NotFoundPage />
      </Route>
    </div>
  );
}

export default App;
