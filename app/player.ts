/// <reference path="person.ts" />


class Player implements Person  {
    name: string;
    age: number;
    highscore:number;

    formatName() {
        return this.name.toUpperCase();
    }
}