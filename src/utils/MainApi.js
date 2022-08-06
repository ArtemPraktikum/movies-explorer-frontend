// файл для работы с апи пользователя

// ссылка на фронт
import { baseUrl, imgMoviesUrl } from "./constants";

// стандарт проверка на ок не ок
const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
};

// регистр
export const register = (name, email, password) =>
  fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then(checkResponse);

// логин
export const login = (email, password) =>
  fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  }).then(checkResponse);

// получить данные юзера
export const getUserInfo = () =>
  fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then(checkResponse);

// получить все сохран. юзером фильмы с апи по токену юзера из локкал сторе
export const getMovies = () =>
  fetch(`${baseUrl}/movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then(checkResponse);
// отредактировать данные о юзере по его токену
export const editProfile = (name, email) =>
  fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ name, email }),
  }).then(checkResponse);

// сохранить фильм в избранное
export const saveMovie = (movie) =>
  fetch(`${baseUrl}/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      country: movie.country || "not Empty",
      director: movie.director || "not Empty",
      duration: movie.duration || "not Empty",
      year: movie.year || "not Empty",
      description: movie.description || "not Empty",
      image: `${imgMoviesUrl}${
        movie.image.url ||
        "https://api.nomoreparties.co/uploads/images_244e1fd56f.jpeg"
      }`,
      trailerLink:
        movie.trailerLink || "https://www.youtube.com/watch?v=YOEKYwBm6sI",
      thumbnail: `${imgMoviesUrl}${
        movie.image.url ||
        "https://api.nomoreparties.co/uploads/images_244e1fd56f.jpeg"
      }`,
      movieId: movie.id || "99",
      nameRU: movie.nameRU || "not Empty",
      nameEN: movie.nameEN || "not Empty",
    }),
  }).then(checkResponse);
// удалить фильм из избранного
export const deleteMovie = (_id) =>
  fetch(`${baseUrl}/movies/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then(checkResponse);
