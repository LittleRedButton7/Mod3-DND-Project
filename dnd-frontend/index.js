// console.log('hello')
const baseURL = "https://www.dnd5eapi.co/api"

let sword = document.getElementById("sword-img");

const createRandomCharacterButton = document.querySelector('#create-random-character-button')
const createRandomMonsterButton = document.querySelector('#create-random-monster-button')

const loginForm = document.querySelector('#login')

loginForm.addEventListener("submit", event => {
    event.preventDefault()

    const loginFormData = new FormData(event.target)
    const username = loginFormData.get('username')
    const password = loginFormData.get('password')

    fetch("http://localhost:3000/login", {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        },
    body: JSON.stringify({username, password})
    })
        .then(response => response.json())
        .then(result => console.log('result', result))
})

createRandomCharacterButton.addEventListener("click", () => {
    window.location.assign("createCharacter.html")
})

createRandomMonsterButton.addEventListener("click", () => {
    window.location.assign("createMonster.html")
})

function removeSword() {
    sword.remove();
}

function vanishSword() {
    setTimeout(removeSword, 3500);
}

window.addEventListener('load', (event) => {
    vanishSword()
});

// fetch("db.json",  {
//     method: 'POST', 
//     headers: {
//         "Content-type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(saveCharacterData)
// })



// tryAgainButton.addEventListener("click", () => {
//     newRandomClass = classes.results[randomNumber(classes.results)]
// })


// fetch(`https://www.dnd5eapi.co${urls.races}`)
//     .then(parseJSON)
//     .then(races => {
//         character.race = races.results[randomNumber(races.results)].race
//         characterRace.textContent = `Race: ${character.race}`
//     })