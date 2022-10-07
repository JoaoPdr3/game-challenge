// Seleciona elementos;
const btnRestart = document.getElementById("btn-restart");
const gameWarning = document.querySelector(".game-situation");

// Varáveis Globais;
let wordsList = ["AMARELO", "VIDEOGAME", "JANEIRO", "CARRO", "CACHORRO", "INCONSEQUENTE"];
let lettersList = [];
let lettersWordList = [];
let selectWord;
let attempts = 6

// Gerar palavra aleatória de acordo com número gerado pela função Math.random();
function randomWord() {
  let randomNumb = Math.floor(Math.random() * wordsList.length);
  selectWord = wordsList[randomNumb];
  // Word broken into pieces/letters;
  lettersWordList = selectWord.split('');
}

// Essa função mostra quantos caracteres a palavra tem caso lista de letras não tiver sido definada, caso já possua só irá atualizar a lista;
function showWord() {
  let divWord = document.querySelector("div.word");
  divWord.innerHTML = "";

  for (let i = 0; i < lettersWordList.length; i++) {
    if (lettersList[i] == undefined) {
      lettersList[i] = "&nbsp;"
      divWord.innerHTML = divWord.innerHTML + "<span class='letter'>" + lettersList[i] + "</span>";
    } else {
      divWord.innerHTML = divWord.innerHTML + "<span class='letter'>" + lettersList[i] + "</span>";
    }
  }
}

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

function unguessedWord() {
  if (attempts == 0) {
    gameWarning.style.display = "flex";
    gameWarning.innerHTML = `Tente novamente! A palavra certa é ${selectWord}.`;
    document.querySelector(".keyboard").style.pointerEvents = "none"

    setTimeout(() => {
      gameWarning.style.display = "none";
    }, 4000);
  }
}

function guessedWord() {
  let wins = true;

  for (let i = 0; i < lettersWordList.length; i++) {
    if (lettersWordList[i] != lettersList[i]) {
      wins = false;
    }
  }

  if (wins == true) {
    attempts = 0;
    gameWarning.style.display = "flex";
    gameWarning.innerHTML = `Parabéns! Você acertou a palavra ${selectWord}.`;
    document.querySelector(".keyboard").style.pointerEvents = "none"

    setTimeout(() => {
      gameWarning.style.display = "none";
    }, 4000);
  }
}

// Essa função compara a letra da palavra caso a letra não exista será diminuido 1 de 6 tentativas e mostrando uma parte do boneco na forca, se a letra existir ela é adicionada na lista de letras;
function compareLetterOfWord(letter) {
  let letterPosition = lettersWordList.indexOf(letter);

  if (letterPosition < 0) {
    attempts--;
    showBoard();
    unguessedWord();
  } else {
    for (let i = 0; i < lettersWordList.length; i++) {
      if (lettersWordList[i] == letter) {
        lettersList[i] = letter;
      }
    }
    guessedWord();
  }
}

// Essa função é chamada quando clicado em alguma tecla, então a letra é identificada e feita a comparação para ver se a letra está certa e se for certa será mostrada no campo;
function identifiesLetter(letter) {
  document.getElementById("key-" + letter).disabled = true;

  if (attempts > 0) {
    compareLetterOfWord(letter);
    showWord();
  }
}

// Chamando função ao carregar página para escolher uma palavra aleatória, mostrar quantos caracteres essa palavra tem e mostrar forca no canvas;
randomWord();
showWord();
showGallows();

btnRestart.addEventListener("click", function () {
  window.location.reload(true);
});

window.addEventListener("keydown", function (e) {
  const regEx = /^[a-zA-Z \b]+$/gm;

  if (!attempts == 0) {
    if (!regEx.test(e.key)) {
      gameWarning.style.display = "flex";
      gameWarning.innerHTML = `Digite uma letra válida.`;

      setTimeout(() => {
        gameWarning.style.display = "none";
      }, 4000);
    } else {
      identifiesLetter(e.key.toUpperCase());
    }
  }
})
