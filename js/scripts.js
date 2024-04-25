$(document).ready(function() {
    //Maze Size/Dimensions
    var mazeHeight = 400
    var mazeWidth = 400

    //Player starting position
    var playerX = 0
    var playerY = 0

    //Movement Functionality for player
    function movePlayer(dx, dy) {
        var newX = playerX + dx;
        var newY = playerY + dy;

        //Verify new position is inside of the maze walls
        if (newX >= 0 && newX < mazeWidth && newY >= 0 && newY < mazeHeight) {
            //Check to see if the new position is a wall or not
            if (!$('#maze').find('.wall').is('[style="top: ' + newY + 'px; left: ' + newX + 'px;"]')) {
                //We can move the player
                playerX = newX;
                playerY = newY;
                $('#player').css({ top: playerY + 'px', left: playerX + 'px' });
            }

            //Check to see if the player reaches the end
            if(playerX === 380 && playerY === 380){
                alert("Congratulations you made it throught maze")
            }

        }
    }

    // Keypress Event Listener
    $(document).keydown(function(e){
        switch (e.which) {
            case 37: // Left arrow
            movePlayer(-20, 0);
            break;
        case 38: // Up arrow
            movePlayer(0, -20);
            break;
        case 39: // Right arrow
            movePlayer(20, 0);
            break;
        case 40: // Down arrow
            movePlayer(0, 20);
            break;
        }
    })

    //Create Maze Walls
    var wallCoordinates = [
        {top:0, left:20},
        {top:20, left:20},
        {top:40, left:20},
        {top:60, left:20},
        {top:60, left:40},
        {top:60, left:60},
        {top:40, left:60},
        {top:20, left:60},
        {top:100, left:20},
        {top:120, left:20},
        {top:140, left:20},
        {top:160, left:20},
        {top:200, left:20},
        {top:200, left:40},
        {top:160, left:40},
        //Add more walls here and in the scss
    ]

    for (var i = 0; i < wallCoordinates.length; i++) {
        $('#maze').append('<div class="wall" style="top: ' + wallCoordinates[i].top + 'px; left: ' + wallCoordinates[i].left + 'px;"></div>');
    }

    //Create the player and append it to the board
    $('#maze').append('<div class="player" id="player" style="top: '+ playerY + 'px; left: ' + playerX + 'px;"></div>')

})