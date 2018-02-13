var Letter = require("./letter_constructor.js");

var inquirer = require("inquirer");

var chalk = require('chalk');

var words = require("./words");


function setupGame() {

var tries = 13;
var word = new Letter();
var wordArray = word.newWordArray();
var wordBlanks = word.newWordBlanks();

	
global.tries = tries;
global.word = word;
global.wordArray = wordArray;
global.wordBlanks = wordBlanks;

	
	newGame();
}


function newGame() {
inquirer.prompt(
[
{
	type: "input",
	name: "newGuess",
	message: "\nThe movie is: "+wordBlanks.join(' ')+"\n \nGuess a letter:"
	},
	]
	).then(answers => {

	var flag = false;
	for (var i = 0; i < wordArray.length; i++) {
	if (wordArray[i].toUpperCase() == answers.newGuess.toUpperCase()) {
	flag = true;
	wordBlanks.splice(i,1,answers.newGuess);
	}
	}
	var solved = true;
	for (var i = 0; i < wordBlanks.length; i++) {
	if (wordBlanks[i] === "_"){
	solved = false;
	}
	}
	if (solved === true) {
	console.log(chalk.green("\nYou won!\n \nThe answer is: "+wordBlanks.join('')+"\n"))
	initiateProgram();
	} else if (flag === false && tries === 1) {
	console.log(chalk.red("\nYou lose!\n \nThe answer was: "+wordArray.join('')+"\n"));
	initiateProgram();
	} else if (flag === true) {
	console.log(chalk.green("\nCorrect! Guesses remaining: "+tries));
	newGame();
	} else {
	tries--;
	console.log(chalk.red("\nWrong! Guesses remaining: "+tries));
	newGame();
		}
	})
}

initiateProgram();