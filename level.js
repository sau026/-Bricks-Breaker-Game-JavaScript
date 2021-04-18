import Brick  from './brick.js';

export function buildLevel(game, level){

    let bricks = [];

    level.forEach((row, rowIndex, i) => {
        row.forEach((brick, brickIndex)=>{
            if(brick == 1){
                let position = {
                    x: 81 * brickIndex,
                    y: 20 + 25 * rowIndex
                };
                bricks.push(new Brick(game, position))
            }
        })
    });
    return bricks;
}

export const Level1 = [
    [0,1,0,1,0,1,0,1,0,1],
    [1,1,1,1,1,1,1,1,1,1],
    [0,1,0,1,0,1,0,1,0,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
]