const random = parseInt(Math.random() * 100 + 1)


const submitBtn = document.querySelector("#submit")
const inputField = document.querySelector("#guessField")
const questionPrev = document.querySelector(".question")
const remainGuess = document.querySelector(".remain")
const lowOrHi = document.querySelector(".lowOrHi")
const resultArea = document.querySelector(".result")


const p = document.createElement("p");
let resArr = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submitBtn.addEventListener("click", function (e) {
        e.preventDefault()
        const guessNum = parseInt(inputField.value)
        validateGame(guessNum)
    })
}
function validateGame(guess) {
    if (isNaN(guess)) {
        alert("Plx enter a valid number")
    }
    else if (guess < 1) {
        alert("Plx enter a valid number")
    }
    else if (guess > 100) {
        alert("Plx enter a valid number")
    }
    else {
        resArr.push(guess)
        if (numGuess === 11) {
            displayguess(guess);
            displayMsg('Game over ')
            endGame()
        }
        else {
            displayguess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === random) {
        displayMsg("You guessed right 🎉")
        endGame();
    }
    else if (guess < random) {
        displayMsg("Number is too low ");
    }
    else if (guess > random) {
        displayMsg("Your number is tooo high")
    }
}

function displayguess(guess) {
    inputField.value = ""
    questionPrev.innerHTML += `${guess} , `
    numGuess++
    remainGuess.innerHTML = `${11 - numGuess}`
}
function displayMsg(msg) {
    lowOrHi.innerHTML = `<h2> ${msg} </h2>`
}
function startGame() {

}
function endGame() {

}