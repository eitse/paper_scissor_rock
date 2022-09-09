const paperImg = document.querySelector('#paper')
const rockImg = document.querySelector('#rock')
const scissorImg = document.querySelector('#scissor')
const startGame = document.querySelector('#start-game')
const paperTxt = document.querySelector('#paperText')
const decisionBoard = document.querySelector('#decision-containter-content')
const imgContainer = document.querySelector('#img-containter-content')
const humanPick = document.querySelector('#human-pick')
const computerPick = document.querySelector('#computer-pick')
const message = document.querySelector('#message')
const win = document.querySelector('#win')
const rounds = document.querySelector('#rounds')
const draw = document.querySelector('#draw')
const lose = document.querySelector('#lose')
let gameRounds = 0
let winScore = 0
let loseScore = 0
let drawScore = 0


function rpsGame(yourChioce) {

    decisionBoard.style.display = 'flex'
    imgContainer.style.display = 'none'


    // Display Human Img Choice
    humanChoice = yourChioce.id

    humanPick.src = `${humanChoice}.png`

    // Display Computer Img Choice
    const choice = ["paper", "rock", "scissor"]

    const getRandom = () => Math.floor(Math.random() * 3)

    computerChoice = choice[getRandom()]

    computerPick.src = `${computerChoice}.png`


    function decideWinner(humanHand, computerHand) {
        const gameChoice = {
            rock: {
                rock: [0.5, 0.5],
                paper: [0, 1],
                scissor: [1, 0]
            },

            paper: {
                rock: [1, 0],
                paper: [0.5, 0.5],
                scissor: [0, 1]
            },

            scissor: {
                paper: [1, 0],
                scissor: [0.5, 0.5],
                rock: [0, 1]
            }
        }

        const { rock, paper, scissor } = gameChoice
        return (gameChoice[`${humanHand}`][`${computerHand}`])
    }

    const displayResult = JSON.stringify(decideWinner(humanChoice, computerChoice))

    if (displayResult === '[0.5,0.5]') {
        message.textContent = "It is a Tie"
        drawScore += 1
        gameRounds += 1
        draw.innerHTML = drawScore
        rounds.innerHTML = gameRounds

    } else if (displayResult === '[1,0]') {
        message.innerHTML = `1:0 <p style ="color:#50ab68;">You Win</p>`
        winScore += 1
        gameRounds += 1
        win.innerHTML = winScore
        rounds.innerHTML = gameRounds

    } if (displayResult === '[0,1]') {
        message.innerHTML = `0:1 <p style ="color:red;">You Lose</p>`
        gameRounds += 1
        loseScore += 1
        lose.innerHTML = loseScore
        rounds.innerHTML = gameRounds
    }





}


startGame.addEventListener("click", function () {
    decisionBoard.style.display = 'none'
    imgContainer.style.display = 'flex'
})

