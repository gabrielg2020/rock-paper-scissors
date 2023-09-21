// Take the user input
let validChoiceSelected = false
const regexPattern = /rock|paper|scissors/i
while (validChoiceSelected === false) {
    let userSelection = prompt("Select: Rock, Paper, Scissors!")
    // Validate user choice
    if (regexPattern.test(userSelection)) {
        validChoiceSelected = true
        userSelection.toLowerCase()
    } else {
        userSelection = undefined
    }
}

// Browser choosing which one
const choices = ['rock', 'paper', 'scissors']
let browserSelection = choices[Math.floor(Math.random() * choices.length)]
console.log(browserSelection)
