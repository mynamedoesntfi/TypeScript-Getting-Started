import { Player } from './player';
import { Game } from './game';
import * as Utility from './utility';

let newGame: Game;

//click handler for start game
document.getElementById('startGame')!.addEventListener('click', () => {
	const player: Player = new Player();
	player.name = Utility.getValue('playername');

	const problemCount: number = Number(Utility.getValue('problemCount'));
	const factor: number = Number(Utility.getValue('factor'));

	newGame = new Game(player, problemCount, factor);
	newGame.displayGame();
});

//click handler for calc score
document.getElementById('calculate')!.addEventListener('click', () => {
	newGame.calculateScore();
});
