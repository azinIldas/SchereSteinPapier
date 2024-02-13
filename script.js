function getComputerChoice() {
    const choices = ['Schere', 'Stein', 'Papier'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Unentschieden!';
    }
    if ((userChoice === 'Schere' && computerChoice === 'Papier') ||
        (userChoice === 'Papier' && computerChoice === 'Stein') ||
        (userChoice === 'Stein' && computerChoice === 'Schere')) {
        return 'Gewonnen!';
    }
    return 'Verloren!';
}

function userChoice(userSelection) {
    const computerSelection = getComputerChoice();
    const winner = determineWinner(userSelection, computerSelection);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Du hast ${userSelection} gewählt. Computer wählte ${computerSelection}. <strong>${winner}</strong>`;
}
