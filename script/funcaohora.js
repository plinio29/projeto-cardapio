
var funcao1 = document.getElementById('funcao');
var funcao2 = document.getElementById('funcao2');

var data = new Date()
var hora = data.getHours()
var dia = data.getDay()


if (hora > 1 && hora < 17 ){
    funcao2.style.display = "block";
}else if (hora > 16 && hora < 26 ){
    funcao1.style.display = "block";  
} else if (dia == 1 && hora > 1){
    funcao2.style.display = "block";
} else {
    console.log("Hoje é dia", dia);
    console.log("A hora é", hora);
}

//(dia) Domingo é igual a 1