// let gameMatrix = [
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// ]


let game = document.querySelector('.game');

function startGame() {
    gameArea.start(); // matrix
    // gameArea.setMap();
}

//----------------------------------------------------------------- set matrix

let rows = 20;
let cols = 25;
let matrix = [];

let gameArea = {
    start : function() {

              
        for(let i=0; i < cols; i++){
        matrix[i] = [];
            for(let j=0; j < rows; j++){
                matrix[i][j] = 0;
                // box = document.createElement('div');
                // box.classList.add('box')
                // matrix[i][j] = box
                // console.log(matrix[i][j]) // 
                // game.appendChild(matrix[i][j]);
            }
        } 
        console.log(matrix)
        return matrix
    }
}

function setMap() { ////// set into object
    for(let i = 17; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            matrix[i][j] = 1;
        }
    }
    console.log(matrix)
    return matrix
}
startGame()
console.log(matrix)
setMap()
// function setMatrix() {
//     let rows = 20;
//     let cols = 25;
//     let matrix = [];

                
//     for(let i=0; i < cols; i++){
//     matrix[i] = [];
//         for(let j=0; j < rows; j++){
//             box = document.createElement('div');
//             box.classList.add('box')
//             matrix[i][j] = box
//             console.log(matrix[i][j]) // 
//             game.appendChild(matrix[i][j]);
//         }
//     } 
//     console.log(matrix)
    
//     for(let i =)

// }
// setMatrix()


