// main/static/js/script_index.js
document.addEventListener('DOMContentLoaded', function() {
    // Массив допустимых имён (нижний регистр для сравнения)
    const validNames = ['злата', 'настя', 'полина', 'лена', 'наташа']; // Используем имена из app.py

    // Обработчик события отправки формы
    const form = document.getElementById('greetingForm');
    if (form) { // Проверяем, существует ли форма на странице
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Предотвращаем стандартную отправку формы

            const inputName = document.getElementById('nameInput').value.trim();
            const errorMessage = document.getElementById('errorMessage');

            if (!inputName) {
                alert('Пожалуйста, введите имя.');
                return;
            }

            // Проверяем имя (с учётом регистра, но сравниваем в нижнем)
            const lowerInputName = inputName.toLowerCase();

            if (validNames.includes(lowerInputName)) {
                // Если имя найдено, перенаправляем на соответствующий HTML файл в папке greetings
                // Приводим имя к формату файла (нижний регистр)
                 // Транслитерация (упрощённый вариант) или замена кириллических символов
                // Пример: 'Злата' -> 'zlata.html', 'Настя' -> 'nastya.html'
                // Это требует аккуратной настройки для каждого имени.
                // Упрощённый способ: если имя 'злата', файл 'злата.html'. Тогда просто:
                // window.location.href = `greetings/${lowerInputName}.html`;
                // Но лучше назвать файлы транслитом или латиницей, например, 'zelata.html'.
                // В этом случае нужно установить соответствие:

                const nameToFileMap = {
                    'злата': 'злата', // Или 'zelata', если вы переименуете файл
                    'настя': 'настя', // Или 'nastya'
                    'полина': 'полина', // Или 'polina'
                    'лена': 'лена', // Или 'lena'
                    'наташа': 'наташа' // Или 'natasha'
                };

                const targetFileName = nameToFileMap[lowerInputName];
                if (targetFileName) {
                    // Путь к папке с шаблонами (после развертывания на gh-pages)
                    // Предполагается, что файлы из templates будут в папке greetings
                    window.location.href = `greetings/${targetFileName}.html`;
                } else {
                     // Fallback, если имя есть в списке, но нет в карте (маловероятно при текущей логике)
                     alert('Файл для этого имени не найден.');
                }

            } else {
                // Показываем сообщение об ошибке
                if (errorMessage) {
                    errorMessage.style.display = 'block';
                    // Скрываем сообщение через 3 секунды
                    setTimeout(function() {
                        errorMessage.style.display = 'none';
                    }, 3000);
                } else {
                    alert('Имя не найдено. Попробуйте другое.'); // Альтернатива без div
                }
            }
        });

        // Если вы хотите, чтобы сообщение об ошибке исчезало при новом вводе
        const nameInput = document.getElementById('nameInput');
        if (nameInput) {
            nameInput.addEventListener('input', function() {
                const errorMessage = document.getElementById('errorMessage');
                if (errorMessage) {
                     errorMessage.style.display = 'none';
                }
            });
        }
    } else {
        console.warn("Форма с ID 'greetingForm' не найдена на странице index.html.");
    }
});