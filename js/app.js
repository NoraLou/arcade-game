var Enemy = function() {
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 400;
};

Player.prototype.update = function(dt){
};

Player.prototype.render = function() {
    // console.log(this.sprite);
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player.prototype.reset = function() {
//     this.col = getRandomInt(0,4);
//     this.row = 5;
//     this.moveable = true;
// };

Player.prototype.handleInput = function(){

};


var getRandomInt = function(max){
    return Math.floor(Math.random()* max);
}

var makeEnemies = function(num){
    var allEnemies = []
    for(var i = 0; i < num; i++){
        var enemy = new Enemy();
        enemy.x = 0;
        enemy.y = getRandomInt(220);
        allEnemies.push(enemy)
    }
    return allEnemies;
}

var allEnemies = makeEnemies(3);

console.log(allEnemies);


var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
