import "./Register.css";
import { NavLink } from "react-router-dom";

function Register() {
  return (
    // контейнер стр. регистрации
    <section className="register">
      {/* кликабельное лого сайта */}
      <NavLink className="register__logo" to="/" />
      {/* заголовок */}
      <h1 className="register__title">Добро пожаловать!</h1>
      {/* контейнер формы с 3мя импутами */}
      <form className="register__form" name="register">
        {/* контейнер для всех импут-контейнеров и подписи */}
        <ul className="register__form_input-container">
          {/* контейнер для лейбла и импута */}
          <li className="register__form_input-container_element">
            {/* лейбл */}
            <label className="register__form_label">Имя</label>
            {/* сам инпут */}
            <input
              className="register__form_input"
              type="text"
              placeholder="введите ваше имя"
              required
              value={"Виталий"}
            />
          </li>

          <li className="register__form_input-container_element">
            <label className="register__form_label">E-mail</label>
            <input
              className="register__form_input"
              type="email"
              placeholder="введите ваш E-mail"
              required
              value={"pochta@yandex.ru"}
            />
          </li>

          <li className="register__form_input-container_element">
            <label className="register__form_label">Пароль</label>
            <input
              className="register__form_input register__form_input_red"
              type="password"
              placeholder="Ведите ваш пароль"
              required
              value={12345678912345}
            />
            {/* всплывающая подпись с сообщением о ошибке */}
            <span className="register__form_error-text">
              Что-то пошло не так...
            </span>
          </li>
        </ul>
        {/* текстовая кнопка зарег. */}
        <button
          className="register__form_btn"
          type="submit"
          aria-label="кнопка подтвердить регистрацию"
        >
          Зарегистрироваться
        </button>
        {/* контейнер для текста и ссылки */}
        <div className="register__form_text-link-container">
          {/* текст */}
          <p className="register__form_question-text">Уже зарегистрированы?</p>
          {/* текс ссылка */}
          <NavLink className="register__form_link" to="/signin">
            Войти
          </NavLink>
        </div>
      </form>
    </section>
  );
}

export default Register;
