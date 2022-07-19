/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

// импорт компонентов
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";

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
      </Switch>
    </div>
  );
}

export default App;
