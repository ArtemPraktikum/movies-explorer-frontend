import { useEffect, useState, useContext } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

import { CurrentUserContext } from "../../context/CurrentUserContext";

import { getMovies, deleteMovie } from "../../utils/MainApi";

function SavedMovies(props) {
  // данные юзера
  const currentUser = useContext(CurrentUserContext);
  // сохранённые фильмы
  const [savedMovies, setSavedMovies] = useState([]);

  // текст строки поиска
  const [searchRequest, setSearchRequest] = useState("");
  // состояние загрузки
  const [isLoading, setIsLoading] = useState(false);
  // отобранные фильмы
  const [filteredMovies, setFilteredMovies] = useState([]);
  //  готовые к показу фильмы
  const [renderedMovies, setRenderedMovies] = useState([]);
  //  валью из инпута
  const [inputValue, setInputValue] = useState("");

  // функция проверки валидности запроса юзера
  const checkFormValidity = () => {
    const isRequestValid =
      inputValue.length > 0 && inputValue !== searchRequest;
    isRequestValid && savedMovies.length > 0
      ? props.setIsSearchRequestValid(true)
      : props.setIsSearchRequestValid(false);
  };
  // отобрать фильмы на короткие и длинные и вернуть массивом
  const filterMovies = (allMovies) => {
    return allMovies.filter((movie) => {
      if (props.isChecked) {
        return (
          movie.duration <= 40 &&
          movie.nameRU.toLowerCase().includes(searchRequest.toLowerCase())
        );
      } else {
        return movie.nameRU.toLowerCase().includes(searchRequest.toLowerCase());
      }
    });
  };
  // изменить готовые к показу фильмы после нового поиска
  const renderMovies = () => {
    setRenderedMovies(filteredMovies);
  };
  // вернуть отобранные фильмы (либо короткие либо длинные)
  const getFilterMovies = () => {
    setFilteredMovies(() => {
      return filterMovies(savedMovies);
    });
  };
  // полчучить список сохр юзером фильмов и записать в стейт
  const getSavedMovies = () => {
    // показать прелоудер
    setIsLoading(true);
    // запрос к апи на получение сохран юзером фильмов
    getMovies()
      // потом если всё ок в then если нет в catch
      .then((res) => {
        // если сохр фильмы есть то
        if (res) {
          // записать сохр юзером фильмы стейт
          setSavedMovies(() =>
            res.filter((movie) => movie.owner === currentUser._id)
          );
          // скрыть прелоудер
          setIsLoading(false);
        }
      })
      // потом обработать ошибки если не прошёл getMovies()
      .catch((err) => {
        console.log(err);
        // так или иначе потом убрать прелоудер
        setIsLoading(false);
      });
  };

  // удалить карточку при клике
  const handleLikeClick = (movie) => {
    deleteMovie(movie._id)
      // потом если всё ок в then если нет в catch
      .then((res) => {
        if (res) {
          // если фильм есть то
          setSavedMovies((saveMovies) =>
            // удалить из стейта с фильмами удалённый фильм
            saveMovies.filter((item) => item._id !== res._id)
          );
        }
      })
      // потом обработать ошибки если не прошёл deleteMovie
      .catch((err) => {
        console.log(err);
      });
  };
  // записать в стейт после сабмита формы текст из инпута
  const handleSearchSubmit = () => {
    setSearchRequest(inputValue);
  };

  // хук который срабывает если инпут пустой
  useEffect(() => {
    // если инпут пустой то
    if (inputValue === "") {
      // полчучить список сохр юзером фильмов и записать в стейт
      getSavedMovies();
      // обнулить строку поиска
      setSearchRequest("");
    }
  }, [inputValue]);
  // хук каторый срабатывает если изменился инпут или поисковый запрос юзера
  useEffect(() => {
    // проверить валиден ли запрос юзера?
    checkFormValidity();
  }, [inputValue, searchRequest]);
  // хук который записывает новые фильмы в стейт с сохр юзером фильмами если юзер изменился
  useEffect(() => {
    getSavedMovies();
  }, [currentUser]);
  // хук который меняет готовые к показу фильмы при новом поиске
  useEffect(() => {
    renderMovies();
  }, [filteredMovies]);
  useEffect(() => {
    getFilterMovies();
  }, [savedMovies, props.isChecked, searchRequest]);

  return (
    // контейнер всей страницы
    <>
      {/* компонент хедера */}
      <Header loggedIn={props.loggedIn} />
      {/* компонент  с строкой поиска и чекбосом */}
      <SearchForm
        onSearchRequest={handleSearchSubmit}
        isChecked={props.isChecked}
        inputValue={inputValue}
        setInputValue={setInputValue}
        isValid={props.isSearchRequestValid}
        handleCheckBox={props.handleCheckBox}
      />
      {/* компонент прелоудера */}
      {isLoading && <Preloader isLoading={isLoading} />}
      {/* компонент с галереей карточек */}
      {renderedMovies.length !== 0 && !isLoading ? (
        <MoviesCardList
          movies={renderedMovies}
          onLikeClick={handleLikeClick}
          urlAddOn={""}
          savedMovies={savedMovies}
        />
      ) : (
        <p>Фильмы для отрисовки отсутствуют</p>
      )}
      <Footer />
    </>
  );
}

export default SavedMovies;
