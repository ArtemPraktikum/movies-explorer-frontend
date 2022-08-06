import "./SearchForm.css";

function SearchForm(props) {
  // фунц. обработки сабмита
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.onSearchRequest();
  };
  // фунц. обработки чекбокса
  const handleCheckBox = () => {
    props.onCheckBoxClick();
  };
  // фунц. обработки текста инпута
  const handleSearchInput = (e) => {
    props.setInputValue(e.target.value);
  };
  return (
    // весь компонент
    <section className="search-form">
      {/* контейнер формы */}
      <form
        className="search-form__container"
        name="search"
        onSubmit={handleSubmit}
      >
        {/* контейнер инпута */}
        <div className="search-form__input-container">
          {/* импут в форме */}
          <input
            className="search-form__input"
            required
            type="text"
            placeholder="Фильм"
            name="movie"
            minLength="1"
            maxLength="100"
            value={props.inputValue}
            onChange={handleSearchInput}
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
            <input
              type="checkbox"
              // если чекбокс нажали то стейт чекбокса меняется
              onChange={handleCheckBox}
            />
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
