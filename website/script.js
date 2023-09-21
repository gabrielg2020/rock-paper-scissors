// Take the user input
let validChoiceSelected = false;
const regexPattern = /rock|paper|scissors/i;

while (validChoiceSelected === false) {
    let selection = prompt("Select: Rock, Paper, Scissors!")

    // Validate user choice
    if (regexPattern.test(selection)) {
        validChoiceSelected = true
        selection.toLowerCase()
    } else {
        selection = undefined
    }
}
