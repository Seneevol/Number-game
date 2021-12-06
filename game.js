const game = document.getElementById('game')
let tryNumb = 0
const i = 0
let number = 0

// Fonction définissant notre nombre random
function randomNumber() {
    number = Math.floor(Math.random() * 101)
    return number
}

// Création de l'input pour jouer
function testbar() {
    div = document.createElement('div')
    input = document.createElement('input')
    btn = document.createElement('button')
    p = document.createElement('p')

    input.id = 'input'
    input.type = 'number'
    input.placeholder = 'Un nombre en 1 et 100'
    btn.innerText = 'Entrée'
    btn.id = 'btn'
    p.innerText = 'Yo on est là pour tester des nombres'

    game.appendChild(p)
    game.appendChild(div)
    div.appendChild(input)
    div.appendChild(btn)
}

// Fonction contenant le jeu
function thegame() {
    const divGame = document.createElement('div')
    const ul = document.createElement('ul')
    const testBtn = document.getElementById('btn')
    let playerNumber = 0

    game.appendChild(divGame)
    divGame.appendChild(ul)

    btn.addEventListener('click', function leclick() {
        playerNumber = document.getElementById('input').value
        const li = document.createElement('li')

        tryNumb = document.getElementsByTagName('li').length
        // Permet de changer le texte du input en numéro 
        playerNumber = parseInt(playerNumber)

        console.log(tryNumb);
        console.log(playerNumber)

        // Les tests de ce qu'entre le joueur
        if (tryNumb === 6) {
            alert(`C'est finit`)
            location.reload()
        } else if (playerNumber === number) {
            alert(`Bravo !`)
            location.reload()
            console.log(Test1);
        } else if (tryNumb === 6 && playerNumber === number) {
            alert('Bravo !')
            location.reload()
            console.log(Test2);
        } else if (playerNumber < number) {
            t = document.createTextNode(`${playerNumber} est plus petit`)
            ul.appendChild(li)
            li.appendChild(t)
        } else if (playerNumber > number) {
            t = document.createTextNode(`${playerNumber} est plus grand`)
            ul.appendChild(li)
            li.appendChild(t)
        } else {
            console.log('Une erreur est survenu !');
        }

    })
}



function components() {
    randomNumber()
    testbar()
    thegame()
}

components()
console.log(randomNumber());