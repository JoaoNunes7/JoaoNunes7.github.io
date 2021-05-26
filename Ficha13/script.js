var container = document.getElementById("container");
var btnGravar = document.getElementById("btnGravar");
var btnGravarEditar = document.getElementById("btnGravarEditar");
var btnEliminar = document.getElementById("btnEliminar");
const txtNome = document.getElementById("txtNome");
const txtUser = document.getElementById("txtUser");
const txtPass = document.getElementById("txtPassword");
const txtIdade = document.getElementById("txtIdade");
const opcoesCat = document.getElementById("select");



btnGravarEditar.style.display = "none";
btnEliminar.style.display = "none";
btnGravar.addEventListener("click", gravar);

btnGravarEditar.addEventListener("click", editarGravar);
btnEliminar.addEventListener("click", eliminar)

$(document).ready(function() {
    $.ajax({
    url: './php/lista.php',
    type: 'POST', 
    dataType: 'json',
    success: function(response){
        console.log(response);
        response.utilizadores.forEach(function(utilizador){
            container.innerHTML += "<div class=utilizadores onclick=editar(this)>"+ utilizador.utilizador + " | " + utilizador.nome + " | " + utilizador.idade + " | " + utilizador.nomeCat +  "</div><br>";

        })
    },
    error: function(xhr, status, error){
        console.log("Erro");
    }

    });
});

function gravar(){
var data = {
    user: txtUser.value,
    nome: txtNome.value,
    pass: txtPass.value,
    idade: txtIdade.value,
    categoria: opcoesCat.value
}
console.log(opcoesCat.value);
$.ajax({
    type: 'POST',
    url: './php/insere.php',
    data: {json: JSON.stringify(data)},
    dataType: 'json'
})

}

function editar(element){
btnGravar.style.display = "none";
btnGravarEditar.style.display = "inline";
btnEliminar.style.display = "inline";
element.style.backgroundColor = "lightgreen";
let text = element.innerText;
let [user, nome, idade, categoriaU] = text.split('|');
txtUser.value = user;
txtNome.value = nome;
txtIdade.value = idade.trim("");
for(let i = 0; i<opcoesCat.options.length; i++){
    if(opcoesCat.options[i].text.trim("") === categoriaU.trim("")){
       opcoesCat.options[i].selected = 'selected' ;       
    }
}
txtPass.value = "123";
}

function editarGravar(){
var data = {
    user: txtUser.value.trim(""),
    nome: txtNome.value,
    pass: txtPass.value,
    idade: txtIdade.value,
    categoria: opcoesCat.value
}
$.ajax({
    type: 'POST',
    url: './php/edita.php',
    data: {json: JSON.stringify(data)},
    dataType: 'json'
})
btnGravarEditar.style.display = "none";
btnEliminar.style.display = "none"
btnGravar.style.display = "block";

}

function eliminar(){
var data = {
        user: txtUser.value.trim("")
    }
    $.ajax({
        type: 'POST',
        url: './php/elimina.php',
        data: {json: JSON.stringify(data)},
        dataType: 'json'
    })
    btnGravarEditar.style.display = "none";
    btnEliminar.style.display = "none";
    btnGravar.style.display = "block";
}