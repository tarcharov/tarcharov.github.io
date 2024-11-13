document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Функция для активации секции и выделения активного раздела в меню
    function activateSection(sectionId) {
        // Скрываем все секции
        sections.forEach((section) => {
            section.classList.remove('active-section');
        });

        // Показываем нужную секцию
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active-section');
        }

        // Обновляем активный класс на ссылках меню
        navLinks.forEach((link) => {
            if (link.dataset.target === sectionId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Обработчик клика на ссылки навигации
    navLinks.forEach((link) => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Отмена стандартного перехода по ссылке
            const targetId = this.dataset.target;
            activateSection(targetId);
        });
    });

    // Инициализация: показываем первую секцию при загрузке
    activateSection('section1');
});

