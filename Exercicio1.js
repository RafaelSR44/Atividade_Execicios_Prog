/* 
**1) Considerando a execução do código abaixo, indique a alternativa correta e justifique sua resposta.**
```javascript
console.log(x);
var x = 5;
console.log(y);
let y = 10;
```
a) A saída será undefined seguido de erro 

b) A saída será 5 seguido de 10

c) A saída será undefined seguido de undefined

d) A saída será erro em ambas as linhas que utilizam console.log

A resposta é "a", pois a declaração de x é uma var (variavel global),
tendo isso em consideração, quando chamado pelo "console.log(x)"
um valor ainda não foi atribuido, por isso o valor é "undefined".
Já pelo o outro lado, o y é uma variavel local, devido a isso ela
existe apenas após a sua declaração, dando assim um erro no código.

Uma possivel correção seria declarar primeiro as variaveis e depois
chamar a função "console.log()".
*/ 

console.log(x);
var x = 5;
console.log(y);
let y = 10;