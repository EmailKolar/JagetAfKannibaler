"use strict"
window.addEventListener("load",start);
function start(){
    console.log('kører');
    registerButtonClicks()
    currentScene = E001;
    showScene(E001)

}

let currentScene;

const E004 = {
    title: "graver",
    text:/*html*/ `<p>Du går ud af bilen for at prøve at grave hjulet ud. RAWR! Hører du pludseligt. En leopard hopper ned imod dig fra et træ.</p>`,
    choices: [
        "Træk din revolver og skyd.",
        "Hop væk og flygt."
    ]
}
const E003 = {
    title: "Går",
    text:/*html*/ `<p>Efter at have vandret i timevis, er du nu midt inde i junglens dyb. </p>
    <p>Ved din venstre side løber en flod. Ved din højre side er tyk jungle</p>
    `,
    choices: [
        "Følg floden",
        "Gå gennem junglen"
    ]
}

const E002 = {
    title: "Kører",
    text:/*html*/ `<p>Du kører ind mod junglen på den bulede sti. </p>
    <p> Efter at have kørt i et par minutter sidder din bil fast i noget mudder, og du kan ikke komme videre. </p>`,
    choices: [
        
        {
            name: "Fortsæt til fods.",
            node: E003
        },
        {
            name: "Grav bilen fri.",
            node: E004
        }
        
    ]
}


const E001 = {
    title: "Historien begynder",
    text:/*html*/ `<p>Du ankommer til kanten af regnskoven, langt væk fra moderne civilisation midt i nuginea. </p>
    <p>Du har fået et tip om at der i denne jungle måske findes en sjælden og for længst troet uddødet stamme af menneskespisende indianere.</p>
    <p>Det er din mission at finde og dokumentere denne stamme.</p>
    <p>Du har med dig: en revolver med 6 kugler ammunition, et Polaroidkamera, en bandage  & et kompas.</p>
    <p>Foran dig står en Land Rover som du har fået helikopterfragtet herud. </p>
    <p>Du kan se at stien er smallere end forventet og at det måske bliver svært at køre bilen igennem.</p>`,
    choices: [
        {
            name: "Sæt dig ind i bilen og prøv at komme gennem buskadset.",
            node:E002
        },
        {
            name: "Lad bilen stå og tag rejsen til fods.",
            node:E003
        }
    ]
}

function connectNodes(){
    //bare sæt nodesne til null når E00x bliver skrevet
    //E001.choices[0].node = E002;
    //E001.choices[0].node = E003;
    //und so weiter
}

function registerButtonClicks(){
    document.querySelector("main").addEventListener("click",userClicked);

    
}
function userClicked(event){
    const target = event.target;
    if(target.tagName === "BUTTON"){
        buttonClicked(target)
    }
}
function buttonClicked(button){
console.log(button);

//kanpper skal fjernes
button.parentElement.remove();

//finde scenen for den knap der blev trykket på og den scene skal vises
//1 find index for knappe
const index = button.id.substring(10)

console.log("index"+index);
const choice = currentScene.choices[index];
currentScene = choice.node

//næste scene vises
showScene(currentScene)
}


function showScene(scene){
    const html =/*html*/ `<div class="scene">
    <h2>${scene.title}</h2>
    <div class="text">
        ${scene.text}
    </div>
    <div class="choices">
    ${scene.choices.map((choice, i) => `<button id="btn-choice${i}">${choice.name}</button>`).join(" ")}
    </div>
    </div>`;
    document.querySelector("main").insertAdjacentHTML("beforeend",html);
}