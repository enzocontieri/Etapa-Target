//2) Logica aplicada para a segunda pergunta

function fibonacci(numero) {
    var anterior = 0;
    var atual = 1;
    var proximo = 1;

    for (let i = 0; proximo <= numero; i++) { //Cria a sequencia de numeros fibonacci somando os valores e retornando na variavel "proximo"
        console.log(proximo);
        if (proximo === numero) {//verifica se no numero esta na sequencia e para logo depois que valida
            console.log(`${numero} pertence à sequência de Fibonacci.`);
            return;
        }
        anterior = atual + proximo;
        atual = proximo;
        proximo = anterior;
    }

    console.log(`${numero} não pertence à sequência de Fibonacci.`);//se o numero nao estiver na sequencia imprime uma mensagem informando nao estar
}

fibonacci(21); // passo o valor como parametro e verifica se tem na sequencia 
