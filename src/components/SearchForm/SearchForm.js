import "./SearchForm.css";

function SearchForm() {
  return (
    // весь компонент
    <section className="search-form">
      {/* контейнер формы */}
      <form className="search-form__container" name="search">
        {/* контейнер инпута */}
        <div className="search-form__input-container">
          {/* импут в форме */}
          <input
            className="search-form__input"
            required
            type="text"
            placeholder="Фильм"
          />
          {/* кнопка поиска */}
          <button
            className="search-form__btn"
            type="submit"
            aria-label="Кнопка поиска"
          />
        </div>
        {/* контейнер для чекбокса и подписи */}
        <div className="seach-form__checkbox-container">
          {/* чекбокс (был взят в интернете) */}
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          {/* подпись чекбокса */}
          <p className="search-form__checkbox_description">Короткометражки</p>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
