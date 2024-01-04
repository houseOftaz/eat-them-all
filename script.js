let isJumping = false; // Déclaration globale

document.addEventListener('keydown', function(event) {
    const character = document.getElementById('character');
    let left = character.offsetLeft;
    const jumpHeight = 20; // Hauteur de saut ajustable

    if (event.key === 'ArrowLeft') {
        left -= 10;
    } else if (event.key === 'ArrowRight') {
        left += 10;
    }

    character.style.left = left + 'px';

    if (event.key === 'Space') {
        event.preventDefault(); // Empêche le défilement de la page
        if (!isJumping) {
            isJumping = true;
            let bottom = parseInt(character.style.bottom) || 0;

            let upInterval = setInterval(() => {
                if (bottom < jumpHeight) {
                    bottom += 5;
                    character.style.bottom = bottom + 'px';
                } else {
                    clearInterval(upInterval);
                    let downInterval = setInterval(() => {
                        if (bottom > 0) {
                            bottom -= 5;
                            character.style.bottom = bottom + 'px';
                        } else {
                            clearInterval(downInterval);
                            isJumping = false;
                        }
                    }, 20);
                }
            }, 20);
        }
    }
});
