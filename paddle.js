export default class Paddle {
  constructor(game) {
    this.gameWidth = game.gameWidth;
    this.width = 150;
    this.height = 20;

    this.speed = 0;

    this.position = {
      x: game.gameWidth / 2 - this.width / 2,
      y: game.gameHeight - this.height - 10
    };
  }

  draw(ctx) {
    ctx.fillStyle = "#585858"
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  moveRight(){
    this.speed = 5;
  }

  moveLeft(){
    this.speed = -5;
  }

  stop(){
    this.speed = 0;
  }

  update(deltaTime){
    this.position.x += this.speed;

    if(this.position.x < 0) this.position.x = 0;
    // console.log('saurabh ss', this.position, this.width, this.gameWidth)
    if(this.position.x + this.width > this.gameWidth) this.position.x = this.gameWidth - this.width;
  }
}
