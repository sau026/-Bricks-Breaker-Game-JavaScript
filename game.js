import Paddle from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js';
import Brick  from './brick.js';
import { buildLevel, Level1 } from './level.js'

export default class Game{
    constructor(gameWidth, gameHeight){

        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    start(){
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);

        let bricks = buildLevel(this, Level1)

        // let bricks = [];
        // for(let i=0; i<10; i++){
        //     bricks.push(new Brick(this, {x:i*53, y:20}))
        // }
    
        this.gameObjects = [this.ball, this.paddle, ...bricks]

        new InputHandler(this.paddle)
    }

    update(deltaTime){
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
}