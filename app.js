import {
    getComputerChoice,
    getUserChoice,
    getResult,
    getAllButton,
} from './selectors.js'

const computerChoiceDisplay = getComputerChoice();
const userChoiceDisplay = getUserChoice();
const resultDisplay = getResult();
const possibleChoice = getAllButton();

let resultComputer;
let resultMe;

function generateComputerChoice(){
    const randomNumber = ['Rock', 'Paper', 'Scissors'];
    const randComputerChoice = Math.round(Math.random() * 2);
    resultComputer = computerChoiceDisplay.textContent = randomNumber[randComputerChoice];
    return resultComputer;
}
function winningWhoAmI(){
    const winning = [
        ['Rock', 'Scissors'],
        ['Paper', 'Rock'],
        ['Scissors', 'Paper']
    ];
    winning.forEach(val =>{
        if(resultMe === val[0] && resultComputer === val[1]){
           resultDisplay.textContent = 'USER WIN!!';
        }else if(resultComputer === resultMe){
            resultDisplay.textContent = 'DRAW';
        }else{
            resultDisplay.textContent = 'COMPUTER WIN!!';
        }
    })
}
function rolePlay(){
possibleChoice.forEach(choice => choice.addEventListener('click', (e)=>{
    resultMe = userChoiceDisplay.textContent = e.target.textContent;
    generateComputerChoice();
    winningWhoAmI();
}))
};

(()=>{
    rolePlay();
})()