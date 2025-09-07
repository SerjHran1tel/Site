document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.addEventListener('mouseover', () => {
            option.style.transform = 'scale(1.05)';
        });
        option.addEventListener('mouseout', () => {
            option.style.transform = 'scale(1)';
        });
    });

    // Анимация для всех кнопок
    const buttons = document.querySelectorAll('.btn, .nav-btn');
    buttons.forEach(button => {
        button.addEventListener('mousedown', () => {
            button.style.transform = 'translateY(1px) scale(0.98)';
        });
        button.addEventListener('mouseup', () => {
            button.style.transform = 'translateY(-2px) scale(1.02)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0) scale(1)';
        });
    });
});