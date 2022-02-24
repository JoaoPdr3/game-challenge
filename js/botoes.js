var adcPalavra = document.getElementById("btn-adc-palavra");
var iniciar = document.getElementById("btn-jogar");
var reiniciaJogo = document.getElementById("btn-novamente");

adcPalavra.addEventListener("click", function(event) {
    event.preventDefault();

    var entradaPalavra = document.getElementById("nova-palavra");
        if(regEx.test(entradaPalavra.value)) {
            bancoDePalavras.push(entradaPalavra.value);
            alert("Palavra " + entradaPalavra.value + " adicionada com sucesso.");
        } else {
            alert("Adicione uma palavra válida.");
        }   
        entradaPalavra.value = "";
        
})

iniciar.addEventListener("click", function() {
    sorteiaPalavra();
    desenhaForca();
    mostraPalavra();
    
})

reiniciaJogo.addEventListener("click", function(){
    location.reload();

})