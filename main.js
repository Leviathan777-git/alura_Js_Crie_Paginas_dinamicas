// função toca o audio
function tocaSom(selectorAudio) {
    elemento = document.querySelector(selectorAudio); // adiconado  a variavel par validação
    if (elemento && elemento.localName === 'audio') elemento.play(); // se  o localName = audio excultar play()
    else console.log("Elemento invalido"); //se não retorna no console elemento invalido
};

// vetor de buttons teclas
const listaDeTeclas = document.querySelectorAll('.tecla');

// repetição para pegar cada tecla
for (let i = 0; i < listaDeTeclas.length; i++) {
    let tecla = listaDeTeclas[i] // teclar atual em 'i'

    tecla.onclick = () => { // caso click chamara a função
        tocaSom('#som_' + (tecla.classList[1]));  // passando qual som executar atraves da concatenação do id som_ + posição 1 da classList especificada
    };

    tecla.onkeydown = (event) => { // quando pressionado uma tecla
        if (event.code === "Enter" || event.code === "Space") tecla.classList.add('ativa'); // se a tecla Enter ou Space dor clicada adicionar class ao button especifico
    }

    tecla.onkeyup = () => { // quando uma tecla for despresionada
        tecla.classList.remove('ativa'); // remover class ao button especifico
    }
};
