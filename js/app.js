
//helper function
var getRandomInt = function(max, min){
    return Math.random()* (max-min) + min;
}

var Enemy = function() {
    this.sprite = 'images/enemy-bug.png';
    this.reset();// set starting attributes

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += this.speed;
    this.col = this.x/101;

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//declare starting positions.speed
Enemy.prototype.reset = function(){
    this.col= -1;//no real row yet
    this.x = (Math.floor(Math.random()*90))* -1; //neg num btwn 0 & -70
    console.log(this.x);
    this.row = Math.floor(getRandomInt(1,4));
    this.y = (this.row * 83)-20;// row offset by 20
    this.speed = getRandomInt(1,8);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
    this.sprite = 'images/char-boy.png';
    this.x = (Math.floor(Math.random()*70))* -1
    this.y = this.row * 83
    this.row = 6
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

var makeEnemies = function(num){
    var allEnemies = [];
    for(var i = 0; i < num; i++){
        var enemy = new Enemy();
        allEnemies.push(enemy)
    }
    return allEnemies;
}

var allEnemies = makeEnemies(1);

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
