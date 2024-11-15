// Добавляем динамические ссылки на страницы
const pageList = document.getElementById('page-list');

const pages = [
    { title: 'Scene 1: You return to your hometown', url: 'page1.html' },
    { title: 'Scene 2: Entering the mysterious cafe', url: 'page2.html' },
    { title: 'Scene 3: The beginning of a mystery', url: 'page3.html' },
    // Можно добавлять дополнительные страницы по мере необходимости
];

// Генерируем список страниц на главной
pages.forEach(page => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = page.url;
    a.textContent = page.title;
    li.appendChild(a);
    pageList.appendChild(li);
});
