import "./Profile.css";
import Header from "../Header/Header";

function Profile(props) {
  return (
    // реакт контейнер
    <>
      {/* хедер */}
      <Header loggedIn={props.loggedIn} />
      {/* весь компонент профиля */}
      <section className="profile">
        {/* заголовок приветствие, имя буудет изменяться логикой */}
        <h1 className="profile__title">Привет, Виталий!</h1>
        {/* контейнер формы с 2умя импутами */}
        <form className="profile__form" name="profile">
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
                // value будет меняться логикой
                value={"Виталий"}
                required
              />
            </li>

            <li className="profile__form_input-label-container">
              <label className="profile__form_label">E-mail</label>
              <input
                className="profile__form_input"
                type="email"
                placeholder="Введите новый E-mail"
                value={"pochta@yandex.ru"}
                required
              />
            </li>
          </ul>

          {/* текстовая кнопка отправить на сервер изменённые данные  */}
          <button
            className="profile__btn"
            type="submit"
            aria-label="кнопка отправить на сервер изменённые данные"
          >
            Редактировать
          </button>
          {/* текстовая кнопка разлогиниться */}
          <button
            className="profile__btn profile__btn_logout"
            type="button"
          >
            Выйти из аккаунта
          </button>
        </form>
      </section>
    </>
  );
}

export default Profile;
