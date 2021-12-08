//create a Hello word
console.log("hello word");
  
function mostrarmensajes() {
    var mensajes =document.getElementById("nombre").value;
    document.querySelector("h1").textContent = mensajes;
}

var casa1 =document.querySelector("#casa1");
casa1.addEventListener("input", mostrarmensajes);

function EnviarTexto() {
    var mensajes =document.getElementById("apellido").value;
    document.querySelector("h2").textContent = EnviarTexto;
}

var auto1 =document.querySelector("#auto1");
auto1.addEventListener("input", EnviarTexto);