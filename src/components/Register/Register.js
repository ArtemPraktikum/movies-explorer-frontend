import "./Register.css";
import { NavLink } from "react-router-dom";
import UseFormHook from "../../utils/UseFormHook";

function Register(props) {
  // копипаст решение из тренажера
  const { values, isValid, handleChange, errors } = UseFormHook({
    email: "",
    password: "",
    name: "",
  });

  // при сабмите формы передать в функцию с запросом к апи данные из инпутов
  const onRegisterSumbit = (evt) => {
    evt.preventDefault();
    props.handleRegister({
      email: values.email,
      name: values.name,
      password: values.password,
    });
  };

  return (
    // контейнер стр. регистрации
    <section className="register">
      {/* кликабельное лого сайта */}
      <NavLink className="register__logo" to="/" />
      {/* заголовок */}
      <h1 className="register__title">Добро пожаловать!</h1>
      {/* контейнер формы с 3мя импутами */}
      <form
        className="register__form"
        name="register"
        onSubmit={onRegisterSumbit}
      >
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
              placeholder="Введите ваше имя"
              required
              onChange={handleChange}
              values={values.name}
              name="name"
              minLength="3"
              maxLength="20"
            />
            {/* всплывающая подпись с сообщением о ошибке */}
            <span className="register__form_error-text">{errors.name}</span>
          </li>
          <li className="register__form_input-container_element">
            <label className="register__form_label">E-mail</label>
            <input
              className="register__form_input"
              type="email"
              placeholder="Введите ваш E-mail"
              required
              onChange={handleChange}
              values={values.email}
              name="email"
            />
            {/* всплывающая подпись с сообщением о ошибке */}
            <span className="register__form_error-text">{errors.email}</span>
          </li>
          <li className="register__form_input-container_element">
            <label className="register__form_label">Пароль</label>
            <input
              className="register__form_input register__form_input_red"
              type="password"
              placeholder="Введите ваш пароль"
              required
              onChange={handleChange}
              values={values.password}
              name="password"
              minLength="6"
              maxLength="20"
            />
            {/* всплывающая подпись с сообщением о ошибке */}
            <span className="register__form_error-text">{errors.password}</span>
          </li>
          {/* доп сообщение об ошибке после отправки */}
          <span className="register__form_error-text">{props.registrErr}</span>
        </ul>
        {/* текстовая кнопка зарег. */}
        <button
          className="register__form_btn"
          type="submit"
          aria-label="кнопка подтвердить регистрацию"
          // если плохо то серая
          disabled={!isValid}
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
