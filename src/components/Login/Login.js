import "./Login.css";
import { NavLink } from "react-router-dom";

import UseFormHook from "../../utils/UseFormHook";

function Login(props) {
  // копипаст решение из тренажера
  const { values, isValid, handleChange, errors } = UseFormHook({
    email: "",
    password: "",
  });

  // при сабмите формы передать в функцию с запросом к апи данные из инпутов
  const onLoginSumbit = (evt) => {
    evt.preventDefault();
    props.handleLogin({
      email: values.email,
      password: values.password,
    });
  };

  return (
    // контейнер стр. регистрации
    <section className="login">
      {/* кликабельное лого сайта */}
      <NavLink className="login__logo" to="/" />
      {/* заголовок */}
      <h1 className="login__title">Рады видеть!</h1>
      {/* контейнер формы с 3мя импутами */}
      <form className="login__form" name="login" onSubmit={onLoginSumbit}>
        {/* контейнер для всех импут-контейнеров и подписи */}
        <ul className="login__form_input-container">
          {/* контейнер для лейбла и импута */}
          <li className="login__form_input-container_element">
            <label className="login__form_label">E-mail</label>
            <input
              className="login__form_input"
              type="email"
              placeholder="Введите ваш E-mail"
              required
              onChange={handleChange}
              values={values.email}
              name="email"
              // примитивная валидация поля емаил что бы не допустить ввода не тех символов, копипаста из интрернета
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            />
            {/* всплывающая подпись с сообщением о ошибке */}
            <span className="login__form_error-text">{errors.email}</span>
          </li>
          <li className="login__form_input-container_element">
            <label className="login__form_label">Пароль</label>
            <input
              className="login__form_input"
              type="password"
              placeholder="Введите ваш пароль"
              required
              onChange={handleChange}
              values={values.password}
              name="password"
              minLength="6"
              maxLength="20"
            />
            <span className="login__form_error-text">{errors.password}</span>
          </li>
          {/* доп сообщение об ошибке после отправки */}
          <span className="login__form_error-text">{props.loginErr}</span>
        </ul>
        {/* текстовая кнопка зарег. */}
        <button
          className="login__form_btn"
          type="submit"
          aria-label="кнопка подтвердить логин"
          disabled={!isValid}
        >
          Войти
        </button>
        {/* контейнер для текста и ссылки */}
        <div className="login__form_text-link-container">
          {/* текст */}
          <p className="login__form_question-text">Ещё не зарегистрированы?</p>
          {/* текс ссылка */}
          <NavLink className="login__form_link" to="/signup">
            Регистрация
          </NavLink>
        </div>
      </form>
    </section>
  );
}

export default Login;
