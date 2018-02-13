var Letter = require("./letter.js");

var Word = function (word) {
this.word = word;
this.letters = [];
this.guessedLetters = "";
this.found = false;

this.getLetter = function () {
 for (var i = 0; i < this.word.length; i++) {
            this.letters.push(new Letter.Letter(this.word[i]));
}
console.log(this.letters);
}

this.foundWord = function (guess) {
var counter = 0;
    for (var i = 0; i < this.letters.length; i++) {
 if (this.letters[i].appear === true) {
 counter++;
    }
    }
if (this.letters.length === counter) {
 this.found = true;
     }
 else {
    this.found = false;
 }
return this.found;
}

this.checkLetter = function (guess) {
 var counter = 0;
 this.guessedLetters += guess;
for (var i = 0; i < this.letters; i++) {
if (this.letters[i].charac === guess) {
  this.letters[i].appear = true;
 counter++;
 }
 }
 return counter;
 }
 this.renderWord = function() {
 var str = "";
 for (var i = 0; i < this.letters.length; i++) {
str += this.letters[i].letterRender();
}
return str;
 }

};

exports.Word = Word;

