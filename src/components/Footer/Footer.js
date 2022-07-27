import "./Footer.css";

function Footer() {
  return (
    // весь футер
    <footer className="footer">
      {/* глав заголовок футера */}
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      {/* контейнер для даты и контейнера с ссылками */}
      <div className="footer__container">
        {/* текст год */}
        <span className="footer__year">&copy;2020</span>

        {/* список контейнер для ссылок */}
        <ul className="footer__links-container">
          <li>
            {/* ссылка текст */}
            <a
              className="footer__link"
              href="https://practicum.yandex.ru/"
              target="blank"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a
              className="footer__link"
              href="https://github.com/"
              target="blank"
            >
              Github
            </a>
          </li>
          <li>
            <a
              className="footer__link"
              href="https://www.facebook.com/"
              target="blank"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
