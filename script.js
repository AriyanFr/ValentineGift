let poemLines = [
    "Like the moon lights up the dark,",
    "You fill my life with a spark.",
    "Every moment feels so right,",
    "With you, my world is bright. ✨",
    "You are my warmth on cold nights,",
    "The reason my heart takes flight.",
    "In your eyes, I see my home,",
    "With you, I’m never alone. 💫",
    "Every second spent by your side,",
    "Makes me feel like a perfect ride.",
    "So here's my heart, forever yours,",
    "For you, my love, my heart soars! 💖"
];

function startJourney() {
    let name = document.getElementById('nameInput').value;
    if (name.trim() === "") {
        alert("Please enter your name!");
        return;
    }
    document.getElementById('namePlaceholder').innerText = name;
    nextPage(2); // Proceed to page 2
    playMusic(); // Start background music
    createFloatingHearts(); // Start floating hearts effect
}

function nextPage(pageNumber) {
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById(`page${pageNumber}`).style.display = 'flex';
    if (pageNumber === 3) {
        displayPoem(); // Display the poem on page 3
    }
}

function playMusic() {
    let music = document.getElementById('backgroundMusic');
    music.play();
}

function createFloatingHearts() {
    let heartContainer = document.getElementById('floatingHearts');
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '❤️';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 5 + 8}s`; // Random duration
        heart.style.fontSize = `${Math.random() * 30 + 25}px`;
        heartContainer.appendChild(heart);
    }
}

function displayPoem() {
    let poemElement = document.getElementById('poem');
    let currentLine = 0;

    function showNextLine() {
        if (currentLine < poemLines.length) {
            let newLine = document.createElement('p');
            newLine.innerHTML = poemLines[currentLine];
            poemElement.appendChild(newLine);
            currentLine++;
            setTimeout(showNextLine, 3000); // Show next line every 3 seconds
        } else {
            document.getElementById('nextButton').style.display = 'inline-block'; // Show next button after all lines are displayed
        }
    }

    showNextLine();
}

