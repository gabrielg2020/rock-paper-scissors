const cpuResult = document.querySelector('.cpu-result');
const userResult = document.querySelector('.user-result');

const winsCounter = document.querySelector('.wins');
const lossesCounter = document.querySelector('.losses');
const drawsCounter = document.querySelector('.draws');
const status = document.querySelector('.status');

// Add event listeners to the buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playGame(button.textContent);
    });
});

function playGame(type) {
    userResult.textContent = type;
    cpuResult.textContent = cpuSelect();
    evaluateGame(type, cpuResult.textContent)
};

function cpuSelect() {
    const choices = ['🪨','📜','✂️'];
    return choices[Math.floor(Math.random() * choices.length)];
};

function evaluateGame(user, cpu) {
    if (user === cpu) {
        drawsCounter.textContent = Number(drawsCounter.textContent) + 1
        status.textContent = 'Draw!'
    } else if (user === '🪨' && cpu === '✂️' || user === '📜' && cpu === '🪨' || user === '✂️' && cpu === '📜') {
        winsCounter.textContent = Number(winsCounter.textContent) + 1
        status.textContent = 'You won!'
    } else {
        lossesCounter.textContent = Number(lossesCounter.textContent) + 1
        status.textContent = 'You lost!'
    }
};