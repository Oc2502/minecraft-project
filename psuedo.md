    pseudo code:

    what i need to do -> make minecraft Game
------------------------------------------------
new object : game area -> invokes the start function

    1. build the game :
        * build the matrix.

            how to build matrix: 
                 - build a 2D array.
                 - first each element get value 0 

            
-----------------------------------------------------------
            build a 2d array ans assign a div for each element. ->
            

            >>
            arr = [];
            for (i = 0; i < 3; ++i) {
                arr[i] = a = [];
                for (j = 0; j < 15; ++j) {
                    // Create the div
                    mainCube[i][j] = div = document.createElement('div');

                    // Add class and such to div
                    div.className = "letterPix"; // No dot!

                    // Append it to something
                }
            }
            >>

--------------------------------------------------------------
        
        * giv value for each element:
                - neet to make a loop for the elements we want to change, give them a value. 

            0 -> sky
            1 -> tile
            2 -> grass
            3 -> tree

            how to set value:


        * giv class foreach number ( need to use if statment.)

            - build a function that give each number his class+ div class. 
            - array.foreach(......if .. )





        * all functions neet to be inside(method) an object.
        - landing page:
            1. main container (div)
            2. start Button -> start the game
                - click event on the button. when button click=> start function "startGame"
            3. tutorial explaining the game.

        - game:
            1. start game funcion => make the world and toolbar
                - style world: the world build with matrix of divs.
                    how to build matrix let board =
                    [
                    [1,1,2,2,2],
                    [1,3,3,2,2],
                    [1,3,3,4,4],
                    [1,3,4,4,4],
                    [5,5,5,5,5]
                    ]
                    making an arry of array => each number represent diffrent div.
                    https://stackoverflow.com/questions/61267970/3-coloring-two-dimensional-array-with-javascript

                    -> loop to make them appear on window.

            2. make a loop for coloring the divs. and give them  a number in value
                - two main divs :
                    center -> the world
                    rigth -> toolbar

                    -toolbar: list of checkBok
                        if axe is checked -> only trees divs can be changed. -> add it to inventory
                        if pickaxe -> only mining rocks can be changed. -> add it to inventory
                        if shovel -> only digging dirt. -> add it to inventory
                        add the last one to
