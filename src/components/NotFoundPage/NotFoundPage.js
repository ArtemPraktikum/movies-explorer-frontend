import "./NotFoundPage.css";
import { NavLink } from "react-router-dom";

function NotFoundPage() {
  return (
    // вся страница
    <section className="not-found-page">
      {/* глав. заголовок */}
      <h1 className="not-found-page__title">404</h1>
      {/* абзаз текста */}
      <p className="not-found-page__paragraph">Страница не найдена</p>
      {/* ссылка на пред. стр. */}
      <NavLink className="not-found-page__link " to="/">
        Назад
      </NavLink>
    </section>
  );
}

export default NotFoundPage;
