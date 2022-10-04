const btnRestart = document.getElementById("btn-restart");

let wordsList = ["AMARELO", "VIDEOGAME", "JANEIRO", "CARRO", "CACHORRO", "INCONSEQUENTE"];
let letterList = [];
let word;
let lettersWord;
let attempts = 6


function randomWord() {
  let randomNumb = Math.floor(Math.random() * wordsList.length);
  word = wordsList[randomNumb];
  // Word broken into pieces/letters;
  lettersWord = word.split('');
}
randomWord();


function showWord() {
  let divWord = document.querySelector("div.word");
  divWord.innerHTML = "";

  for (let i = 0; i < lettersWord.length; i++) {
    if (letterList[i] == undefined) {
      letterList[i] = "&nbsp;"
      divWord.innerHTML = divWord.innerHTML + "<span class='letter'>" + letterList[i] + "</span>";
    } else {
      divWord.innerHTML = divWord.innerHTML + "<span class='letter'>" + letterList[i] + "</span>";
    }
  }
}
showWord();


function showBoard() {
  switch (attempts) {
    case 5:
      showHead();
      break;
    case 4:
      showBody();
      break;
    case 3:
      showLeftArm();
      break;
    case 2:
      showRightArm();
      break;
    case 1:
      showLeftLeg();
      break;
    case 0:
      showRightLeg();
      break;
    default:
      showGallows();
  }
}
showGallows();

function unguessedWord() {
  if (erros == 0) {

  }
}

function guessedWord() {
  let wins = true;

  for (let i = 0; i < lettersWord.length; i++) {
    if (lettersWord[i] != letterList[i]) {
      wins = false;
    }
  }

  if (wins == true) {
    attempts = 0;

  }
}

function compareLetterOfWord(letter) {
  let letterPosition = lettersWord.indexOf(letter);

  if (letterPosition < 0) {
    attempts--
    showBoard();
  } else {
    for (let i = 0; i < lettersWord.length; i++) {
      if (lettersWord[i] == letter) {
        letterList[i] = letter;
      }
    }
  }
}

function identifiesLetter(letter) {
  document.getElementById("key-" + letter).disabled = true;

  if (attempts > 0) {
    document.getElementById("key-" + letter).style.cursor = "no-drop";
    compareLetterOfWord(letter);
    showWord();
  }
}



btnRestart.addEventListener("click", function () {
  window.location.reload(true);

});

window.addEventListener("keydown", function (e) {
})
