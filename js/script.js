var bancoDePalavras = ["PLAYSTATION","MICROSOFT","JAVASCRIPT","AZUL","STROGONOFF","ROXO","FOGUETE"];
var listaDeLetras = [];
var letrasErrada = [];
var erros = 6;

var letrasPalavra;
var letrasPalavra;
var palavraSorteada;

var regEx = new RegExp("^[A-Z]+$");


function sorteiaPalavra() {
    var palavra = Math.floor(Math.random() * bancoDePalavras.length);
    palavraSorteada = bancoDePalavras[palavra];
    letrasPalavra = palavraSorteada.split('');
    
}

function mostraPalavra() {
    var palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for(i = 0; i < letrasPalavra.length; i++) {
        if(listaDeLetras[i] == undefined) {
            listaDeLetras[i] = "&nbsp";
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='campo-letras'>" + listaDeLetras[i] + "</div>"
        } else {
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='campo-letras'>" + listaDeLetras[i] + "</div>"
        }
    };
}

function letraIdentificada(letra) {
    document.getElementById("tecla-" + letra).disabled = true;

        if(erros > 0) {
            mudaCorLetra("tecla-" + letra);
            comparaLetra(letra);
            mostraPalavra();
        }
}

function mudaCorLetra(tecla) {
    document.getElementById(tecla).style.background = "#44502b9d";
}

function comparaLetra(letra) {
    var letraIncorreta = document.querySelector(".letras-incorretas");
    var posicaoLtr = letrasPalavra.indexOf(letra);
        if(posicaoLtr < 0) {
            erros--
            letraIncorreta.innerHTML = letraIncorreta.innerHTML + "<div class='letras-incorretas'>" + letra + "</div>";

            desenhaTabuleiro();

            if(erros == 0) {
                fimDeJogo();
            }
        } else {
            for(i = 0; i < letrasPalavra.length; i++){
                if(letrasPalavra[i] == letra) {
                    listaDeLetras[i] = letra;
                }
            }
        }
        var vitoria = true;
            for(i = 0; i < letrasPalavra.length; i++){
                if(letrasPalavra[i] != listaDeLetras[i]){
                    vitoria = false;
                }
            }
        if(vitoria == true) {
            erros = 0;
            ganhaJogo();
        }
}

function desenhaTabuleiro() {
    switch(erros) {
        case 5:
            desenhaCabeca();
            break;
        case 4:
            desenhaCorpo();
            break;
        case 3:
            desenhaBracoDireito();
            break;
        case 2:
            desenhaBracoEsquerdo();
            break;
        case 1:
            desenhaPernaDireita();
            break;
        case 0:
            desenhaPernaEsquerda();
            break;
        default:
            desenhaForca();
    }
}

function ganhaJogo() {
    var elemento = document.getElementById("msg");
    var conteudo = document.createTextNode("Parabéns! Você acertou a palavra. (=");
    elemento.appendChild(conteudo);
    elemento.style.color = "green";
}

function fimDeJogo() {
    var elemento = document.getElementById("msg");
    var conteudo = document.createTextNode("Você errou... A palavra era " + palavraSorteada + ". Tente novamente!");
    elemento.appendChild(conteudo);
    elemento.style.color = "red";
}





