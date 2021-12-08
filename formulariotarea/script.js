function mostrarmensaje(event){
    event.preventDefault();
    var mensaje1=document.getElementById("nombre1").value;
    var mensaje2=document.getElementById("apellidos1").value;

    var resultado = mensaje1 + mensaje2
document.querySelector("#mensaje1").textContent = mensaje1;
document.querySelector("#mensaje").textContent = mensaje2;


}
var formulario = document.getElementById("formulario");
formulario.addEventListener("submit" , mostrarmensaje);




