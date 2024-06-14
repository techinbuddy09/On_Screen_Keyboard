
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        // Simulate key press
        console.log(key.textContent);
        key.classList.add('active');

        // Remove the active class after a short delay
        setTimeout(() => {
            key.classList.remove('active');
        }, 200);
    });
});