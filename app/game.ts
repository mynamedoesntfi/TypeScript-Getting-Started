/// <reference path="Utility.ts" />
/// <reference path="result.ts" />
/// <reference path="player.ts" />
/// <reference path="scoreboard.ts" />

class Game {
    private scoreboard: Scoreboard = new Scoreboard;
    private calculateScoreButton: HTMLElement;

    constructor(public player: Player, public problemCount: number, public factor: number)   {
        this.calculateScoreButton = document.getElementById("calculate")!;
    }

    displayGame(): void {
        //create HTML for current game
        let gameForm: string = '';
        for(let i=1;i<= this.problemCount;i++)  {
            gameForm += '<div class="form-group">';
            gameForm += '<label for="answer' + i + '" class="col-sm-2 control-label">';
            gameForm += String(this.factor) + ' x ' + i + ' = </label>'
            gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + i + '" size="5" /></div>'
            gameForm += '</div>'
        }

        //add the HTML
        const gameElement: HTMLElement = document.getElementById("game")!
        gameElement.innerHTML = gameForm

        //enable calculate button
        this.calculateScoreButton!.removeAttribute('disabled');
    }

    calculateScore(): void {
        let score: number = 0;

        for(let i=1;i<=this.problemCount;i++)   {
            //get user's answer
            const answer:number = Number(Utility.getInputValue('answer' + i));
            //check for correctness
            if(i * this.factor === answer)  score++;
        }

        //create a new result object to send to scoreboard
        const result: Result = {
            playerName: this.player.name,
            score: score,
            problemCount: this.problemCount,
            factor: this.factor
        };

        //add result to scoreboard and update it
        this.scoreboard.addResult(result);
        this.scoreboard.updateScoreboard();

        //disable calculate button
        this.calculateScoreButton!.setAttribute('disabled', 'true')
    }
}