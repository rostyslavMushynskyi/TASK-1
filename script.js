"use strict";

const username = prompt("Введіть свій username");
const password = prompt("Введіть свій пароль");

const adminUsername = "admin";
const adminPassword = "13579admin";

if (username === adminUsername && password === adminPassword) {
  alert("Вітаємо Адмін!");
} else {
  alert("Невірні дані для входу!");
}
