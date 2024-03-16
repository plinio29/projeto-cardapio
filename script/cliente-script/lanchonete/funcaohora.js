
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
        funcao1.style.display = "block";
        break
    case 1:
        if (hora > 0 && hora < 17){
            funcao1.style.display = "block";
        }else{
            funcao2.style.display = "block";
        }
        break
    case 2:
        if (hora > 0 && hora < 17){
            funcao1.style.display = "block";
        }else{
            funcao2.style.display = "block";
        }
        break
    case 3:
        if (hora > 0 && hora < 17){
            funcao1.style.display = "block";
        }else{
            funcao2.style.display = "block";
        }
        break
    case 4:
        if (hora > 0 && hora < 17){
            funcao1.style.display = "block";
        }else{
            funcao2.style.display = "block";
        }
        break
    case 5:
        if (hora > 0 && hora < 17){
            funcao1.style.display = "block";
        }else{
            funcao2.style.display = "block";
        }
        break
    case 6:
        if (hora > 0 && hora < 17){
            funcao1.style.display = "block";
        }else{
            funcao2.style.display = "block";
        }
        break
    default:
        window.alert("32");
        break
}
//(dia) Domingo é igual a 1