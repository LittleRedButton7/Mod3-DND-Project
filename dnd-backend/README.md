# The Dungeon!
Welcome to The Dungeon!


## Table of Contents
* [General Info](#General-Info)
<!-- * [Intro Video](#Intro-Video) -->
* [Technologies](#Technologies)
* [Setup](#Setup)
* [Code Examples](#Code-Examples)
* [Features](#Features)
* [Status](#Status)
* [Contact](#Contact)

## General Info
I used an external Dungeons & Dragons API to pull in data on different characters and monsters. My thought was to make a website where you can create a random character and/or a random monster and then save that to your profile. One advantage of accessing the D&D API is that a Dungeon Master could very quickly pull characteristics for an NPC character or a monster during a battle.

<!-- ## Intro Video
[Fly Away! on YouTube](https://youtu.be/P52TS0hV62s) -->

## Technologies
* Ruby on Rails - 6.0.3, 6.0.3.5
* SQLite3 - version 1.4
* JavaScript/JSON
* HTML
* CSS


## Setup
* Fork and clone this repo into your local branch.
* From the backend, run bundle:install.
* Add an additional terminal and cd into the frontend in one and cd into the backend in the other.
* From the backend terminal, run rails s and from the frontend run lite-server which will kick off the app in the localhost:3001.
*From there, have fun creating a random monster or a random character. If you hit the Save Character or Save Monster buttons, they will save that data to the object and print a statement at the bottom of the page.

## Code Examples
JavaScript
```
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
                    })
                
            })
```

HTML
```
<body>
    <div class="title">
        <h1>Create A Random Monster!</h1>
        <p></p>
        <button id="save-to-monster-button">Save To Monster</button>
    </div>
    <div class="button-container">
        <div>
            <button id="generate-button">Generate Monster</button>
        </div>
    </div>
    <div class="monster-div">
        <section class="monster-container"></section>
    </div>
    <p></p>
    <div class="monster-summary"></div>
</body>

```

CSS
```
h1{
    margin: 0;
    padding: 0;
    position: absolute;
    top: 70%;
    transform: translateY(-50%);
    width: 100%;
    text-align: center;
    color:#fd3d0d;
    font-size: 4em;
    font-family: papyrus;
    font-weight: 1500;
    text-shadow: 0 0 8px #fdef9d, 0 0 10px hsl(0, 100%, 50%);
}

h1 span {
    display: inline-block;
    animation: animate 2s linear forwards;
}

@keyframes animate
{
    0%
    {
        opacity: 0;
        transform: rotateY(90deg);
        filter: blur(10px);
    }
    100%
    {
        opactity: 1;
        transform: rotateY(0deg);
        filter: blur(0);
    }
}
```

## Features
* Create a Character allows you to pull certain traits at random to quickly generate a D&D character.
    -Delete and Try Again will allow you to pull another random trait if, for some reason, you don't like the first that was chosen at random.
    -When you have a character that you'd like, Save to Character will save those attributes for you. 
* Create a Monster allows you to pull a random monster from a list of D&D monsters.  
    -Delete and Try Again (same as for the Character) will allow you to pull another random monster if, for some reason, you don't like the first that was chosen at random.
    -Save to Monster, as the Save to Character, will save that randomly generated monster to your user profile for future reference.

## Status
This is a functional app, but with the limitations of getting our project compelted in a week, there is still quite a bit that can be built out. I have the auth set up on the Rails backend but didn't quite have time to link that to the front end. Also, a feature that I had wanted to add was the ability to save those characters and mosters to the user's profile. That would be an additional ability that would accompany the finilization of the auth. Lastly, it would be fun to build this out even more and add pictures of those monsters. The API didn't have those included, so I would have to figure out a way to hard code some images and pull those in on the front end depending on which monster was chosed at random based on name. 

## Contact
Feel free to reach out and connect with me!
[Marissa Nolan](https://www.linkedin.com/in/marissanolan1/) 

### Thanks for visiting!
