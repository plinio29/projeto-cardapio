
var funcao1 = document.getElementById('funcao');
var funcao2 = document.getElementById('funcao2');

var data = new Date()
var hora = data.getHours()


if (hora > 1 && hora < 17){
    funcao2.style.display = "block";
} else if (hora > 17 && hora < 25){
    funcao1.style.display = "block";
} else {
    console.log("Erro!");
}