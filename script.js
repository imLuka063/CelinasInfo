document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');

    card.addEventListener('mousemove', (e) => {
        const { offsetWidth: width, offsetHeight: height } = card;
        const { offsetX: x, offsetY: y } = e;

        const xRotation = ((y / height) - 0.5) * 40; // Erhöhte Rotationsgeschwindigkeit
        const yRotation = ((x / width) - 0.5) * -40; // Erhöhte Rotationsgeschwindigkeit
        const zTranslation = ((y / height) - 0.5) * 20; // Stärkere Tiefenwirkung

        card.querySelector('.card-content').style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg) translateZ(${zTranslation}px)`;
    });

    card.addEventListener('mouseleave', () => {
        const cardContent = card.querySelector('.card-content');
        cardContent.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        cardContent.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });

    // Title animation
    const title = document.title;
    let titleIndex = 0;

    setInterval(() => {
        const titles = [
            'C:)',
            'Ce:)',
            'Cel:)',
            'Celi:)',
            'Celin:)',
            'Celina:)',
        ];
        document.title = titles[titleIndex];
        titleIndex = (titleIndex + 1) % titles.length;
    }, 1000); // Change every second
});
