import Game from './game.js';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const gameWidth = 700;
const gameHeight = 500;

ctx.clearRect(0,0,gameWidth,gameHeight);

// ctx.fillStyle = '#f00';
// ctx.fillRect(20,20, 100, 100)

// ctx.fillStyle = '#00f';
// ctx.fillRect(400 ,200, 50, 50)

let game = new Game(gameWidth, gameHeight)
game.start()

// paddle.draw(ctx)

let lastTime = 0;

//Image ball

function gameLoop(timestamp){
    let deltaTime = timestamp - lastTime
    lastTime = timestamp

    ctx.clearRect(0,0,700,500)
    // paddle.update(deltaTime);
    // paddle.draw(ctx)

    // ball.update(deltaTime)
    // ball.draw(ctx )

    game.update(deltaTime)
    game.draw(ctx)

    requestAnimationFrame(gameLoop)
}

requestAnimationFrame(gameLoop)
