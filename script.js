function startJourney() {
    let name = document.getElementById('nameInput').value;
    if (name.trim() === "") {
        alert("Please enter your name!");
        return;
    }
    document.getElementById('namePlaceholder').innerText = name;
    nextPage(2);
    playMusic(); // Start background music when the journey begins
    createFloatingHearts(); // Start floating hearts effect
}

// Function to switch between pages
function nextPage(pageNumber) {
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById(`page${pageNumber}`).style.display = 'flex';

    if (pageNumber === 3) {
        setTimeout(() => {
            document.getElementById('nextButton').style.display = 'inline-block'; // Show Next button after 4-5 seconds
        }, 4000); // 4-second delay for showing the Next button
    }
}

// Start background music
function playMusic() {
    let music = document.getElementById('backgroundMusic');
    music.play();
}

// Floating hearts effect
function createFloatingHearts() {
    let heartContainer = document.getElementById('floatingHearts');
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '❤️';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 5 + 8}s`; // Random animation speed between 8s and 13s
        heart.style.fontSize = `${Math.random() * 30 + 25}px`; // Random size for variety
        heartContainer.appendChild(heart);
    }
}
