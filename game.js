import Paddle from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js';
import Brick  from './brick.js';
import { buildLevel, Level1 } from './level.js'

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3
}

export default class Game{
    constructor(gameWidth, gameHeight){

        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        new InputHandler(this.paddle, this)
        this.gameObjects = [];
        this.gamestate = GAMESTATE.PAUSED;
        this.count = 0;
    }

    start(){
        let bricks = buildLevel(this, Level1)
        this.gameObjects = [this.ball, this.paddle, ...bricks]
        this.gamestate = GAMESTATE.RUNNING;
    }

    update(deltaTime){
        if( this.gamestate == GAMESTATE.PAUSED) return;
        // this.paddle.update(deltaTime);
        // this.ball.update(deltaTime)
        this.gameObjects.forEach((object)=> object.update(deltaTime))

        this.gameObjects = this.gameObjects.filter(object => !object.markedForDeletion)
    }

    draw(ctx){
        // this.paddle.draw(ctx)
        // this.ball.draw(ctx )
        // this.brick.draw(ctx)

        this.gameObjects.forEach((object)=>object.draw(ctx));

        if(this.gamestate == GAMESTATE.PAUSED){

            ctx.font = "30px New Roman"
            ctx.fillStyle = "black"
            ctx.textAlign = "center";
            ctx.fillText("Paused!! Press Space to start", this.gameWidth / 2, this.gameHeight / 2)
        }
    }

    togglePause(){
        if(this.gamestate == GAMESTATE.RUNNING){
            this.gamestate = GAMESTATE.PAUSED
        } else{
            this.gamestate = GAMESTATE.RUNNING
            if(this.count == 0){
                this.start();
                this.count += 1;
            }
        }
    }
}