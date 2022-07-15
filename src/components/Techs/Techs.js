import "./Techs.css";

function Techs() {
  return (
    <section className="techs" id="Techs">
      {/* глав заголовок блока */}
      <h2 className="techs__title">Технологии</h2>
      {/* подконтейнер для содержимого блока */}
      <div className="techs__container">
        {/* подзаголовок */}
        <h3 className="techs__subtitle">7 технологий</h3>
        {/* абзац про технологии */}
        <p className="techs__paragraph">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        {/* контейнер для текста */}
        <ul className="techs__gallery">
          {/* текст с бэкграундом */}
          <li className="techs__gallery_img">HTML</li>
          <li className="techs__gallery_img">CSS</li>
          <li className="techs__gallery_img">JS</li>
          <li className="techs__gallery_img">React</li>
          <li className="techs__gallery_img">Git</li>
          <li className="techs__gallery_img">Express.js</li>
          <li className="techs__gallery_img">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
