
const start = document.querySelector('.start')
start.addEventListener('click', startGame)
let game = document.querySelector('.game');

function startGame() {
    gameArea.start(); // matrix
    gameArea.setMap();
    gameArea.colorMap();
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
            }
        } 
        console.log(matrix)
        return matrix
    }
}

gameArea.setMap = function() { 
    for(let i = 17; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            matrix[i][j] = 1;
        }
    }

    for(let i = 13; i < 17; i++) {
        for(let j = 4; j < 5; j++) {
            matrix[i][j] = 3
        }
    }

    for(let i = 10; i < 13; i++) {
        for(let j = 3; j < 6; j++) {
            matrix[i][j] = 2
        }
    }

    for(let i = 10; i < 13; i++) {
        for(let j = 3; j < 6; j++) {
            matrix[i][j] = 2
        }
    }

    for(let i = 7; i < 9; i++) {
        for(let j = 10; j < 15; j++) {
            matrix[i][j] = 4
        }
    }
    for(let i = 6; i < 10; i++) {
        for(let j = 13; j < 14; j++) {
            matrix[i][j] = 4
        }
    }

    for(let i = 15; i < 17; i++) {
        for(let j = 10; j < 14; j++) {
            matrix[i][j] = 5
        }
    }


    console.log(matrix)
    return matrix
}

gameArea.colorMap = function () {
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            // matrix[i][j] = div = document.createElement('div')
            // game.appendChild(matrix[i][j])
            if(matrix[i][j] === 0) {
                matrix[i][j] = div = document.createElement('div');
                div.classList.add('box')
                div.classList.add('sky')
                game.appendChild(matrix[i][j])
               
            }
            if(matrix[i][j] === 1) {
                matrix[i][j] = div = document.createElement('div');
                div.classList.add('box')
                div.classList.add('dirt')
                game.appendChild(matrix[i][j])
                
            }
            if(matrix[i][j] === 2) {
                matrix[i][j] = div = document.createElement('div');
                div.classList.add('box')
                div.classList.add('grass')
                game.appendChild(matrix[i][j])
                
            }
            if(matrix[i][j] === 3) {
                matrix[i][j] = div = document.createElement('div');
                div.classList.add('box')
                div.classList.add('tree')
                game.appendChild(matrix[i][j])
                
            }
            if(matrix[i][j] === 4) {
                matrix[i][j] = div = document.createElement('div');
                div.classList.add('box')
                div.classList.add('cloud')
                game.appendChild(matrix[i][j])
                
            }
            if(matrix[i][j] === 5) {
                matrix[i][j] = div = document.createElement('div');
                div.classList.add('box')
                div.classList.add('rock')
                game.appendChild(matrix[i][j])
                
            }
        }
    }
    console.log(matrix)
    return matrix
}





startGame()
console.log(matrix)


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


