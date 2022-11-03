import { useState, useEffect } from "react";
import "./MoviesCard.css";

function MoviesCard(props) {
  // состояние кнопки лайка
  const [isLiked, setIsLiked] = useState(() =>
    props.savedMovies.some((item) =>
      props.movie.id === undefined
        ? item.movieId === props.movie.movieId
        : item.movieId === props.movie.id
    )
  );

  // динамический класс кнопки лайка
  const likeBtnClass = `movies-card__btn ${
    isLiked && `movies-card__btn_liked`
  }`;
  // функ. при клике на лайк
  const handleLike = () => {
    props.onLikeClick(props.movie);
  };
  // функ сделать отображение длины фильма как в макете
  const countMovieDuration = (mins) => {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return `${hours}ч ${minutes}м`;
  };

  // хук если меняются избран. фильмы выставить правильный класс лайка
  useEffect(() => {
    setIsLiked(() =>
      props.savedMovies.some((item) =>
        props.movie.id === undefined
          ? item.movieId === props.movie.movieId
          : item.movieId === props.movie.id
      )
    );
  }, [props.savedMovies]);

  return (
    // контейнер всей карточки
    <article className="movies-card">
      {/* контейнер описания и кнопки */}
      <div className="movies-card__container">
        {/* контейнер для текста */}
        <div className="movies-card__text-container">
          {/* название фильма */}
          <h3 className="movies-card__name">{props.movie.nameRU}</h3>
          {/* продолжительность фильма текст */}
          <p className="movies-card__film-lenght">
            {countMovieDuration(props.movie.duration)}
          </p>
        </div>
        {/* кнопка лайка удаления дислайка */}
        <button
          type="button"
          aria-label="Кнопка"
          className={likeBtnClass}
          onClick={handleLike}
        ></button>
      </div>
      {/* картинка в карточке (потом обернуть в ссылку для кликов на трейлеры)*/}
      <a href={props.movie.trailerLink} target="_blank" rel="noreferrer">
        <img
          className="movies-card__img"
          alt="Картинка фильма"
          src={`${props.urlAddOn}${
            props.movie.image.url === undefined
              ? props.movie.image
              : props.movie.image.url
          }`}
        />
      </a>
    </article>
  );
}

export default MoviesCard;
