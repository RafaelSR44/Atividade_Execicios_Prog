/* 
**5) Qual será o conteúdo do array lista após a execução do código? Indique a alternativa correta e justifique sua resposta.**

```javascript
let lista = ["banana", "maçã", "uva", "laranja"];
lista.splice(1, 2, "abacaxi", "manga");
console.log(lista);
```

a) ["banana", "maçã", "uva", "abacaxi", "manga", "laranja"]

b) ["banana", "abacaxi", "manga"]

c) ["banana", "abacaxi", "manga", "laranja"] X

d) ["banana", "maçã", "uva", "abacaxi", "manga"]

A resposta é a atlternativa "C", a funcão splice começa a cortar a lista na posição 1
e para na posição 2 e colocas os elementos seguintes no lugar dos elementos cortados.

*/ 

let lista = ["banana", "maçã", "uva", "laranja"];
lista.splice(1, 2, "abacaxi", "manga");
console.log(lista);