const fünf = document.getElementById("fünf")
const zehn = document.getElementById("zehn")
const fünfzehn = document.getElementById("fünfzehn")
const zwanzig = document.getElementById("zwanzig")
let rock = 1
let paper = 2
let scissors = 3
let spieler = document.getElementById("spieler")
let computer = document.getElementById("computer")
let result = document.getElementById("result")

let spielerChoose = document.getElementById("spielerChoose")
let computerChoose = document.getElementById("computerChoose")
let i = 0
let x
let y
let hier = document.getElementById("hier")

function play(user) {
    document.getElementById("rounds").style.display = "block"
    document.getElementById("radio").style.display = "none"

    let compCh = compChoose()
    function compChoose() {
        return comp = Math.floor(Math.random() * 3) + 1
    }
    choose()
    if (user == compCh) {
        result.innerHTML = `It was a draw! You both chose ${x}`
    } else if ((user == rock && compCh == scissors) || (user == paper && compCh == rock) || (user == scissors && compCh == paper)) {
        spieler.innerHTML++
        result.innerHTML = `${x} beats ${y}. You win!`
    } else if ((user == rock && compCh == paper) || (user == scissors && compCh == rock) || (user == paper && compCh == scissors)) {
        computer.innerHTML++
        result.innerHTML = `${y} beats ${x}. You lose!`
    }
    if (fünf.checked) {
        console.log(5)
        verg(5)
    } else if (zehn.checked) {
        verg(10)
    } else if (fünfzehn.checked) {
        verg(15)
    } else if (zwanzig.checked) {
        verg(20)
    }

    compChoose()
    console.log(compChoose())

    function choose() {
        if (user == rock) {
            spielerChoose.innerHTML = "✊"
            x = "Rock"
        } else if (user == scissors) {
            spielerChoose.innerHTML = "✌️"
            x = "Scissors"
        } else if (user == paper) {
            spielerChoose.innerHTML = "🤚"
            x = "Paper"
        }
        if (compCh == rock) {
            computerChoose.innerHTML = "✊"
            y = "Rock"
        } else if (compCh == scissors) {
            computerChoose.innerHTML = "✌️"
            y = "Scissors"
        } else if (compCh == paper) {
            computerChoose.innerHTML = "🤚"
            y = "Paper"
        }
    }
}

function verg(p) {
    i++
    document.getElementById("round").innerHTML = p
    if (i < p) {
        document.getElementById("roundOf").innerHTML = i
    } else if (i == p) {
        console.log("i=" + i)
        document.getElementById("roundOf").innerHTML = i
        document.getElementById("buttons").style.display = "none"
        document.getElementById("move").style.display = "none"
        rechnen()
    }
}

function rechnen() {
    if (spieler.innerHTML > computer.innerHTML) {
        result.innerHTML = "Congratulations! You win! 🥳<br>Play again"
    } else if (spieler.innerHTML < computer.innerHTML) {
        result.innerHTML = "You lose. 🥺 Try again"
    } else if (spieler.innerHTML = computer.innerHTML) {
        result.innerHTML = "It is a draw. 🤝<br>Try to win"
    }
    hier.style.display = "block"
    console.log(spieler.innerHTML)
    console.log(computer.innerHTML)
}