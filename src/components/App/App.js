import "./App.css";
import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import { CurrentUserContext } from "../../context/CurrentUserContext";

import {
  // запрос к апи на регистрацию юзера
  register,
  // запрос к апи на логин юзера
  login,
  // запрос к апи на всю инфу о юзере
  getUserInfo,
  // запрос к апи на изменнение данных юзера
  editProfile,
} from "../../utils/MainApi";

function App() {
  // что бы работал перенос юзера на страницы
  const history = useHistory();

  // стейты :
  // состояние чекбокса
  const [isChecked, setIsChecked] = useState(false);
  // успешный логин нет \ да
  const [loggedIn, setloggedIn] = useState(false);
  // успешное изменение профиля нет \ да
  const [isProfileChange, setisProfileChange] = useState(false);
  // текст ошибки при регистрации пусто \ текст
  const [registrErr, setregistrErr] = useState("");
  //  текст ошибки при логине пусто \ текст
  const [loginErr, setloginErr] = useState("");
  // текст ошибки при изменнение данных юзера пусто \ текст
  const [profileErr, setprofileErr] = useState("");
  // объект с данными о юзере пусто \ { _id email name __v}
  const [user, setuser] = useState({});
  // валиден ли запрос юзера нет/да
  const [isSearchRequestValid, setIsSearchRequestValid] = useState(false);

  function handleCheckBox() {
    setIsChecked(!isChecked);
    localStorage.setItem("checkbox", !isChecked);
  }

  // функция при сабмите формы логина:
  // принимать мейл и пароль из инпутов
  const handleLogin = ({ email, password }) => {
    // обнулять и прятать текст ошибки если была
    setloginErr("");
    // сделать запрос  на апи с этими логин и поролем
    login(email, password)
      // потом если всё ок в then если нет в catch
      .then((data) => {
        // записать токен юзера в локал сторе
        localStorage.setItem("token", data.token);
        // сделать запрос на апи с этим токеном что бы получить данные юзера
        getUserInfo()
          // потом если всё ок в then если нет в catch
          .then((userObj) => {
            // записать в обьект с юзер данными в стейт
            setuser(userObj);
            // изменить логин стейт на тру
            setloggedIn(true);
            // так или иначе потом перекинуть юзера на стр фильмов
            history.push("/movies");
          })
          // потом обработать ошибки если не прошёл getUserInfo()
          .catch((err) => {
            if (err.status === 401) {
              // записать в стейт сообщение о ошибке
              setloginErr("Неверный email или пароль");
            } else {
              // записать в стейт сообщение о ошибке
              setloginErr("Что-то пошло не так");
            }
          });
      })
      // потом обработать ошибки если не прошёл login(email, password)
      .catch((err) => {
        if (err.status === 401) {
          // записать в стейт сообщение о ошибке
          setloginErr("Неверный email или пароль");
        } else {
          // записать в стейт сообщение о ошибке
          setloginErr("Что-то пошло не так");
        }
      });
  };
  // функция при сабмите формы регистрации:
  // принимать имя, мейл и пароль из инпутов
  const handleRegister = ({ name, email, password }) => {
    // обнулять и прятать текст ошибки если была
    setregistrErr("");
    // сделать запрос на апи с name, email, password что бы пройти регистрацию
    register(name, email, password)
      // потом если всё ок в then если нет в catch
      .then((res) => {
        // записать в обьект с юзер данными в стейт
        setuser(res);
        // сразу же авторизовать юзера с данными из инпутов
        handleLogin({ email, password });
      })
      // потом обработать ошибки если не прошёл  register(name, email, password)
      .catch((err) => {
        if (err.status === 409) {
          // записать в стейт сообщение о ошибке
          setregistrErr("Данный email уже зарегистрирован");
        } else {
          // записать в стейт сообщение о ошибке
          setregistrErr("Что-то пошло не так");
        }
      });
  };
  // функция  при сабмите формы изменения профиля:
  // принимать мейл и пароль из инпутов
  const handleUpdateUser = ({ name, email }) => {
    // обнулять и прятать текст ошибки если была
    setprofileErr("");
    // поставить стейт успешное изменение профиля в false на случай ели уже было изменение данных юзера
    setisProfileChange(false);
    // сделать запрос  на апи с этими именем и почтой
    editProfile(name, email)
      // потом если всё ок в then если нет в catch
      .then((res) => {
        // записать в обьект с юзер данными в стейт
        setuser(res);
        // изменить стейт на тру что бы, при его значение тру показывать юзеру сообщение что всё ок
        setisProfileChange(true);
      })
      // потом обработать ошибки если не прошёл editProfile(name, email)
      .catch((err) => {
        if (err.status === 409) {
          // записать в стейт сообщение о ошибке
          setprofileErr("Данный email уже зарегистрирован");
        } else {
          // записать в стейт сообщение о ошибке
          setprofileErr("Что-то пошло не так");
        }
      });
  };
  // функция при разлогирование юзером на странице профиля созданная для импорта в profile.js
  const handleLogOut = () => {
    // очистить стейт с данными о юзере
    setuser("");
    // проставит стейл логина на фолс
    setloggedIn(false);
    // удалить токен юзера и сохр. фильмы в локал сторе
    localStorage.clear();
    // перекинуть юзера на главную страницу
    history.push("/");
  };
  // функция для логина юзера при его заходе на сайт если в локал сторе уже есть его токен
  const handleTokenCheck = () => {
    // если в локал сторе есть токен юзера то:
    if (localStorage.getItem("token")) {
      // сделать запрос на апи с этим токеном что бы получить данные юзера
      getUserInfo()
        // потом если всё ок в then если нет в catch
        .then((userObj) => {
          // изменить логин стейт на тру
          setloggedIn(true);
          // записать в обьект с юзер данными в стейт
          setuser(userObj);
        })
        // потом обработать ошибки если не прошёл getUserInfo()
        .catch((err) => {
          console.log(err);
          // если токен не рабочий то удалить его из локал сторе
          localStorage.clear();
        });
    }
  };
  // Хук для логина юзера при его заходе на сайт если в локал сторе уже есть его токен, сработает единожды
  useEffect(() => {
    handleTokenCheck();
  }, []);
  return (
    // позволяем дочерним компонентам, использующим этот контекст, подписаться на его изменения
    <CurrentUserContext.Provider value={user}>
      {/* контейнер всей страницы */}
      <div className="app">
        {/* свитч компонент-конейнер для всех роутов */}
        <Switch>
          {/* компонент страницы «О проекте» main */}
          <Route exact path="/">
            <Main loggedIn={loggedIn} />
          </Route>
          {/* компонент страницы с поиском по фильмам и фильмами */}
          <ProtectedRoute
            path="/movies"
            loggedIn={loggedIn}
            isSearchRequestValid={isSearchRequestValid}
            setIsSearchRequestValid={setIsSearchRequestValid}
            component={Movies}
            isChecked={isChecked}
            handleCheckBox={handleCheckBox}
          />
          {/* компонент страницы с сохранёнными карточками фильмов */}
          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            isSearchRequestValid={isSearchRequestValid}
            setIsSearchRequestValid={setIsSearchRequestValid}
            component={SavedMovies}
            isChecked={isChecked}
            handleCheckBox={handleCheckBox}
          />
          {/* компонент страницы изменения профиля */}
          <ProtectedRoute
            exact
            path="/profile"
            component={Profile}
            loggedIn={loggedIn}
            handleUpdateUser={handleUpdateUser}
            handleLogOut={handleLogOut}
            isProfileChange={isProfileChange}
            profileErr={profileErr}
          />
          {/* компонент страницы регистрации */}
          <Route exact path="/signup">
            <Register handleRegister={handleRegister} registrErr={registrErr} />
          </Route>
          {/* компонент страницы авторизации */}
          <Route exact path="/signin">
            <Login handleLogin={handleLogin} loginErr={loginErr} />
          </Route>
          {/* компонент для любого несуществуюшего роута */}
          <Route path="/*">
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
