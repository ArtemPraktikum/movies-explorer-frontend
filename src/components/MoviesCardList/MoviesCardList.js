import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    // контейнер всего компонента
    <section className="movies-card-list">
      {/* контейнер для карточек */}
      <div className="movies-card-list__gallery">
        {/* компонент одной карточки */}
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>

      {/* если эта кнопка будет не нужна на странице с сохр. фильмами, тогда скрою её с помощью js логики */}

      {/* текстовая кнопка добавляющая карточки в галерею */}
      <button className="movies-card-list__btn" type="button">
        Еще
      </button>
    </section>
  );
}

export default MoviesCardList;
