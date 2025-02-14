// Start Journey Function
function startJourney() {
    let name = document.getElementById('nameInput').value;
    if (name.trim() === "") {
        alert("Please enter your name!");
        return;
    }
    document.getElementById('namePlaceholder').innerText = name;
    nextPage(2);
}

// Function to switch between pages
function nextPage(pageNumber) {
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById(`page${pageNumber}`).style.display = 'flex';

    if (pageNumber === 2) {
        startGame();
    }
}

// Simple game simulation
function startGame() {
    let canvas = document.getElementById('gameCanvas');
    let ctx = canvas.getContext('2d');

    canvas.width = 300;
    canvas.height = 200;

    let heartX = 50, heartY = 100;
    let enemyX = 250, enemyY = 100;
    let won = false;

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw heart
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(heartX, heartY, 20, 0, Math.PI * 2);
        ctx.fill();

        // Draw enemy (Ego)
        ctx.fillStyle = "black";
        ctx.fillRect(enemyX, enemyY, 30, 30);

        if (heartX >= enemyX) {
            won = true;
            document.getElementById('gameMessage').innerText = "Yay! You defeated Ego! ❤️";
        }
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === "ArrowRight" && heartX < enemyX) {
            heartX += 10;
            draw();
        }
    });

    draw();
}
