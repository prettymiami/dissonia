document.addEventListener('DOMContentLoaded', function () {
  const pages = [
    {
      title: "Действие или название страницы 1",
      image: "image1.jpg",  // Путь к изображению
      narrative: "Здесь находится текст повествования для первой страницы.",
      nextPage: 1  // Переход к следующей странице
    },
    {
      title: "Действие или название страницы 2",
      image: "image2.jpg",  // Путь к изображению
      narrative: "Текст повествования для второй страницы.",
      nextPage: 2
    },
    {
      title: "Действие или название страницы 3",
      image: "image3.jpg",  // Путь к изображению
      narrative: "Текст повествования для третьей страницы.",
      nextPage: null  // Конец комикса
    }
  ];

  let currentPage = 0; // Начинаем с первой страницы

  function loadPage(pageIndex) {
    if (pageIndex < 0 || pageIndex >= pages.length) return;

    const page = pages[pageIndex];

    // Заменяем содержимое страницы
    const pageContent = document.getElementById('page-content');
    pageContent.innerHTML = `
      <div class="page-header">
        <span class="action-title">${page.title}</span>
      </div>
      <div class="image-container">
        <img src="${page.image}" alt="Иллюстрация">
      </div>
      <div class="narrative">
        <p>${page.narrative}</p>
      </div>
      <div class="action-button">
        ${page.nextPage !== null ? 
          `<a href="#" onclick="nextPage()">Следующее действие</a>` : 
          `<span>Конец комикса</span>`
        }
      </div>
    `;
  }

  // Функция для перехода на следующую страницу
  window.nextPage = function() {
    if (pages[currentPage].nextPage !== null) {
      currentPage = pages[currentPage].nextPage;
      loadPage(currentPage);
    }
  };

  // Загружаем первую страницу
  loadPage(currentPage);
});
