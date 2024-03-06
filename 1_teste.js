
//1) Logica aplicada para a primeira pergunta
const INDICE = 13;
let SOMA = 0;
let K = 0;
//condicao que verifica se K é menor que INDICE
 if(K < INDICE ) {
    K = K + 1;
    SOMA = SOMA + K;
    } else {
     console.log("Soma não realizada");
}
console.log(SOMA)
//Valor da soma sera 1

//2)


const number = 21 
const arrayFibonacci = [];

function fibonacci (numero) {
   var anterior = 0 
   var atual = 1
   var proximo = 1
   

    for (let i = 0; i < numero; i++) {
        console.log(proximo);
        anterior = atual + proximo 
        atual = proximo 
        proximo = anterior
    }

}
