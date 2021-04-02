const baseURL = "https://www.dnd5eapi.co/api"

const character = {}
const classes = []
const characterContainer = document.querySelector('.character-container')
const characterSummaryDiv = document.querySelector('.character-summary')

const saveToCharacterButton = document.querySelector('#save-to-character-button')
const generateClassButton = document.querySelector("#generate-button")
const generateRaceButton = document.querySelector("#generate-race-button")
const generateEquipmentButton = document.querySelector("#generate-equipment-button")
const generateSpellsButton = document.querySelector("#generate-spells-button")
const tryAgainButton = document.querySelector('#try-again-button')
// const getMoreInfoButton = document.querySelector('#more-info-button')


function randomNumber(array){
    return Math.floor(Math.random()*array.length)
}

function parseJSON(response){
    return response.json()
}

saveToCharacterButton.addEventListener("click", () => {
    Object.assign({}, character)
    console.log("character", character)
    const characterSummary = document.createElement('p')
    characterSummary.textContent = `Your character is a ${character.race} ${character.class}. Their special spell is ${character.spell} and they get a ${character.equipment} as their initial piece of equipment.`
    characterSummaryDiv.append(characterSummary)
    // fetch()
})

generateClassButton.addEventListener("click", () => {
    fetch(baseURL)
    .then(parseJSON)
    .then(urls =>  {
        console.log("urls", urls)
        
        fetch(`https://www.dnd5eapi.co${urls.classes}`)
            .then(parseJSON)
            .then(classes => {
                character.class = classes.results[randomNumber(classes.results)].name
                characterClass.textContent = `Class: ${character.class}`
            })

        
            const characterCard = document.createElement('div')
            const characterClass = document.createElement('h2')
            const deleteButton = document.createElement('button')
            deleteButton.textContent = "Delete and Try Again"
            deleteButton.classList = "delete-button"
                deleteButton.addEventListener("click", () => {
                    characterCard.remove()
                })
                
                characterCard.append(characterClass, deleteButton)
                characterContainer.append(characterCard)
                
                console.log(character)
    })
})

generateRaceButton.addEventListener("click", () => {
    fetch(baseURL)
    .then(parseJSON)
    .then(urls =>  {
        console.log("urls", urls)
        
        fetch(`https://www.dnd5eapi.co${urls.races}`)
            .then(parseJSON)
            .then(races => {
                console.log("races", races)
                
                character.race = races.results[randomNumber(races.results)].name
                characterRace.textContent = `Race: ${character.race}`
            })

        
            const characterCard = document.createElement('div')
            const characterRace = document.createElement('h2')
            const deleteButton = document.createElement('button')
            deleteButton.textContent = "Delete and Try Again"
            deleteButton.classList = "delete-button"
                deleteButton.addEventListener("click", () => {
                    characterCard.remove()
                })
                
                characterCard.append(characterRace, deleteButton)
                characterContainer.append(characterCard)
                
                console.log(character)
    })
})

generateEquipmentButton.addEventListener("click", () => {
    fetch(baseURL)
    .then(parseJSON)
    .then(urls =>  {
        console.log("urls", urls)
        
        fetch(`https://www.dnd5eapi.co${urls.equipment}`)
            .then(parseJSON)
            .then(equipment => {
                console.log("equipment", equipment)
                
                character.equipment = equipment.results[randomNumber(equipment.results)].name
                characterRace.textContent = `Equipment: ${character.equipment}`
            })

        
            const characterCard = document.createElement('div')
            const characterRace = document.createElement('h2')
            const deleteButton = document.createElement('button')
            deleteButton.textContent = "Delete and Try Again"
            deleteButton.classList = "delete-button"
                deleteButton.addEventListener("click", () => {
                    characterCard.remove()
                })
                
                characterCard.append(characterRace, deleteButton)
                characterContainer.append(characterCard)
                
                console.log(character)
    })
})


generateSpellsButton.addEventListener("click", () => {
    fetch(baseURL)
    .then(parseJSON)
    .then(urls =>  {
        console.log("urls", urls)
        
        fetch(`https://www.dnd5eapi.co${urls.spells}`)
            .then(parseJSON)
            .then(spells => {
                console.log("spells", spells)
                
                character.spell = spells.results[randomNumber(spells.results)].name
                characterSpell.textContent = `Spell: ${character.spell}`
            })

        
            const characterCard = document.createElement('div')
            const characterSpell = document.createElement('h2')
            const deleteButton = document.createElement('button')
            deleteButton.textContent = "Delete and Try Again"
            deleteButton.classList = "delete-button"
                deleteButton.addEventListener("click", () => {
                    characterCard.remove()
                })
                
                characterCard.append(characterSpell, deleteButton)
                characterContainer.append(characterCard)
                
                console.log(character)
    })
})


