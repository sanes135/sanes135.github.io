// script.js

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // Функция для создания одного сердца
    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.fontSize = `${Math.random() * 20 + 10}px`; // Случайный размер от 10 до 30px
        heart.style.left = `${Math.random() * 100}vw`; // Случайная позиция по горизонтали
        heart.style.bottom = '-50px'; // Начинаем снизу за пределами экрана
        heart.style.color = `hsl(${Math.random() * 360}, 100%, 75%)`; // Случайный оттенок розового/красного
        heart.style.pointerEvents = 'none'; // Сердца не мешают кликам
        heart.style.zIndex = '1'; // Под слоем контента
        heart.style.userSelect = 'none';

        // Стили анимации
        const animationDuration = Math.random() * 3 + 2; // Случайная продолжительность от 2 до 5 секунд
        const xMovement = (Math.random() - 0.5) * 100; // Случайное движение влево/вправо

        heart.animate(
            [
                { transform: `translateY(0) translateX(0)`, opacity: 1 },
                { transform: `translateY(-100vh) translateX(${xMovement}px)`, opacity: 0 }
            ],
            {
                duration: animationDuration * 1000,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)' // Плавная кривая Безье
            }
        );

        body.appendChild(heart);

        // Удаляем элемент после окончания анимации, чтобы не засорять DOM
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, animationDuration * 1000);
    }

    // Создаем новое сердце каждые 300-700 миллисекунд
    setInterval(createHeart, Math.random() * 400 + 300);
});