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
    }

    start(){
        this.gamestate = GAMESTATE.RUNNING;
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);

        let bricks = buildLevel(this, Level1)

        // let bricks = [];
        // for(let i=0; i<10; i++){
        //     bricks.push(new Brick(this, {x:i*53, y:20}))
        // }
    
        this.gameObjects = [this.ball, this.paddle, ...bricks]

        new InputHandler(this.paddle, this)
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

        this.gameObjects.forEach((object)=>object.draw(ctx))
    }

    togglePause(){
        console.log('saurabh check gane stata:::', this.gamestate)
        if(this.gamestate == GAMESTATE.RUNNING){
            console.log('saurabh check gane stata::2222:', this.gamestate)
            this.gamestate = GAMESTATE.PAUSED
        } else{
            console.log('saurabh check gane stata:::1111', this.gamestate)
            this.gamestate = GAMESTATE.RUNNING
        }
    }
}