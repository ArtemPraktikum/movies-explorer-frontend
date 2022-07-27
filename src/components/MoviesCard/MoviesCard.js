import "./MoviesCard.css";
import card_img from "../../images/card_img.png";
import { useState } from "react";

function MoviesCard() {
  const [CardImgLiked, setCardImgLiked] = useState(false);

  function handleLikeCard() {
    setCardImgLiked(true);
  }
  // function handleDislikeCard() {
  //   setCardImgLiked(false);
  // }

  return (
    // контейнер всей карточки
    <article className="movies-card">
      {/* контейнер описания и кнопки */}
      <div className="movies-card__container">
        {/* контейнер для текста */}
        <div className="movies-card__text-container">
          {/* название фильма */}
          <h3 className="movies-card__name">33 слова о дизайне</h3>
          {/* продолжительность фильма текст */}
          <p className="movies-card__film-lenght">1ч 42м</p>
        </div>
        {/* кнопка добавить в избр. или удал. из него (класс и вид карточки будет меняться динамически  в зависимости от роута с помощью логики на след этапе jsx логики будет что то вроде "путь  = "/saved-movies" ? нарисовать кнопку удаления : нарисовать кнопку доб. в избр.") */}
        <button
          type="button"
          aria-label="Кнопка: добавить в избранное или удалить из него"
          className={
            CardImgLiked
              ? "movies-card__btn movies-card__btn_liked"
              : "movies-card__btn movies-card__btn_disliked"
          }
          onClick={handleLikeCard}
        ></button>
      </div>
      {/* картинка в карточке */}
      <img className="movies-card__img" alt="Картинка фильма" src={card_img} />
    </article>
  );
}

export default MoviesCard;
