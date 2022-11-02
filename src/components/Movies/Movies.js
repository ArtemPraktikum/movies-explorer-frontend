import "./Movies.css";

import { useEffect, useState, useContext } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import { CurrentUserContext } from "../../context/CurrentUserContext";

import { getMovies, saveMovie, deleteMovie } from "../../utils/MainApi";
import { getAllMovies } from "../../utils/MoviesApi";

function Movies(props) {
  // стейты:
  // данные юзера
  const currentUser = useContext(CurrentUserContext);
  // сохранённые фильмы
  const [savedMovies, setSavedMovies] = useState([]);
  // состояние загрузки
  const [isLoading, setIsLoading] = useState(false);
  // текст строки поиска
  const [searchRequest, setSearchRequest] = useState("");
  // все фильмы
  const [allMovies, setAllMovies] = useState([]);
  // текст ошибки
  const [error, setError] = useState("");
  // отобранные фильмы
  const [filteredMovies, setFilteredMovies] = useState([]);
  //  готовые к показу фильмы
  const [renderedMovies, setRenderedMovies] = useState([]);
  //  валью из инпута
  const [inputValue, setInputValue] = useState("");
  //  ширина окна
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // колл. фильмов для показа, зависит от ширины окна
  const [numberFilmsToShow, setNumberFilmsToShow] = useState(() => {
    if (windowWidth >= 1280) {
      return 12;
    }
    if (windowWidth < 1280 && windowWidth >= 990) {
      return 9;
    }
    if (windowWidth < 990 && windowWidth >= 580) {
      return 6;
    }
    if (windowWidth < 580) {
      return 5;
    }
  });

  // функ. при измен. чекбокса менять его сост. и обнулять фильмы для показа
  const handleCheckBox = () => {
    setIsChecked(!isChecked);
    setRenderedMovies([]);
  };
  // функ если есть залог. юзер получить и локала его инфо и записать все фильмы в локал под его id
  const getLocalUserInfo = () => {
    if (localStorage.getItem(currentUser._id) !== null) {
      setSearchRequest(
        JSON.parse(localStorage.getItem(currentUser._id)).request
      );
      setAllMovies(JSON.parse(localStorage.getItem(currentUser._id)).movies);
    }
  };
  // функ. отфильтровать фильмы по коротким и нет
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
  // функция проверки валидности запроса юзера
  const checkFormValidity = () => {
    const isSearchRequestValid =
      inputValue.length > 0 && searchRequest !== inputValue;
    isSearchRequestValid
      ? props.setIsSearchRequestValid(true)
      : props.setIsSearchRequestValid(false);
  };
  // функ. обработать лайк, дислайк и удаление карточки
  const handleLikeClick = (movie) => {
    const isLiked = savedMovies.some((item) => item.movieId === movie.id);
    const movieToDelete = savedMovies.find((item) => item.movieId === movie.id);
    setError("");
    if (!isLiked) {
      saveMovie(movie)
        .then((res) => {
          if (res) {
            getSavedMovies();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      deleteMovie(movieToDelete._id)
        .then((res) => {
          if (res) {
            getSavedMovies();
          }
        })
        .catch((err) => {
          console.log(err);
          setError(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."
          );
        });
    }
  };
  // функция получить отобранные фильмы из всех фильмов
  const getFilterMovies = () => {
    setFilteredMovies(() => {
      return filterMovies(allMovies);
    });
  };
  //  функ. отобрать нужное колл. фильмов для рендера
  const renderMovies = () => {
    howManyMoviesShow();
    const moviesToRender = filteredMovies.splice(0, numberFilmsToShow);
    setRenderedMovies([...renderedMovies, ...moviesToRender]);
  };

  // функ. при измен. ширины. экрана менять стейт с шириной
  const updateWindowWidth = () => {
    setTimeout(() => setWindowWidth(window.innerWidth), 1000);
  };
  // полчучить список сохр юзером фильмов и записать в стейт
  const getSavedMovies = () => {
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
        }
      })
      // потом обработать ошибки если не прошёл getMovies()
      .catch((err) => {
        console.log(err);
      });
  };
  // функция для определения колл. фильмов для показа, зависит от ширины окна
  const howManyMoviesShow = () => {
    if (windowWidth >= 1280) {
      renderedMovies.length === 0
        ? setNumberFilmsToShow(12)
        : setNumberFilmsToShow(3);
    }
    if (windowWidth < 1280 && windowWidth >= 768) {
      renderedMovies.length === 0
        ? setNumberFilmsToShow(8)
        : setNumberFilmsToShow(2);
    }
    if (windowWidth < 768) {
      renderedMovies.length === 0
        ? setNumberFilmsToShow(5)
        : setNumberFilmsToShow(2);
    }
  };
  // функ. обработать сабмит формы поиска
  const handleSearchSubmit = () => {
    setError("");
    setRenderedMovies([]);
    props.setIsSearchRequestValid(false);
    setIsLoading(true);
    getAllMovies()
      .then((res) => {
        if (res) {
          localStorage.setItem(
            currentUser._id,
            JSON.stringify({
              request: inputValue,
              movies: res,
            })
          );
          setSearchRequest(inputValue);
          setIsLoading(false);
          setAllMovies(res);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        setError(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."
        );
      });
  };

  // хук сработает 1 раз вешает лисенер на ресайз для определения ширины экрана
  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    // потом убрать
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);
  // хук записывает запрос юзера в стейт при каждом поиске юзером
  useEffect(() => {
    setInputValue(searchRequest);
  }, [searchRequest]);
  // хук меняющий нужное колл. фильмов для показа когда меняется ширина окна или фильмы
  useEffect(() => {
    howManyMoviesShow();
  }, [windowWidth, renderedMovies]);
  // хук готовящий фильмы для показа в нужном колл. при получ. новых фильмов
  useEffect(() => {
    renderMovies();
  }, [filteredMovies]);
  // хук записывающий отобранные фильмы в стейт когда был актив. чекбокс, был поиск или поменялись все фильмы
  useEffect(() => {
    getFilterMovies();
  }, [props.isChecked, searchRequest, allMovies]);
  // хук проверяющий запрос юзера на валидность при посике юзера и измен. инпута
  useEffect(() => {
    checkFormValidity();
  }, [searchRequest, inputValue]);
  // хук обновляющий данные о юзере и его сохр. фильмах при изменении самого юзера
  useEffect(() => {
    getLocalUserInfo();
    getSavedMovies();
  }, [currentUser]);

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
        onCheckBoxClick={handleCheckBox}
      />
      {/* текст ошибки */}
      <p>{error}</p>
      {/* компонент прелоудера */}
      {isLoading && <Preloader isLoading={isLoading} />}
      {/* компонент с галереей карточек */}
      {localStorage.getItem(currentUser._id) !== null && !isLoading && (
        <MoviesCardList
          movies={renderedMovies}
          onLikeClick={handleLikeClick}
          urlAddOn={"https://api.nomoreparties.co"}
          savedMovies={savedMovies}
        />
      )}
      {/* кнопка больше фильмов */}
      {filteredMovies.length !== 0 && !isLoading && (
        <section>
          <button className="movies__btn" onClick={renderMovies}>
            Ещё
          </button>
        </section>
      )}
      {/* компонент футера */}
      <Footer />
    </>
  );
}

export default Movies;
