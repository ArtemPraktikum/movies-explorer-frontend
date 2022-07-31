import "./Profile.css";
import Header from "../Header/Header";
import UseFormHook from "../../utils/UseFormHook";
import { useRef, useContext, useState, useEffect } from "react";

// импорт созданного контекста
import { CurrentUserContext } from "../../context/CurrentUserContext";

function Profile(props) {
  // взять данные о юзере из контекста что бы положить их в изначальные инпуты
  const currentUser = useContext(CurrentUserContext);

  // юз реф хуком будем после каждой перемены инпута менять значение рефа(ппц новые технологии, находил это решение 2 дня..)
  const refName = useRef("");
  const refEmail = useRef("");

  // копипаст решение из тренажера
  const { errors, handleChange, isValid } = UseFormHook({
    name: refName.current.value,
    email: refEmail.current.value,
  });

  // стейт для двух инпутов нужный для того что бы если стейт менялся кнопка сабмита стала рабочей
  const [isChange, setisChange] = useState(false);

  // хук для понимания что валью инпутов поменялось и если оно поменялось то изменить стейт изменения данных на тру. юудет срабатывать при каждом наболре символа в инпуте
  useEffect(() => {
    if (
      refName.current.value === currentUser.name &&
      refEmail.current.value === currentUser.email
    ) {
      setisChange(false);
    } else {
      setisChange(true);
    }
  }, [
    refName.current.value,
    refEmail.current.value,
    currentUser.name,
    currentUser.email,
  ]);

  // при сабмите формы передать в функцию с запросом к апи данные из рефа
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // записать в переменные данные из рефа
    let name = refName.current.value;
    let email = refEmail.current.value;

    props.handleUpdateUser({ name, email });

    // сбросить формы что бы избежать конфликтов
    evt.target.reset();
  };

  return (
    // реакт контейнер
    <>
      {/* хедер */}
      <Header loggedIn={props.loggedIn} />
      {/* весь компонент профиля */}
      <section className="profile">
        {/* заголовок приветствие, имя будет изменяться логикой */}
        <h1 className="profile__title">{`Привет, ${currentUser.name} !`}</h1>
        {/* контейнер формы с 2умя импутами */}
        <form className="profile__form" name="profile" onSubmit={handleSubmit}>
          {/* контейнер для импутов */}
          <ul className="profile__form_inputs-container">
            {/* контейнер для импута и лейбла  */}
            <li className="profile__form_input-label-container">
              {/* текст в начале инпута */}
              <label className="profile__form_label">Имя</label>
              {/* сам инпут */}
              <input
                className="profile__form_input"
                type="text"
                placeholder="Введите новое имя"
                required
                ref={refName}
                onChange={handleChange}
                values={refName.current.value}
                defaultValue={currentUser.name}
                name="name"
                minLength="3"
                maxLength="20"
              />
            </li>
            {errors.profileName && (
              <span className="profile__form_error-text">
                {errors.profileName}
              </span>
            )}
            <li className="profile__form_input-label-container">
              <label className="profile__form_label">E-mail</label>
              <input
                className="profile__form_input"
                type="email"
                placeholder="Введите новый E-mail"
                required
                ref={refEmail}
                onChange={handleChange}
                values={refEmail.current.value}
                defaultValue={currentUser.email}
                name="email"
                // примитивная валидация поля емаил что бы не допустить ввода не тех символов, копипаста из интрернета
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              />
            </li>
            {errors.profileEmail && (
              <span className="profile__form_error-text">
                {errors.profileEmail}
              </span>
            )}
          </ul>

          {/* всплывающая подпись с сообщением о ошибке */}
          {props.profileErr && (
            <span className="profile__form_error-text">{props.profileErr}</span>
          )}
          {/* всплывающая подпись с сообщением о успехе изменения данных профиля */}
          {props.isProfileChange && (
            <span className="profile__form_success-text">
              Ваши данные успешно изменены!
            </span>
          )}
          {/* текстовая кнопка отправить на сервер изменённые данные  */}
          <button
            className="profile__btn"
            type="submit"
            aria-label="кнопка отправить на сервер изменённые данные"
            disabled={!isValid || !isChange}
          >
            Редактировать
          </button>
          {/* текстовая кнопка разлогиниться */}
          <button
            className="profile__btn profile__btn_logout"
            type="button"
            aria-label="кнопка выйти из аккаунта"
            onClick={props.handleLogOut}
          >
            Выйти из аккаунта
          </button>
        </form>
      </section>
    </>
  );
}

export default Profile;
