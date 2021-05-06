
var button = document.getElementById("botao");
var imagem = document.getElementById("imagem");





button.addEventListener("click", mostrarImagem);
function mostrarImagem(){
    var data = document.getElementById("data").value;
    var d = new Date(data);
    console.log(d.getDate());
    var url = 'https://api.nasa.gov/planetary/apod';
    console.log("teste");
    fetch(`https://api.nasa.gov/planetary/apod?date=${data}&api_key=DEMO_KEY`)
    .then(res => res.json())
    .then (response => {
        document.getElementById("titulo").innerText = response.title;
        if(response.media_type == "image"){
            console.log(response.hdurl);
            imagem.src = response.hdurl;
        }
    })
  }
