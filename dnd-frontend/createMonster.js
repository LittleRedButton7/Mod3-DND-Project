const baseURL = "https://www.dnd5eapi.co/api"

const monster = {}
const monsterContainer = document.querySelector('.monster-container')
const monsterSummaryDiv = document.querySelector('.monster-summary')

const saveToMonsterButton = document.querySelector('#save-to-monster-button')
const generateMonsterButton = document.querySelector("#generate-button")
const tryAgainButton = document.querySelector('#try-again-button')



function randomNumber(array){
    return Math.floor(Math.random()*array.length)
}

function parseJSON(response){
    return response.json()
}

saveToMonsterButton.addEventListener("click", () => {
    Object.assign({}, randomMonster)
    console.log("monster", randomMonster)
    const monsterSummary = document.createElement('p')
    monsterSummary.textContent = `Your monster is a ${randomMonster.name} with the above listed traits. Good luck!`
    monsterSummaryDiv.append(monsterSummary)
    
    fetch("http://loaclhost:3000/saved_monsters", {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({randomMonster})
    })
        .then(response => response.json())
        .then(result => console.log('result', result))
})

generateMonsterButton.addEventListener("click", () => {
    fetch(baseURL)
    .then(parseJSON)
    .then(urls =>  {
        console.log("urls", urls)
        
        fetch(`https://www.dnd5eapi.co${urls.monsters}`)
            .then(parseJSON)
            .then(monsters => {
                console.log('monsters', monsters)
                randomMonster = monsters.results[randomNumber(monsters.results)]
                console.log(`https://www.dnd5eapi.co${randomMonster.url}`)
                fetch(`https://www.dnd5eapi.co${randomMonster.url}`)
                    .then(parseJSON)
                    .then(monsterURL => {
                        console.log(monsterURL)
                        monsterName.textContent = `Monster Name: ${monsterURL.name}`
                        monsterArmorClass.textContent = `Armor Class: ${monsterURL.armor_class}`
                        monsterHitPoints.textContent = `Hit Points: ${monsterURL.hit_points}`
                        monsterStrength.textContent = `Strength: ${monsterURL.strength}`
                        monsterDexterity.textContent = `Dexterity: ${monsterURL.dexterity}`
                        monsterConstitution.textContent = `Constitution: ${monsterURL.constitution}`
                        monsterIntelligence.textContent = `Intelligence: ${monsterURL.intelligence}`
                        monsterWisdom.textContent = `Wisdom: ${monsterURL.wisdom}`
                        monsterCharisma.textContent = `Charisma: ${monsterURL.charisma}`
                        // monsterSpecialAbilities.textContent = ` Special Abilities: ${monsterURL.special_abilities.name} - ${monsterURL.special_abilities.desc}`
                    })
                
            })

        
            const monsterCard = document.createElement('div')
            const monsterName = document.createElement('h3')
            const monsterArmorClass = document.createElement('h3')
            const monsterHitPoints = document.createElement('h3')
            const monsterStrength = document.createElement('h3')
            const monsterDexterity = document.createElement('h3')
            const monsterConstitution = document.createElement('h3')
            const monsterIntelligence = document.createElement('h3')
            const monsterWisdom = document.createElement('h3')
            const monsterCharisma = document.createElement('h3')
            const monsterSpecialAbilities = document.createElement('h3')
            const deleteButton = document.createElement('button')
            deleteButton.textContent = "Delete and Try Again"
            deleteButton.classList = "delete-button"
                deleteButton.addEventListener("click", () => {
                    monsterCard.remove()
                })
                
            monsterCard.append(monsterName, monsterArmorClass, monsterHitPoints, monsterStrength, monsterDexterity, monsterConstitution, monsterIntelligence, monsterWisdom, monsterCharisma, monsterSpecialAbilities, deleteButton)
            monsterContainer.append(monsterCard)


                
    })
})