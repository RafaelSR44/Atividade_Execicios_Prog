/* 
**4) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
let numeros = [1, 2, 3, 4, 5];

let resultado = numeros.map(x => x * 2).filter(x => x > 5).reduce((a, b) => a + b, 0);

console.log(resultado);
```
a) 0

b) 6

c) 18

d) 24

A Resposta é 24, primeramente o os valores pela função "map", multiplica por 2 todos os valores do vetor.
Depois disso, a função "filter" filtra os valores que após a multiplicação que forem menores que 5.
Tirando os elementos apartir do "filter" os elementos são somados pela a função "reduce", 
somando todos os valores para uma única variavel.
Depois disso, o valor é atribuido para a vaiavel resultado e impresso pelo 'console.log'.
*/ 

let numeros = [1, 2, 3, 4, 5];

let resultado = numeros.map(x => x * 2).filter(x => x > 5).reduce((a, b) => a + b, 0);

console.log(resultado);