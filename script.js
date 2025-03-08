
let lista = [];
let lista2 = [];

function crearLista (){

    let numero = document.getElementById("numeroIngresado").value;
    if (numero == "")
    { alert("Por favor, inserte un numero.")}
    else{
        numero = parseInt(numero);
        let numero2 = numero;
        lista.push(numero);
        lista2.push(numero);
    }}

function calcular (){
    //duplic
    lista=lista.concat(lista2);
    let mayor;
    let medio;
    let menor;
    for (let i =0; i <= lista.length-1 ; i++){
        if (lista[i]>lista[i+1]){
            if(lista[i]>lista[i+2]){
                mayor = lista[i];
            }
            else { medio = lista[i];}
        }
        else{
            if(lista[i]> lista[i+2]){
                medio = lista[i];
            }
            else {
                menor = lista[i];
            }
        
        }

    }
}