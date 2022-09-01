// vetort botoes
const listaDeTeclas = document.querySelectorAll('input[type=button]');
// variavel capo telefone
const inputTel = document.querySelector('input[type=tel]');

//repetição para pegar cada tecla
for (i = 0; i < listaDeTeclas.length; i++) {
  let tecla = listaDeTeclas[i]; //variavel tecla especifica
  tecla.onclick = () => { // com o click passa par um arrow fucntion que soma os valores na exibição
    inputTel.value += tecla.value;
  };


  tecla.onkeydown = (event) => { // quando pressionado uma tecla
    if (event.code ==="Enter" || event.code === "Space") tecla.classList.add('ativa'); // se a tecla Enter ou Space dor clicada adicionar class ao button especifico
  }

  tecla.onkeyup = () => { // quando uma tecla for despresionada
    tecla.classList.remove('ativa'); // remover class ao button especifico
  }
};

