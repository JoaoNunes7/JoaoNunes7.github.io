var caixaBotoes = document.getElementById("caixaBotoes");
var botoes = caixaBotoes.getElementsByTagName("div");



var palavras = ["AJAX", "CSS", "DOM", "HTML", "JAVASCRIPT", "JQUERY", "PHP", "PROGRAMACAO", "TECNOLOGIAS", "WEB"];

let random = Math.floor(Math.random()*10);

var palavra = palavras[random];
var linhaLetras = document.getElementById("linhasLetras");

var cont = 0;

console.log(palavra);
for(i = 0; i<palavra.length;i++){
  linhaLetras.innerHTML +="<div class=letrasAdivinhadas name="+palavra[i]+" ></div>"
}
/*var divs = linhaLetras.getElementsByTagName('div');
for(let i = 0; i<divs.length;i++){
  divs.target.classList.add(palavra[i]);
}*/


for (let i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", escolhido);
  botoes[i].addEventListener("mouseover", mudaCor);
  botoes[i].addEventListener("mouseout", mudaCor);
}

function mudaCor(botao) {
  if (botao.type === "mouseout") {
    botao.target.style.backgroundColor = "white";
    return;
  }
  if (botao.type === "mouseover") {
    //botao.target.style.backgroundColor = "#FF6663";
    botao.target.style.backgroundColor = "#FFB7C3";
  }
}
var tentativas = 7;
function escolhido(botao){
  var divsLetras = linhaLetras.getElementsByClassName("letrasAdivinhadas");
   while(tentativas>0){
     if(palavra.includes(botao.target.innerText)){
        let divLetra = document.getElementsByName(botao.target.innerText);
        botao.target.style.color = "green"
        botao.target.style.pointerEvents = "none";
        for(let i = 0; i<=divLetra.length; i++){
          divLetra[i].innerText = botao.target.innerText;
          divLetra[i].style.color = "red";
          cont++;
          console.log(cont);
          if(cont == palavra.length){
            break;
        } 
        }
      }else{
        tentativas--;
        botao.target.style.backgroundImage = "url('./imagens/incorrect.gif')";
        botao.target.style.backgroundSize = "cover";
        let divDesenho = document.getElementById("desenho");
        if(tentativas == 6){
          divDesenho.innerHTML += "<img src='./imagens/wrong-1.gif' class='errado1'/>";
        }else if(tentativas == 5){
          document.getElementsByClassName("errado1")[0].remove();
          divDesenho.innerHTML += "<img src='./imagens/wrong-2.gif' class='errado2'/>";
        }else if(tentativas == 4){
          document.getElementsByClassName("errado2")[0].remove();
          divDesenho.innerHTML += "<img src='./imagens/wrong-3.gif' class='errado3'/>";
        }else if(tentativas == 3){
          document.getElementsByClassName("errado3")[0].remove();
          divDesenho.innerHTML += "<img src='./imagens/wrong-4.gif' class='errado4'/>";
        }else if(tentativas == 2){
          document.getElementsByClassName("errado4")[0].remove();
          divDesenho.innerHTML += "<img src='./imagens/wrong-5.gif' class='errado5'/>";
        }else if(tentativas == 1){
          document.getElementsByClassName("errado5")[0].remove();
          divDesenho.innerHTML += "<img src='./imagens/wrong-6.gif' class='errado6'/>";
        }else if(tentativas == 0){
          document.getElementsByClassName("errado6")[0].remove();
          divDesenho.innerHTML += "<img src='./imagens/wrong-7.gif' class='errado7'/>";
          setTimeout(function(){location.reload(1);}, 1000);
        }
        return;
      }
      setTimeout(function(){alert('Parabéns')}, 500);
      setTimeout(function(){location.reload(1)}, 1000);
    }
  }
  /*var divsLetras = linhaLetras.getElementsByClassName("letrasAdivinhadas");
  let palavraAdivinhada;
  for(i = 0; i<divsLetras.length;i++){
   palavraAdivinhada += divsLetras[i].innerText;
  }
  console.log(palavraAdivinhada);*/