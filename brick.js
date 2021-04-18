import { detectCollision } from './collosionDetection.js'

export default class Brick{
    constructor(game, position){
        this.image = document.getElementById('img_brick');

        this.game = game;

        this.position = position;

        this.speed = {x:4, y:2}
        this.width = 80;
        this.height = 24;

        this.markedForDeletion = false;
    }

    draw(ctx){
        ctx.drawImage(
            this.image,  
            this.position.x, 
            this.position.y, 
            this.width, 
            this.height
        );
    }

    update(deltaTime){
        if(detectCollision(this.game.ball, this)){
            this.game.ball.speed.y = -this.game.ball.speed.y;
            this.markedForDeletion = true;
        }
    }
}