let lista = [];

function crearLista() {
    let numero = document.getElementById("numeroIngresado").value;
    if (numero === "") {
        alert("Por favor, inserte un número.");
    } else {
        numero = parseInt(numero);
        lista.push(numero);
        document.getElementById("numeroIngresado").value = "";

        if (lista.length === 3) {
            calcular();
        }
    }
}

function calcular() {
    if (lista.length !== 3) {
        alert("Debe ingresar exactamente 3 números.");
        return;
    }

    // Ordenamos la lista
    let listaOrdenada = [...lista].sort((a, b) => a - b);

    let menor = listaOrdenada[0];
    let medio = listaOrdenada[1];
    let mayor = listaOrdenada[2];

    console.log("Número menor: " + menor);
    console.log("Número medio: " + medio);
    console.log("Número mayor: " + mayor);

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Los numeros ordenados de mayor a menor son: ${mayor}, ${medio}, ${menor}`;
}

