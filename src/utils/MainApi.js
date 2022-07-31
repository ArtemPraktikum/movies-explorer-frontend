// файл для работы с апи пользователя

// ссылка на фронт
import { baseUrl } from "./constants";

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

// полкучить данные юзера
export const getUserInfo = () =>
  fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
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
      authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email }),
  }).then(checkResponse);
