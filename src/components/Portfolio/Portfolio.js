import "./Portfolio.css";
import arrow from "../../images/arrow.svg";

function Portfolio() {
  return (
    // главный контейнер
    <section className="portfolio">
      {/* маленький заголовок */}
      <h4 className="portfolio__title">Портфолио</h4>
      {/* список контейнер для ссылок */}
      <ul className="portfolio__link-list">
        {/* элем списка в котором ссылка */}
        <li className="portfolio__link-list_item">
          {/* ссылка контейнер */}
          <a
            className="portfolio__link"
            href="http://risovach.ru/upload/2013/05/mem/o-privet_18233882_orig_.jpeg"
            target="blank"
          >
            {/* текст ссылки */}
            <h4 className="portfolio__link_title">Статичный сайт</h4>
            {/* картинка стрелочки */}
            <img
              className="portfolio__link_picture"
              src={arrow}
              alt="стрелочка картинка"
            />
          </a>
        </li>

        <li className="portfolio__link-list_item">
          <a
            className="portfolio__link"
            href="http://memesmix.net/media/created/qeit5c.jpg"
            target="blank"
          >
            <h4 className="portfolio__link_title">Адаптивный сайт</h4>
            <img
              className="portfolio__link_picture"
              src={arrow}
              alt="стрелочка картинка"
            />
          </a>
        </li>

        <li className="portfolio__link-list_item">
          <a
            className="portfolio__link"
            href="https://cs5.pikabu.ru/post_img/2015/03/23/3/1427078540_1226375358.jpg"
            target="blank"
          >
            <h4 className="portfolio__link_title">Одностраничное приложение</h4>
            <img
              className="portfolio__link_picture"
              src={arrow}
              alt="стрелочка картинка"
            />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
