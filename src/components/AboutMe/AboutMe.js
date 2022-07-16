import "./AboutMe.css";
import photo from "../../images/photo.png";

import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
  return (
    // контейнер блока aboutme
    <section className="about-me" id="AboutMe">
      {/* глав заголовок блока */}
      <h2 className="about-me__title">Студент</h2>
      {/* подконтейнер для содержимого о студенте */}
      <div className="about-me__container">
        {/* контейнер для текста */}
        <div className="about-me__text-container">
          {/* заголовок имя */}
          <h3 className="about-me__name-title">Виталий</h3>
          {/* подзаголок профа */}
          <h4 className="about-me__proff">Фронтенд-разработчик, 30 лет</h4>
          {/* текст о студенте */}
          <p className="about-me__about">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          {/* контейнер список ссылок на студента */}
          <ul className="about-me__link-list">
            <li>
              {/* текст ссылка */}
              <a
                className="about-me__student-link"
                href="https://ru-ru.facebook.com/"
                target="blank"
              >
                Facebook
              </a>
            </li>
            <li>
              {/* текст ссылка */}
              <a
                className="about-me__student-link"
                href="https://github.com/"
                target="blank"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        {/* фото студента */}
        <img className="about-me__photo" src={photo} alt="Фото студента" />
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
