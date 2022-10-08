const btnAddWord = document.getElementById("btn-add-word");
const alertPage = document.querySelector(".alert");
const inputWord = document.getElementById("textarea");

function checkWord() {
  const regEx = /^[a-zçáâãóôõéêíúA-ZÁÂÃÓÔÕÉÊÍÚÇ \b]+$/gm;

  if (inputWord.value.length == 5 || inputWord.value == "" || !regEx.test(inputWord.value)) {
    if (inputWord.value == "") {
      showAlert("Digite uma palavra no campo de texto.");
    } else if (!regEx.test(inputWord.value)) {
      showAlert("Digite uma palavra válida.");
    } else {
      listWords().push(inputWord.value);
      showAlert("A palavra foi adicionada com sucesso.");

      setTimeout(() => {
        window.location.href = "../pages/game.html";
      }, 1000);
    }
  } else if (inputWord.value.length < 5 || inputWord.value.length > 5) {
    showAlert("Digite uma palavra que tenha 5 letras.");
  }
}

function showAlert(text) {
  alertPage.innerHTML = text;

  setTimeout(() => {
    alertPage.style.display = "flex";
    setTimeout(() => {
      alertPage.style.display = "none"
    }, 1800);
  }, 100);
}

btnAddWord.addEventListener("click", function () {
  checkWord();
})