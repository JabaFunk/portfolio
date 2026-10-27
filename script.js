// Переключение темы — оставь этот блок, если кнопка темы есть в index.html
const themeButton = document.querySelector("#theme-toggle");

if (themeButton) {
  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
  });
}

// Находим контейнер для карточек проектов в index.html
const projectsContainer = document.querySelector("#projects-container");

async function loadProjects() {
  if (!projectsContainer) return;

  projectsContainer.textContent = "Загружаю проекты…";

  try {
    const username = "JabaFunk";

    const response = await fetch(
      `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=6`
    );

    if (!response.ok) {
      throw new Error(`Ошибка GitHub API: ${response.status}`);
    }

    const repositories = await response.json();
    projectsContainer.replaceChildren();

    if (repositories.length === 0) {
      projectsContainer.textContent = "Публичных репозиториев пока нет.";
      return;
    }

    repositories.slice(0, 6).forEach((repository, index) => {
      const card = document.createElement("article");
      card.className = "project-card";

      const number = document.createElement("span");
      number.className = "project-number";
      number.textContent = String(index + 1).padStart(2, "0");

      const content = document.createElement("div");
      content.className = "project-content";

      const title = document.createElement("h3");
      title.textContent = repository.name;

      const description = document.createElement("p");
      description.textContent =
        repository.description || "У этого репозитория нет описания.";

      const link = document.createElement("a");
      link.className = "button button-secondary project-link";
      link.href = repository.html_url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "Открыть на GitHub ↗";

      content.append(title, description, link);
      card.append(number, content);
      projectsContainer.appendChild(card);
    });
  } catch (error) {
    const errorMessage = document.createElement("p");
    errorMessage.className = "projects-error";
    errorMessage.setAttribute("role", "alert");
    errorMessage.textContent = "Не удалось загрузить проекты";

    projectsContainer.replaceChildren(errorMessage);
    console.error("Не удалось загрузить репозитории GitHub:", error);
  }
}

loadProjects();