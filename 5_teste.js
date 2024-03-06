//5) Logica aplicada para a quinta pergunta 

function inverterCaracteres(str) {  //A funcao parte inicial do laço for é último caractere da string
    var string = "";
    for (var i = str.length - 1; i >= 0; i--) { //Enquanto i for maior ou igual a 0, o laço continuará e decrementa i apos cada iteração 
        string += str[i];
    }
    console.log(string);
    return string;
}
inverterCaracteres('Target')

