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

// JavaScript to create random floating hearts
function createFloatingHearts() {
    let numberOfHearts = 10; // Number of hearts to create
    for (let i = 0; i < numberOfHearts; i++) {
        let heart = document.createElement('div');
        heart.classList.add('heart-bg');
        heart.innerText = '❤️';
        
        // Randomize position and animation speed
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.animationDuration = (Math.random() * 4 + 6) + 's'; // Random duration between 6 and 10 seconds

        document.body.appendChild(heart);
    }
}

// Call the function to create hearts when the page loads
window.onload = createFloatingHearts;

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

