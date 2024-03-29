var tamanho = document.getElementById("tamanho");
var gridGalo = document.getElementById("gridGalo");

var footer = document.getElementById("footer");
footer.style.display = "none";

var textoJogador = document.getElementById("mostrarJogador");
var jogadorX = true;
var jogadorO = false;
var textoTamanho = document.getElementById("textoTamanho");

var timer;

function dimensaoTabela() {
  if(tamanho.innerText  > 2 & tamanho.innerText< 23){
    gridGalo.innerHTML = "";
    gridGalo.setAttribute(
      "style",
      "grid-template-columns: repeat(" + tamanho.innerText + ", auto)"
    );
    for (i = 0; i < tamanho.innerText * tamanho.innerText; i++) {
      gridGalo.innerHTML += "<div class=botoes></div>";
    }
    var botoes = gridGalo.getElementsByClassName("botoes");
    for (i = 0; i < botoes.length; i++) {
      botoes[i].addEventListener("click", jogar);
    }
    clearInterval(timer);
    timer = setInterval(frame, 100);
  }
}

tamanho.addEventListener("input", dimensaoTabela);
gridGalo.addEventListener("click", vencedor);

var barra = document.getElementById("barra");
var width = 100;
var interval;
function jogar(botao) {
  resetProgressBar();
  if (jogadorO === true) {
    textoJogador.innerText = "Jogador: X";
    botao.target.style.backgroundImage = "url('./Imagens/bola.jpg')";
    botao.target.style.backgroundSize = "cover";
    botao.target.classList.add("bola");
    botao.target.style.pointerEvents = "none";
    jogadorO = false;
  } else {
    //barra.style.width = barra.offsetWidth - 8.5;
    textoJogador.innerText = "Jogador: O";
    botao.target.style.backgroundImage = "url('./Imagens/cruz.jpg')";
    botao.target.style.backgroundSize = "cover";
    botao.target.classList.add("cruz");
    botao.target.style.pointerEvents = "none";
    jogadorO = true;
  }
}
function frame() {
  if (width >= 0) {
    width--;
    barra.style.width = width + "%";
  } else {
    if (textoJogador.innerText == "Jogador: O") {
      textoJogador.innerText = "Jogador: X";
      jogadorO = false;
      jogadorX = true;
    } else {
      textoJogador.innerText = "Jogador: O";
      jogadorO = true;
      jogadorX = false;
    }
    resetProgressBar();
  }
}
function resetProgressBar() {
  width = 100;
  barra.style.width = width + "%";
}
function vencedor() {
  let contaBolas = 0;
  let contaCruz = 0;
  let botoes = gridGalo.getElementsByClassName("botoes");


  //VER EMPATE
  let contEmpate = 0;
  for(let i =0;i< tamanho.innerText*tamanho.innerText;i++){
    if(botoes[i].className=="botoes cruz" || botoes[i].className == "botoes bola"){
      contEmpate++;
    }
  }
  if(contEmpate == tamanho.innerText*tamanho.innerText){
        footer.style.display = "block";
        footer.innerText = "Empate";
        footer.scrollIntoView();
        clearInterval(timer);
        setTimeout("location.reload(true);", 2000);
  }


  //Verificação linhas
  /*for (let i = 0; i < tamanho.innerText * tamanho.innerText; i++) {
    if (botoes[i].className == "botoes bola") {
      contaBolas++;
    } else {
      contaBolas = 0;
    }
    
    if (contaLinhas == i) {
      contaBolas = 0;
      contaLinhas+=parseFloat(tamanho.innerText);
      console.log(contaLinhas);
    }
    if (contaBolas == 3) {
      footer.style.display = "block";
      footer.innerText = "O jogador 0 ganhou!";
      footer.scrollIntoView();
      clearInterval(timer);
      setTimeout("location.reload(true);", 2000);
    }
  }*/
  for(let i=0;i<tamanho.innerText*tamanho.innerText;i=i+parseInt(tamanho.innerText)){
    contaBolas = 0;
    for(j = i;j<i+parseInt(tamanho.innerText);j++){ 
      if (botoes[j].className == "botoes bola") {
        contaBolas++;
      } else {
        contaBolas = 0;
      }
      if (contaBolas == 3) {
        footer.style.display = "block";
        footer.innerText = "O jogador 0 ganhou!";
        footer.scrollIntoView();
        clearInterval(timer);
        setTimeout("location.reload(true);", 5000);
    }
    }
  }
  
  for(let i=0;i<tamanho.innerText*tamanho.innerText;i=i+parseInt(tamanho.innerText)){
    contaCruz = 0;
    for(j = i;j<i+parseInt(tamanho.innerText);j++){ 
      if (botoes[j].className == "botoes cruz") {
        contaCruz++;
      } else {
        contaCruz = 0;
      }
      if (contaCruz == 3) {
        footer.style.display = "block";
        footer.innerText = "O jogador X ganhou!";
        footer.scrollIntoView();
        clearInterval(timer);
        setTimeout("location.reload(true);", 5000);
    }
    }
  }

  let tamanhoInt = 0;
  tamanhoInt = parseFloat(tamanho.innerText);

  //Verificação colunas
  for (let i = 0; i < tamanho.innerText; i++) {
    contaBolas = 0;
    for (
      let j = i;
      j < tamanho.innerText * tamanho.innerText;
      j += tamanhoInt
    ) {
      if (botoes[j].className == "botoes bola") {
        contaBolas++;
      } else {
        contaBolas = 0;
      }
      if (contaBolas == 3) {
        footer.style.display = "block";
        footer.innerText = "O jogador 0 ganhou!";
        footer.scrollIntoView();
        clearInterval(timer);
        setTimeout("location.reload(true);", 5000);
      }
    }
  }
  for (let i = 0; i < tamanho.innerText; i++) {
    contaCruz = 0;
    for (
      let j = i;
      j < tamanho.innerText * tamanho.innerText;
      j += tamanhoInt
    ) {
      if (botoes[j].className == "botoes cruz") {
        contaCruz++;
      } else {
        contaCruz = 0;
      }
      if (contaCruz == 3) {
        footer.style.display = "block";
        footer.innerText = "O jogador X ganhou!";
        footer.scrollIntoView();
        clearInterval(timer);
        setTimeout("location.reload(true);", 5000);
      }
    }
  }

  //Verificação diagonais
  for (let i = 0; i < tamanho.innerText * tamanho.innerText; i++) {
    contaBolas = 0;
    for (
      let j = i;
      j < tamanho.innerText * tamanho.innerText;
      j += tamanhoInt + 1
    ) {
      let botao = botoes[j];
      if (botoes[j].className == "botoes bola") {
        contaBolas++;
      } else {
        contaBolas = 0;
      }
      if(botoes[j-2] === botao){
        contaBolas = 0;
      }
      if (contaBolas == 3) {
        footer.style.display = "block";
        footer.innerText = "O jogador 0 ganhou!";
        footer.scrollIntoView();
        clearInterval(timer);
        setTimeout("location.reload(true);", 5000);
      }
    }
  }
  for (let i = 0; i < tamanho.innerText * tamanho.innerText; i++) {
    contaCruz = 0;
    for (
      let j = i;
      j < tamanho.innerText * tamanho.innerText;
      j += tamanhoInt + 1
    ) {
      let botao = botoes[j];
      if (botoes[j].className == "botoes cruz") {
        contaCruz++;
      } else {
        contaCruz = 0;
      }
      if(botoes[j-2] ===  botao){
        contaCurz = 0;
      }
      if (contaCruz == 3) {
        footer.style.display = "block";
        footer.innerText = "O jogador X ganhou!";
        footer.scrollIntoView();
        clearInterval(timer);
        setTimeout("location.reload(true);", 5000);
      }
    }
  }
  for (let i = tamanhoInt-1; i > 0; i--) {
    contaBolas = 0;
    for (
      let j = i;
      j < tamanhoInt*tamanhoInt;
      j += tamanhoInt -1
    ) {
      if (botoes[j].className == "botoes bola") {
        contaBolas++;
      } else {
        contaBolas = 0;
      }
      if((botoes[5].className=="botoes bola") && (botoes[3].className=="botoes bola")){
        contaBolas = 0;
      }
      if (contaBolas == 3) {
        footer.style.display = "block";
        footer.innerText = "O jogador O ganhou!";
        footer.scrollIntoView();
        clearInterval(timer);
        setTimeout("location.reload(true);", 5000);
      }
    }
  }
  for (let i = tamanhoInt; i > 0; i--) {
    contaCruz = 0;
    for (
      let j = i;
      j < tamanho.innerText * tamanho.innerText;
      j += tamanhoInt - 1
    ) {
      if (botoes[j].className == "botoes cruz") {
        contaCruz++;
      } else {
        contaCruz = 0;
      }
      if((botoes[5].className=="botoes cruz") && (botoes[3].className=="botoes cruz")){
        contaCruz = 0;
      }
      if (contaCruz == 3) {
        footer.style.display = "block";
        footer.innerText = "O jogador X ganhou!";
        footer.scrollIntoView();
        clearInterval(timer);
        setTimeout("location.reload(true);", 2000);
      }
    }
  }
  
}
