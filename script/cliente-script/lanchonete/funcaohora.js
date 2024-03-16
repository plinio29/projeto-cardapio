
var funcao1 = document.getElementById('funcao');
var funcao2 = document.getElementById('funcao2');

var data = new Date()
var hora = data.getHours()
var dia = data.getDay()

//Fechado
//funcao2.style.display = "block";

//Aberto
//funcao1.style.display = "block"; 


switch(dia){
    case 0:
        document.alert("oi");
        break
    case 6:
        funcao1.style.display = "block";
        document.alert("oi6");
        break
    default:
        window.alert("32");
        break
}
//(dia) Domingo é igual a 1