import "./Login.css";
import { NavLink } from "react-router-dom";

// тот же самый компонент регистрации, только логин. не придумал гничего умнее чем просто сделать ещё 1 компонент

function Login() {
  return (
    // контейнер стр. регистрации
    <section className="register">
      {/* кликабельное лого сайта */}
      <NavLink className="register__logo" to="/" />
      {/* заголовок */}
      <h1 className="register__title">Рады видеть!</h1>
      {/* контейнер формы с 3мя импутами */}
      <form className="register__form" name="register">
        {/* контейнер для всех импут-контейнеров и подписи */}
        <ul className="register__form_input-container">
          {/* контейнер для лейбла и импута */}
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
              className="register__form_input"
              type="password"
              placeholder="Ведите ваш пароль"
              required
              value={12345678912345}
            />
          </li>
        </ul>
        {/* текстовая кнопка зарег. */}
        <button
          className="register__form_btn"
          type="submit"
          aria-label="кнопка подтвердить регистрацию"
        >
          Войти
        </button>
        {/* контейнер для текста и ссылки */}
        <div className="register__form_text-link-container">
          {/* текст */}
          <p className="register__form_question-text">
            Ещё не зарегистрированы?
          </p>
          {/* текс ссылка */}
          <NavLink className="register__form_link" to="/signup">
            Регистрация
          </NavLink>
        </div>
      </form>
    </section>
  );
}

export default Login;
