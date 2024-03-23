let character = document.getElementById('character')
let translatedValue = 0

document.addEventListener('keydown', (e) => {

    if (e.key === " ") {
        character.style.transform = 'translateY(-300%)'

        setTimeout(() => {
            character.style.transform = 'translateY(0)'
        }, 500)
    } else if (e.key === "ArrowLeft") {
        translatedValue -= 100
        character.style.transform = `translateX(${translatedValue}%)`
    } else if (e.key === "ArrowRight") {
        translatedValue += 100
        character.style.transform = `translateX(${translatedValue}%)`
    }

})

// CA MARCHE PAS ON VA SE FAIRE VIRER
