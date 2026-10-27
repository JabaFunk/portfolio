// Находим кнопку по её id
const themeButton = document.querySelector("#theme-toggle");

if (themeButton) {
  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
  });
}

// Данные проектов: замени названия, описания и ссылки на свои
const projects = [
  {
    title: "Личный сайт",
    description: "Адаптивное портфолио, созданное с помощью HTML и CSS.",
    link: "https://github.com/JabaFunk/personal-site",
  },
  {
    title: "Список задач",
    description: "Небольшое приложение для добавления и отметки задач.",
    link: "https://github.com/JabaFunk/task-list",
  },
  {
    title: "Карточки товаров",
    description: "Страница каталога с карточками товаров и адаптивной сеткой.",
    link: "https://github.com/JabaFunk/product-cards",
  },
];

// Находим пустой контейнер из index.html
const projectsContainer = document.querySelector("#projects-container");

// Создаём и показываем карточки проектов
function renderProjects() {
  // Если контейнера нет на странице, дальше ничего делать не нужно
  if (!projectsContainer) return;

  // Для каждого объекта в массиве создаём отдельную карточку
  projects.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const number = document.createElement("span");
    number.className = "project-number";
    number.textContent = String(index + 1).padStart(2, "0");

    const content = document.createElement("div");
    content.className = "project-content";

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const link = document.createElement("a");
    link.className = "button button-secondary project-link";
    link.href = project.link;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Код на GitHub ↗";

    // Собираем содержимое карточки
    content.append(title, description, link);
    card.append(number, content);

    // Добавляем готовую карточку в контейнер на странице
    projectsContainer.appendChild(card);
  });
}

// Запускаем создание карточек
renderProjects();