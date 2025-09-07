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
});