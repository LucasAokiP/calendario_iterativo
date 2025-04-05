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
            let td = calendar.getElementsByTagName('td')[parseInt(days)+1];
            td.style.backgroundColor = color;
        }else{
            alert("Favor, informar uma data constante no calnedario");
        }
    }

    var elementos = document.querySelectorAll('td');

    //contador de cores utilizadas
    var contadorAzul = 0, contadorVerde = 0, contadorRosa = 0, contadorRoxo = 0;

    //loop para verificar estilo de cada celula e conta quantas tem cores e quais
    for(let i = 0;i < elementos.length;i++){
        //obtem o estilo aplicado do elemnto atual
        var estilo = window.getComputedStyle(elementos[i]);
        //obtem a cor de fundo atual da celula
        var corEstilo = estilo.backgroundColor;
        //verifica a cor e incrementa o contador corrspondente
        if(corEstilo === "rgb(173, 216, 230)" || corEstilo === "lightblue"){
            contadorAzul++;
        }
        else if(corEstilo === "rgb(152, 251, 152)" || corEstilo === "palegreen"){
            contadorVerde++;
        }
        else if(corEstilo === "rgb(255, 182, 193)" || corEstilo === "lightpink"){
            contadorRosa++;
        }
        else if(corEstilo === "rgb(106, 90, 205)" || corEstilo === "slateblue"){
            contadorRoxo++;
        }
    }

}