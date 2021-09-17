"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var player_1 = require("./player");
var game_1 = require("./game");
var Utility = require("./utility");
var newGame;
document.getElementById('startGame').addEventListener('click', function () {
    var player = new player_1.Player();
    player.name = Utility.getValue('playername');
    var problemCount = Number(Utility.getValue('problemCount'));
    var factor = Number(Utility.getValue('factor'));
    newGame = new game_1.Game(player, problemCount, factor);
    newGame.displayGame();
});
document.getElementById('calculate').addEventListener('click', function () {
    newGame.calculateScore();
});
