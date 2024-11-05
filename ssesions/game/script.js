const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 400;

// Game settings
const gravity = 0.5;
let score = 0;

// Player settings
const player = {
    x: 50,
    y: 300,
    width: 40,
    height: 50,
    dx: 5,
    dy: 0,
    jumping: false,
    grounded: false,
    big: false, // Track if player has a power-up
};

// Platforms
const platforms = [
    { x: 0, y: 350, width: 800, height: 50 },
    { x: 200, y: 250, width: 100, height: 20 },
    { x: 400, y: 200, width: 100, height: 20 },
];

// Enemies
const enemies = [{ x: 300, y: 300, width: 40, height: 40, dx: 2 }];

// Coins
const coins = [
    { x: 150, y: 320, width: 20, height: 20, collected: false },
    { x: 450, y: 220, width: 20, height: 20, collected: false },
];

// Power-ups (e.g., mushrooms)
const powerUps = [{ x: 600, y: 320, width: 20, height: 20, collected: false }];

// Handle player movement
document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowRight") player.x += player.dx;
    if (e.code === "ArrowLeft") player.x -= player.dx;

    if (e.code === "Space" && player.grounded) {
        player.dy = -12;
        player.jumping = true;
        player.grounded = false;
    }
});

// Game loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw features
    drawPlatforms();
    drawCoins();
    drawEnemies();
    drawPowerUps();
    applyPhysics();
    drawPlayer();
    displayScore();

    // Enemy movement
    moveEnemies();

    requestAnimationFrame(gameLoop);
}

// Draw player
function drawPlayer() {
    ctx.fillStyle = player.big ? "blue" : "red";
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

// Draw platforms
function drawPlatforms() {
    ctx.fillStyle = "brown";
    platforms.forEach((platform) => {
        ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
    });
}

// Draw enemies
function drawEnemies() {
    ctx.fillStyle = "green";
    enemies.forEach((enemy) => {
        ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);

        // Check collision with player
        if (checkCollision(player, enemy)) {
            if (!player.big) {
                alert("Game Over! Try Again!");
                resetGame();
            } else {
                enemy.x = -100; // Move enemy off screen if player is big
            }
        }
    });
}

// Move enemies back and forth
function moveEnemies() {
    enemies.forEach((enemy) => {
        enemy.x += enemy.dx;
        if (enemy.x < 0 || enemy.x + enemy.width > canvas.width) {
            enemy.dx *= -1; // Reverse direction
        }
    });
}

// Draw coins
function drawCoins() {
    ctx.fillStyle = "gold";
    coins.forEach((coin) => {
        if (!coin.collected) {
            ctx.fillRect(coin.x, coin.y, coin.width, coin.height);

            if (checkCollision(player, coin)) {
                coin.collected = true;
                score += 10;
            }
        }
    });
}

// Draw power-ups (e.g., mushroom)
function drawPowerUps() {
    ctx.fillStyle = "orange";
    powerUps.forEach((powerUp) => {
        if (!powerUp.collected) {
            ctx.fillRect(powerUp.x, powerUp.y, powerUp.width, powerUp.height);

            if (checkCollision(player, powerUp)) {
                powerUp.collected = true;
                player.big = true; // Grow player when collecting power-up
                player.width = 60; // Increase player size
                player.height = 70;
            }
        }
    });
}

// Apply physics and handle collisions
function applyPhysics() {
    player.dy += gravity;
    player.y += player.dy;

    // Check for platform collisions
    platforms.forEach((platform) => {
        if (
            player.x < platform.x + platform.width &&
            player.x + player.width > platform.x &&
            player.y + player.height > platform.y &&
            player.y + player.height < platform.y + platform.height
        ) {
            player.y = platform.y - player.height;
            player.dy = 0;
            player.grounded = true;
        }
    });

    // Check if player falls off screen
    if (player.y > canvas.height) {
        alert("Game Over! Try Again!");
        resetGame();
    }
}

// Collision detection
function checkCollision(rect1, rect2) {
    return (
        rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y
    );
}

// Display score
function displayScore() {
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText(`Score: ${score}`, 10, 20);
}

// Reset game
function resetGame() {
    player.x = 50;
    player.y = 300;
    player.dy = 0;
    player.big = false;
    player.width = 40;
    player.height = 50;
    score = 0;

    // Reset coins and power-ups
    coins.forEach((coin) => (coin.collected = false));
    powerUps.forEach((powerUp) => (powerUp.collected = false));

    // Reset enemies
    enemies.forEach((enemy) => {
        enemy.x = 300;
    });
}

// Start the game loop
gameLoop();