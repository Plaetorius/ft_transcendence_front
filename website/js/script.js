console.log('Hello World!');

document.addEventListener('DOMContentLoaded', function() {
    var test_button = document.getElementById('btn');
    test_button.addEventListener('click', function() {
        alert('Test button clicked');
    });

    drawPongScene(); // Initial draw of the pong bars and ball
    animate(); // Start the animation loop
});

var canvas = document.getElementById('pong_canvas');
var ctx = canvas.getContext('2d');
var i = 10, j = 10; // Initial positions for both bars
var barHeight = 50;
var barWidth = 10;
var ballSize = 10;
var ballX = canvas.width / 2;
var ballY = canvas.height / 2;
var ballSpeedX = 3;
var ballSpeedY = 3;
var pressedKeys = new Set(); // Set to keep track of pressed keys

function drawPongScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw left bar
    ctx.beginPath();
    ctx.rect(5, i, barWidth, barHeight);
    ctx.fill();
    ctx.closePath();

    // Draw right bar
    ctx.beginPath();
    ctx.rect(canvas.width - barWidth - 5, j, barWidth, barHeight);
    ctx.fill();
    ctx.closePath();

    // Draw ball
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballSize, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}

function calculateBallAngle(ballY, paddleY, paddleHeight) {
    // Determine where the ball hits the paddle (0: top, 1: bottom)
    var hitPoint = (ballY - paddleY) / paddleHeight;

    // Convert hit point to a range of angles (e.g., -45 to 45 degrees)
    var angle = hitPoint * 90 - 45;

    // Convert angle to radians for velocity calculations
    return angle * (Math.PI / 180);
}

function animate() {
    var moveAmount = pressedKeys.has('a') || pressedKeys.has('j') ? 10 : 5;
    // Movement for left bar
    if (pressedKeys.has('d')) {
        i = Math.max(i - moveAmount, 0); // Move up, but not past the top edge
    }
    if (pressedKeys.has('s')) {
        i = Math.min(i + moveAmount, canvas.height - barHeight); // Move down, but not past the bottom edge
    }

    // Movement for right bar
    if (pressedKeys.has('l')) {
        j = Math.max(j - moveAmount, 0); // Move up, but not past the top edge
    }
    if (pressedKeys.has('k')) {
        j = Math.min(j + moveAmount, canvas.height - barHeight); // Move down, but not past the bottom edge
    }

    // Ball movement
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Collision detection with walls
    if (ballY <= 0 || ballY >= canvas.height) {
        ballSpeedY *= -1; // Reverse the ball's y-direction
    }

    // Collision detection with left and right edges
    if (ballX <= 0 || ballX >= canvas.width) {
        ballSpeedX *= -1; // Reset the ball position and reverse the ball's x-direction
        ballX = canvas.width / 2; // Reset ball to the center
        ballY = canvas.height / 2;
    }

    if ((ballX <= barWidth + 3 && ballY > i && ballY < i + barHeight) ||
    (ballX >= canvas.width - barWidth - 3 - ballSize && ballY > j && ballY < j + barHeight)) {
    
    var paddleY = (ballX < canvas.width / 2) ? i : j; // Y position of the hit paddle
    var angle = calculateBallAngle(ballY, paddleY, barHeight);

    // Update ball velocity based on angle
    ballSpeedX = -ballSpeedX;
    ballSpeedY = 5 * Math.sin(angle); // Adjust the Y speed based on the angle

    // Optional: Increase ball speed for added difficulty
    ballSpeedX *= 1.1;
    ballSpeedY *= 1.1;
    }

    drawPongScene();
    requestAnimationFrame(animate);
}

// Detect key pressed
document.addEventListener('keydown', function(event) {
    pressedKeys.add(event.key);
});

// Detect key released
document.addEventListener('keyup', function(event) {
    pressedKeys.delete(event.key);
});
