/* 
9) O seguinte código deve retornar a soma do dobro dos números de um array, mas contém erros. Identifique os problema e corrija o código para que funcione corretamente. Adicione comentários ao código explicado sua solução para cada problema.

```javascript
function somaArray(numeros) {

    for (i = 0; i < numeros.size; i++) {
        soma = 2*numeros[i];
    }
    return soma;
}
console.log(somaArray([1, 2, 3, 4]));
```
*/

// Exercicio corrigido

function somaArray(numeros) {
  var soma = 0; // a variavel "soma" foi declarada
  
  for (i = 0; i < numeros.length; i++) { // foi mudado de "size" para "length"
      soma += 2*numeros[i]; // foi adicionado "+" para somar todos os valores do Array e não igualar aos valores do Array
  }

  return soma;
}

console.log(somaArray([1, 2, 3, 4]));

