const btnAdd = document.getElementById("btn-add-word");
const pageWarning = document.querySelector(".info-page");
const textArea = document.getElementById("textarea");

function checkWord() {
  const regEx = /^[a-zçáâãóôõéêíúA-ZÁÂÃÓÔÕÉÊÍÚÇ \b]+$/gm;

  if (textArea.value.length == 5 || textArea.value == "") {
    if (textArea.value == "") {
      showWarning("Digite uma palavra no campo de texto.");
    } else if (!regEx.test(textArea.value)) {
      showWarning("Digite uma palavra válida.");
    } else {
      listWords().push(textArea.value);
      showWarning("A palavra foi adicionada com sucesso.");

      setTimeout(() => {
        window.location.href = "../pages/game.html";
      }, 1000);
    }
  } else if (textArea.value.length < 5 || textArea.value.length > 5) {
    showWarning("Digite uma palavra que tenha 5 letras.");
  }
}

function showWarning(text) {
  pageWarning.style.display = "flex";
  pageWarning.innerHTML = text;

  setTimeout(() => {
    pageWarning.style.display = "none";
  }, 4000);
}

btnAdd.addEventListener("click", function () {
  checkWord();
})