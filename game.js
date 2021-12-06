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
    reset = document.createElement('button')
    p = document.createElement('p')

    div.className = 'row'
    div.id = 'gamenumber'
    input.id = 'input'
    input.type = 'number'
    input.placeholder = 'Un nombre en 1 et 100'
    btn.innerText = 'Entrée'
    btn.id = 'btn'
    reset.innerText = 'Reset'
    reset.id = 'reset'
    p.innerText = 'Yo on est là pour tester des nombres'
    p.id = 'text'

    game.appendChild(p)
    game.appendChild(div)
    div.appendChild(input)
    div.appendChild(btn)
    div.appendChild(reset)
}

// Fonction contenant le jeu
function thegame() {
    const divGame = document.getElementById('gamenumber')
    const ul = document.createElement('ul')
    const testBtn = document.getElementById('btn')
    const p = document.getElementById('text')
    const testreset = document.getElementById('reset')
    let playerNumber = 0

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
        } else if (tryNumb === 6 && playerNumber === number) {
            alert('Bravo !')
            location.reload()
        } else if (playerNumber < number) {
            t = document.createTextNode(`${playerNumber} est plus petit`)
            text.innerText = `T'es à ${tryNumb+1}/6 essaies`
            ul.appendChild(li)
            li.appendChild(t)
        } else if (playerNumber > number) {
            t = document.createTextNode(`${playerNumber} est plus grand`)
            text.innerText = `T'es à ${tryNumb+1}/6 essaies`
            ul.appendChild(li)
            li.appendChild(t)
        } else {
            console.log('Une erreur est survenu !');
        }
    })

    testreset.addEventListener('click', function(){
        location.reload()
    })
}

function testselect () {
    const div = document.createElement('div')
    const label = document.createElement('label')
    const select = document.createElement('select')
    const ciseaux = document.createElement('option')
    const pierre = document.createElement('option')
    const feuille = document.createElement('option')
    const btn = document.createElement('button')

    div.className = 'row'
    label.setAttribute('for', 'shifumi')
    select.name = 'janken'
    select.id = 'shifumi'
    select.className = 'mx-auto'
    ciseaux.value = 'ciseaux'
    ciseaux.innerText = 'Ciseaux'
    pierre.value = 'pierre'
    pierre.innerText = 'Pierre'
    feuille.value = 'feuille'
    feuille.innerText = 'Feuille'
    btn.innerText = 'Envoyer'

    game.appendChild(div)
    div.appendChild(label)
    div.appendChild(select)
    select.appendChild(ciseaux)
    select.appendChild(pierre)
    select.appendChild(feuille)
    div.appendChild(btn)

    let x = Math.floor(Math.random() * 3)
    let y = document.getElementById('shifumi').value
    let z = ''

    console.log(y);

    btn.addEventListener('click', function() {
        if (x === 0) {
            z = 'pierre'
            if (y === 'ciseaux') {
                alert(`J'ai fais pierre dommage !`)
                location.reload()
            } else if (y === 'feuille') {
                alert('Purée, trop fort !')
                location.reload()
            } else if (y === 'pierre') {
                alert (`Argh, égalité`)
                location.reload()
            } 
        }
        if (x === 1) {
            z = 'feuille'
            if (y === 'ciseaux') {
                alert(`Argh, tu m'as cisaillé`)
                location.reload()
            } else if (y === 'pierre') {
                alert (`Haha, sale noob`)
                location.reload()
            } else if (y === 'feuille') {
                alert('Tsk, égalité')
                location.reload()
            }
        }
        if (x === 2) {
            z = 'ciseaux'
             if (y === 'pierre') {
                alert (`Nyooooooon t'as triché !`)
                location.reload()
            } else if (y === 'feuille') {
                alert(`T'as perdu, je suis le cisailleur masqué !`)
                location.reload()
            } else if (y === 'ciseaux') {
                alert(`Sisi le 69, c'est égalité frer`)
                location.reload()
            }
        }
    })
}


function components() {
    randomNumber()
    testbar()
    testselect()
    thegame()
}

components()
console.log(randomNumber());