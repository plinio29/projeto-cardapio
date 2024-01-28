
var funcao1 = document.getElementById('funcao');
var funcao2 = document.getElementById('funcao2');

var numero = 2;

if (numero === 2){
    funcao1.style.display = "none";
    funcao2.style.display = "block";
} else if (numero = 1){
    funcao2.style.display = "none";
    funcao1.style.display = "block";
} else {
    console.log("vai curinthia");
}