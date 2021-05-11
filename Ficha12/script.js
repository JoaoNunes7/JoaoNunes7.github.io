var select = document.getElementById("selectOpcoes");
var btnConfirmar = document.getElementById("btnConfirmar");
btnConfirmar.addEventListener("click", resultado);

var tabelaConstante = document.getElementById("registosConstantes");
var tabelaAno = document.getElementById("registosAno");

function resultado(){
    var opcao = select.value;
    if(opcao == "RegistosConstantes"){
        //var mes = prompt("Introduza um mês");
        tabelaConstante.style.display = "block";
        tabelaAno.style.display = "none";
        fetch('Autenticacoes-Evolucao-por-Certificado.json')
        .then(response => response.json())
        .then(function(data){
            data.forEach(function(autenticacoes){
                    tabelaConstante.innerHTML += `<tr><td>${autenticacoes['Ano']}</td>
                    <td>${autenticacoes['Mes']}</td><td>${autenticacoes['Chave-Movel-Digital']}</td>
                    <td>${autenticacoes['Cartao-Cidadao']}</td>
                    <td>${autenticacoes['Advogado']}</td>
                    <td>${autenticacoes['Solicitador']}</td></tr>`
            })
        })
    }else if(opcao == "UtilizacoesAno"){
        var ano = parseInt(prompt("Introduza um ano"));
        console.log(ano);
        tabelaAno.style.display = "block";
        tabelaConstante.style.display = "none";
        fetch('Autenticacoes-Evolucao-por-Certificado.json')
        .then(response => response.json())
        .then(function(data){
            data.forEach(function(autenticacoes){
                if(autenticacoes.Ano == ano){
                    tabelaAno.innerHTML += `<tr><td>${autenticacoes['Ano']}</td>
                    <td>${autenticacoes['Mes']}</td><td>${autenticacoes['Chave-Movel-Digital']}</td>
                    <td>${autenticacoes['Cartao-Cidadao']}</td>
                    <td>${autenticacoes['Advogado']}</td>
                    <td>${autenticacoes['Solicitador']}</td></tr>`
                }
            })
        })
    }

}   