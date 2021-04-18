import {detectCollision} from './collosionDetection.js'
import { detectCollisionBottom } from './collosionDetection.js'

export default class Ball{
    constructor(game){
        this.image = document.getElementById('img_ball');

        this.gameHeight = game.gameHeight;
        this.gameWidth = game.gameWidth;

        this.game = game;

        // this.position = {x:10, y: 100}
        this.position = {x:game.paddle.position.x, y: game.paddle.position.y}
        this.speed = {x:4, y:2}
        this.size = 18;
    }

    draw(ctx){
        ctx.drawImage(this.image,  this.position.x, this.position.y, this.size, this.size);
    }

    update(deltaTime){

        // console.log('position::', this.game.paddle)
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;


        //wall on left or right
        if(this.position.x + this.size > this.gameWidth || this.position.x < 0){
            this.speed.x = -this.speed.x;
        }

        //wall on top or bottom
        if(this.position.y + this.size > this.gameHeight || this.position.y < 0){
            this.speed.y = -this.speed.y;
        }

        // check collosion with paddle
        // let bottomOfBall = this.position.y + this.size;
        // let topOfPaddle = this.game.paddle.position.y;
        // let leftSideOfPaddle = this.game.paddle.position.x;
        // let rightSideOfPaddle = this.game.paddle.position.x + this.game.paddle.width;

        if(detectCollision(this, this.game.paddle) ){
            this.speed.y = -this.speed.y;
            this.position.y = this.game.paddle.position.y - this.size;
        }

        if(detectCollisionBottom(this, this.game.paddle)){
            // alert('Game over!! Please try again.')
            this.speed = {x:0, y:0}
            alert('Game Over!!')
        }
    }
}