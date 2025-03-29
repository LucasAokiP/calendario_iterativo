// codigo para tornar o calendario interativo
// utilizando funçao declarativa
function colorirDia(){
    //bloco de variaveis    (escopo de funçao)
    let days = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendario');

    //bloco de balidaçao de informaçao
    if(!days){
        alert("Favor, informar um dia existente no calendario");
    }
    else{
        if((days > 0) && (days <31)){
            let td = calendar.getElementsByTagName('td');
            td.style.backgroundColor = color;
        }else{
            alert("Favor, informar uma data constante no calnedario");
        }
    }
}