const cards = document.querySelectorAll('.video-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Random pastel color
        const randomColor = `hsl(${Math.random() * 360}, 70%, 80%)`;
        card.style.backgroundColor = randomColor;
        card.style.borderRadius = '15px';
    });

    card.addEventListener('mouseleave', () => {
        card.style.backgroundColor = '#222';
        card.style.borderRadius = '8px';
    });
});
