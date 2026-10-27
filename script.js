// Находим кнопку по её id
const themeButton = document.querySelector("#theme-toggle");

// Ждём, пока пользователь нажмёт на кнопку
themeButton.addEventListener("click", () => {
  // Добавляем класс light-theme, если его нет, или убираем, если он уже есть
  document.body.classList.toggle("light-theme");
});