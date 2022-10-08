const btnRestart = document.getElementById("btn-restart");
const alertPage = document.querySelector(".alert");

let wordsList = listWords();
let lettersList = [];
let lettersWordList = [];
let selectWord;
let attempts = 8;

function randomWord() {
  let randomNumb = Math.floor(Math.random() * wordsList.length);
  selectWord = wordsList[randomNumb].toUpperCase();
  // Word broken into pieces/letters;
  lettersWordList = selectWord.split('');
}

function showWord() {
  const word = document.querySelector(".word");
  word.innerHTML = "";

  for (let i = 0; i < lettersWordList.length; i++) {
    if (lettersList[i] == undefined) {
      lettersList[i] = "&nbsp;";
      word.innerHTML = word.innerHTML + "<span class='letter'>" + lettersList[i] + "</span>";
    } else {
      word.innerHTML = word.innerHTML + "<span class='letter'>" + lettersList[i] + "</span>";
    }
  }
}


function gameAttempts() {
  const elements = document.getElementsByClassName("heart");

  switch (attempts) {
    case 7:
      elements[7].innerHTML = "&nbsp;";
      break;
    case 6:
      elements[6].innerHTML = "&nbsp;";
      break;
    case 5:
      elements[5].innerHTML = "&nbsp;";
      break;
    case 4:
      elements[4].innerHTML = "&nbsp;";
      break;
    case 3:
      elements[3].innerHTML = "&nbsp;";
      break;
    case 2:
      elements[2].innerHTML = "&nbsp;";
      break;
    case 1:
      elements[1].innerHTML = "&nbsp;";
      break;
    case 0:
      elements[0].innerHTML = "&nbsp;";
      break;
    default:
      break;
  }
}

// If the attempts reach 0 this function will be called in the function compareLetterOfWord;
function unguessedWord() {
  if (attempts == 0) {
    alertPage.style.display = "flex";
    alertPage.innerHTML = `Tente novamente! Palavra certa: ${selectWord}.`;
    document.querySelector(".keyboard").style.pointerEvents = "none"

    setTimeout(() => {
      alertPage.style.display = "none";
    }, 4000);
  }
}

//If the word is guessed, this function will do a "FOR" to compare if the typed letters are the same as the letters of the right word;
function guessedWord() {
  let wins = true;

  for (let i = 0; i < lettersWordList.length; i++) {
    if (lettersWordList[i] != lettersList[i]) {
      wins = false;
    }
  }

  if (wins == true) {
    attempts = 0;
    alertPage.style.display = "flex";
    alertPage.innerHTML = `Parabéns você adivinhou a palavra!`;
    document.querySelector(".keyboard").style.pointerEvents = "none"

    setTimeout(() => {
      alertPage.style.display = "none";
    }, 4000);
  }
}

function accentedLetter(letter) {
  let exist = false;

  for (let i = 0; i < lettersWordList.length; i++) {
    if (letter == "A" && lettersWordList[i] == "Ã") {
      lettersList[i] = "Ã";
      exist = true;
    } else if (letter == "A" && lettersWordList[i] == "Á") {
      lettersList[i] = "Á";
      exist = true;
    } else if (letter == "A" && lettersWordList[i] == "Â") {
      lettersList[i] = "Â";
      exist = true;
    } else if (letter == "E" && lettersWordList[i] == "É") {
      lettersList[i] = "É";
      exist = true;
    } else if (letter == "E" && lettersWordList[i] == "Ê") {
      lettersList[i] = "Ê";
      exist = true;
    } else if (letter == "I" && lettersWordList[i] == "Í") {
      lettersList[i] = "Í";
      exist = true;
    } else if (letter == "O" && lettersWordList[i] == "Ó") {
      lettersList[i] = "Ó";
      exist = true;
    } else if (letter == "O" && lettersWordList[i] == "Ô") {
      lettersList[i] = "Ô";
      exist = true;
    } else if (letter == "O" && lettersWordList[i] == "Õ") {
      lettersList[i] = "Õ";
      exist = true;
    } else if (letter == "U" && lettersWordList[i] == "Ú") {
      lettersList[i] = "Ú";
      exist = true;
    } else if (letter == "C" && lettersWordList[i] == "Ç") {
      lettersList[i] = "Ç";
      exist = true;
    }
  }
  return exist;
}

function compareLetterOfWord(letter) {
  let letterPosition = lettersWordList.indexOf(letter);

  if (letterPosition < 0) {
    accentedLetter(letter);

    if (accentedLetter(letter) == false) {
      attempts--;
      gameAttempts();
      unguessedWord();
    }
  } else {
    for (let i = 0; i < lettersWordList.length; i++) {
      if (lettersWordList[i] == letter) {
        lettersList[i] = letter
      }
      accentedLetter(letter);
    }
    guessedWord();
  }
}

function identifiesLetter(letter) {
  document.getElementById("key-" + letter).disabled = true;

  if (attempts > 0) {
    compareLetterOfWord(letter);
    showWord();
  }
}

// Call functions on page load;
randomWord();
showWord();

btnRestart.addEventListener("click", function () {
  window.location.reload(true);
});

window.addEventListener("keydown", function (e) {
  const regEx = /^[a-zç \b]+$/gm;

  if (!attempts == 0) {
    if (!regEx.test(e.key)) {
      alertPage.style.display = "flex";
      alertPage.innerHTML = `Digite uma letra válida.`;

      setTimeout(() => {
        alertPage.style.display = "none";
      }, 4000);
    } else {
      identifiesLetter(e.key.toUpperCase());
    }
  }
})
