let random = parseInt(Math.random() * 100 + 1)


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
    remainGuess.innerHTML = `${10 - numGuess}`
}
function displayMsg(msg) {
    lowOrHi.innerHTML = `<h2> ${msg} </h2>`
}

function endGame() {
    inputField.value = "";
    inputField.setAttribute("disabled", "")
    p.classList.add("button")
    p.innerHTML = `<h2 id="newGame">Start new Game </h2>`;
    resultArea.appendChild(p);
    playGame = false;
    startGame()
}

function startGame() {
    const newGamebtn = document.querySelector("#newGame");
    newGamebtn.addEventListener("click", function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        resArr = [];
        numGuess = 1;
        questionPrev.innerHTML = ""
        remainGuess.innerHTML = `${10 - numGuess}`
        inputField.removeAttribute("disabled")
        resultArea.removeChild(p)

        playGame = true;
    })
}