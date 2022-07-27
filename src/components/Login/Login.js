import "./Login.css";
import { NavLink } from "react-router-dom";

// тот же самый компонент регистрации, только логин. не придумал гничего умнее чем просто сделать ещё 1 компонент

function Login() {
  return (
    // контейнер стр. регистрации
    <section className="login">
      {/* кликабельное лого сайта */}
      <NavLink className="login__logo" to="/" />
      {/* заголовок */}
      <h1 className="login__title">Рады видеть!</h1>
      {/* контейнер формы с 3мя импутами */}
      <form className="login__form" name="login">
        {/* контейнер для всех импут-контейнеров и подписи */}
        <ul className="login__form_input-container">
          {/* контейнер для лейбла и импута */}
          <li className="login__form_input-container_element">
            <label className="login__form_label">E-mail</label>
            <input
              className="login__form_input"
              type="email"
              placeholder="введите ваш E-mail"
              required
              value={"pochta@yandex.ru"}
            />
          </li>

          <li className="login__form_input-container_element">
            <label className="login__form_label">Пароль</label>
            <input
              className="login__form_input"
              type="password"
              placeholder="Ведите ваш пароль"
              required
              value={12345678912345}
            />
          </li>
        </ul>
        {/* текстовая кнопка зарег. */}
        <button
          className="login__form_btn"
          type="submit"
          aria-label="кнопка подтвердить регистрацию"
        >
          Войти
        </button>
        {/* контейнер для текста и ссылки */}
        <div className="login__form_text-link-container">
          {/* текст */}
          <p className="login__form_question-text">
            Ещё не зарегистрированы?
          </p>
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
