// Example arrays of names for the x and y axes
const xNames = ['ass', 'bag', 'head', 'shit', 'hat', 'tard', 'lord', 'wit', 'face', 'wad', 'sucker', 'boy', 'stain', 'stick', 'nozzle', 'down', 'waffle', 'goblin'];
const yNames = ['dumb', 'scum', 'douche', 'shit', 'dick', 'fuck', 'dip', 'ass', 'lib', 'cock', 'butt', 'dirt', 'trump', 'twat', 'piss', 'wank', 'bum', 'poop'];

function startGame() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'block';
}

function generateRandomName() {
    const fullNameElement = document.getElementById('randomName');
    fullNameElement.textContent = "Choosing names..."; // Reset text

    // Generate random names with an animation effect
    let counter = 0;
    const interval = setInterval(() => {
        const xIndex = Math.floor(Math.random() * xNames.length);
        const yIndex = Math.floor(Math.random() * yNames.length);
        fullNameElement.textContent = xNames[xIndex] + ' ' + yNames[yIndex];
        counter++;
        if (counter > 5) { // Stop after 5 iterations
            clearInterval(interval);
        }
    }, 500); // Change every 500ms
}