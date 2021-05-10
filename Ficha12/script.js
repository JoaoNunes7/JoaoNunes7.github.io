var select = document.getElementById("selectOpcoes");
var btnConfirmar = document.getElementById("btnConfirmar");
btnConfirmar.addEventListener("click", resultado);

var tabelaConstante = document.getElementById("registosConstantes");
var tabelaAno = document.getElementById("registosAno");

function resultado(){
    var opcao = select.value;
    if(opcao == "RegistosConstantes"){
        tabelaConstante.style.display = "block";
        tabelaAno.style.display = "none";
    }else if(opcao == "UtilizacoesAno"){
        tabelaAno.style.display = "block";
        tabelaConstante.style.display = "none";
    }
    fetch('Autenticacoes-Evolucao-por-Certificado.json')
    .then(response => response.json())
    .then(data => console.log(data));

}   