var quantidade = prompt("Introduza a quantidade de números (min: 10, max: 50)");
while(quantidade > 50 || quantidade < 10){
    quantidade = prompt("Introduza a quantidade de números (min: 10, max: 50)");
}

var div = document.getElementById("caixaCalculadora");


for(let i = 0; i< quantidade; i++){
    div.innerHTML+="<div id="+i+">"+i+"</div>";
}
div.innerHTML+="<div id=limpar>C</div>"+" <div id=igual+>=</div>"+"<div id=somar>+</div>"+"<div id=subtrair>-</div>"+"<div id=multiplicar>*</div>"+"<div id=dividir>/</div>";

numeros = div.getElementsByTagName("div");

for (let i = 0; i < numeros.length; i++) {
  numeros[i].addEventListener("click", calculadora);
  numeros[i].addEventListener("mouseover", mudaCor);
  numeros[i].addEventListener("mouseout", mudaCor);
}
function calculadora(numero) {
  let caixaConta = document.getElementById("conta");
  let caixaResultado = document.getElementById("resultado");
 
  if(isNaN(numero.target.innerText)==false){
    caixaConta.innerText+=numero.target.innerText;
  }else if(numero.target.innerText=="C"){
      caixaConta.innerText = "";
      caixaResultado.innerText = "";
      return;
  }else if(numero.target.innerText=="="){
        let resultado = eval(caixaConta.innerText);
      if ((caixaConta.innerText == "") || (isFinite(resultado))==false) {
        caixaResultado.innerText = "expressão inválida";
        return;
      } else {
        caixaResultado.innerText = resultado;
        return;
      }
    }else if(numero.target.innerText=="+"){
      caixaConta.innerText += "+";
      return;
    }else if(numero.target.innerText=="-"){
      caixaConta.innerText += "-";
      return;
    }else if(numero.target.innerText=="*"){
      caixaConta.innerText += "*";
      return;
    }else if(numero.target.innerText=="/"){
      caixaConta.innerText += "/";
      return;
    }
  }
function mudaCor(numero){
    if(numero.type === "mouseout"){
        numero.target.style.backgroundColor = "green";
        return;
    }
    if(numero.type === "mouseover"){
        numero.target.style.backgroundColor = "grey";
    }
}
