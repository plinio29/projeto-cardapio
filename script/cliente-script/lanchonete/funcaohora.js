
var funcao1 = document.getElementById('funcao');
var funcao2 = document.getElementById('funcao2');

var data = new Date()
var hora = data.getHours()
var dia = data.getDay()


if (hora > 0 && hora < 17 && dia || 0){
    funcao2.style.display = "block";

}else if (hora > 0 && dia == 0){
        funcao2.style.display = "block"; 
}else{
    funcao1.style.display = "block";
    console.log("Hoje é dia", dia);
    console.log("A hora é", hora);
}

//(dia) Domingo é igual a 1