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

    testreset.addEventListener('click', function () {
        location.reload()
    })
}

function testselect() {
    const div = document.createElement('div')
    const label = document.createElement('label')
    const select = document.createElement('select')
    const ciseaux = document.createElement('option')
    const pierre = document.createElement('option')
    const feuille = document.createElement('option')
    const btn = document.createElement('button')

    div.className = 'container'
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

    btn.addEventListener('click', function () {
        let imgwin = document.createElement('img')
        let imglose = document.createElement('img')
        let imgdraw = document.createElement('img')
        const y = select.value
        let z = 0
        console.log(y);

        imgwin.width = '512'
        imgwin.height = '512'
        imgwin.src = 'win.png'
        imglose.width = '512'
        imglose.height = '512'
        imglose.src = 'lose.png'
        imgdraw.width = '512'
        imgdraw.height = '512'
        imgdraw.src = 'draw.png'

        // 0 = Pierre
        // 1 = Ciseaux
        // 2 = Feuille
        switch (y) {
            case 'ciseaux':
                if (x === 0) {
                    z = document.createTextNode(`J'ai fais pierre dommage !`)
                    div.appendChild(z)
                    div.appendChild(imglose)
                } else if (x === 1) {
                    z = document.createTextNode(`Argh, égalité`)
                    div.appendChild(z)
                    div.appendChild(imgdraw)
                } else if (x === 2) {
                    z = document.createTextNode('Purée, tu es trop fort !')
                    div.appendChild(z)
                    div.appendChild(imgwin)
                }
                break;
            case 'pierre':
                if (x === 0) {
                    z = document.createTextNode(`Egalité boy !`)
                    div.appendChild(z)
                    div.appendChild(imgdraw)
                } else if (x === 1) {
                    z = document.createTextNode(`Tu m'as détruis bravo !`)
                    div.appendChild(z)
                    div.appendChild(imgwin)
                } else if (x === 2) {
                    z = document.createTextNode('La feuille bouffe la pierre, perdu dsl')
                    div.appendChild(z)
                    div.appendChild(imglose)
                }
                break;
            case 'feuille':
                if (x === 0) {
                    z = document.createTextNode(`Tu m'as bouffé gg`)
                    div.appendChild(z)
                    div.appendChild(imgwin)
                    location.reload()
                } else if (x === 1) {
                    z = document.createTextNode(`T'as perdu, je suis le cisailleur masqué !`)
                    div.appendChild(z)
                    div.appendChild(imglose)
                    location.reload()
                } else if (x === 2) {
                    z = document.createTextNode(`Sisi le 69, c'est égalité frer`)
                    div.appendChild(z)
                    div.appendChild(imgdraw)
                    location.reload()
                }
                break;
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