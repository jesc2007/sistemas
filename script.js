var btnGreet = document.getElementById("btnSaludo");
var txtName = document.getElementById("txtNombre");
var txtGreet = document.getElementById("txtSaludo");

var lista =[
    "hello",
    "Bonjour",
    "hello"

]
function saludar(){
    if (txtName.value == "") {
        alert("Error, ingresa un nombre.")
        txtGreet.innerHTML=""
    }else{
        var nombre = txtName.value
        var numero = Math.floor(Math.random()*lista.length)
        var saludo = lista[numero] + ", " + nombre
        txtGreet.innerHTML = saludo
    }
}