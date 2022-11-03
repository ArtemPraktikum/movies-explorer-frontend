//  файл для работы с апи фильмов

// ссылка на фильмы
import { moviesUrl } from "./constants";

// стандарт проверка на ок не ок
const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
};

// получить массив всех фильмов
export const getAllMovies = () => {
  return fetch(moviesUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};
