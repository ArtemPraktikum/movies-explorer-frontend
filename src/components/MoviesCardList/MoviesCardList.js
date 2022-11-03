import "./MoviesCardList.css";

import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return (
    // контейнер всего компонента
    <section className="movies-card-list">
      {/* контейнер для карточек */}
      <div className="movies-card-list__gallery">
        {props.movies.length !== 0 ? (
          props.movies.map((movie) => {
            return (
              // комп каждой карточки
              <MoviesCard
                key={Math.random()}
                movie={movie}
                onLikeClick={props.onLikeClick}
                urlAddOn={props.urlAddOn}
                savedMovies={props.savedMovies}
              />
            );
          })
        ) : (
          <p>Подходящий фильм не найден. Попробуйте ввести другой запрос.</p>
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;
