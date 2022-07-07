/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

// импорт компонентов
import Main from "../Main/Main";

function App() {
  // состояние логина
  const [loggedIn, setloggedIn] = useState(false);
  return (
    // контейнер всей страницы 
    <div className="app">
      {/* свитч компонент-конейнер для всех роутов */}
      <Switch>
        {/* компонент страницы «О проекте» */}
        <Route exact path="/">
          <Main loggedIn={loggedIn} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
