
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
// import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(props) {
  return (
    // контейнер всей страницы
    <>
      {/* компонент хедера */}
      <Header loggedIn={props.loggedIn} />
      {/* компонент  с строкой поиска и чекбосом */}
      <SearchForm />
      {/* компонент с галереей карточек */}
      {/* <MoviesCardList /> */}
      {/* компонент футера */}
      <Footer />
    </>
  );
}

export default Movies;
