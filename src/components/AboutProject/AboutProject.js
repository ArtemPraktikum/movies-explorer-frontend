import "./AboutProject.css";

function AboutProject() {
  return (
    // контейнер блока о проекте с айди для якоря
    <section className="about-project" id="AboutProject">
      {/* глав заголовок блока */}
      <h2 className="about-project__title">О проекте</h2>
      {/* контейнер для блоков текста с  описанием этапов */}
      <div className="about-project__block-text-container">
        {/* конейнер для заголовка и текста */}
        <div className="about-project__block_text">
          {/* текст заголовок */}
          <h3 className="about-project__block_text_title">
            Дипломный проект включал 5 этапов
          </h3>
          {/* параграф текста */}
          <p className="about-project__block_text_paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>

        {/* конейнер для заголовка и текста */}
        <div className="about-project__block_text">
          {/* текст заголовок */}
          <h3 className="about-project__block_text_title">
            На выполнение диплома ушло 5 недель
          </h3>
          {/* параграф текста */}
          <p className="about-project__block_text_paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>

      {/* контейнер для двух блоков/илюстраций с текстом */}
      <div className="about-project__block-colortext-container">
        {/* контейнер для бэк энд блока */}
        <div className="about-project__front-back-block_back">
          {/* текст с бэкграундом бекенд */}
          <p className="about-project__front-back-block_text about-project__front-back-block_text_backend">
            1 неделя
          </p>
          {/* подпись снизу */}
          <p className="about-project__front-back-block_description">Back-end</p>
        </div>

        {/* контейнер для фронт энд блока */}
        <div className="about-project__front-back-block_front">
          {/* текст с бэкграундом фронтенд */}
          <p className="about-project__front-back-block_text about-project__front-back-block_text_frontend">
            4 недели
          </p>
          {/* подпись снизу */}
          <p className="about-project__front-back-block_description">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
