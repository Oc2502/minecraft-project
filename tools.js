const pickaxe = document.getElementById('pickaxe');
const shovel = document.getElementById('shovel');
const axe = document.getElementById('axe');


function testIf(x, y) {
    if( (matrix[x][y] !== 0) && matrix[x][y-1] === 0) {
        return true;
    }// function for remove.
}

function replace() {
    if( (matrix[x][y] === 0) && matrix[x][y-1] !== 0) {
        return true;
    }// function for place.
}

pickaxe.addEventListener('click', currentTool) 

gameArea.currentTool = [];

function currentTool(e){
    
    matrix[3][4] = 2;
    gameArea.colorMap()
    console.dir(e)
    console.dir(e.target)

}


// function remove(e) {
    

//     div.addEventListener('click', testIf(matrix[x],matrix[y]))
//     if(testIf(screenX,screenY) ===true) {
//         matrix[screenX][screenY] = 0;
//     } else {
//         return false
//     }
//     console.log(e)
//     console.log(e.target)
// }