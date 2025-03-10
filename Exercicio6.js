/* 
**6) Abaixo há duas afirmações sobre herança em JavaScript. Indique a alternativa correta e justifique sua resposta**

I. A herança é utilizada para compartilhar métodos e propriedades entre classes em JavaScript, 
permitindo que uma classe herde os métodos de outra sem a necessidade de repetir código. 

II. Em JavaScript, a herança é implementada através da palavra-chave `extends`.


a) As duas afirmações são verdadeiras, e a segunda justifica a primeira.

b) As duas afirmações são verdadeiras, mas a segunda não justifica a primeira.

c) A primeira afirmação é verdadeira, e a segunda é falsa.

d) A primeira afirmação é falsa, e a segunda é verdadeira.

A Resposta correta é a alternativa "b", pelo fato de que elas estão corretas, como exemplifica o codigo a baixo,
porem a afirmativa 1 não é justificada pela afirmativa 2, devido que uma apresenta um conceito sobre herança
e a outra apenas apresenta uma feature tecnica no Java Script.

*/

// Exemplo
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(this.nome + " emite um barulho.");
  }
}

class Cachorro extends Animal {

}

let cachorro = new Cachorro("Mat");
cachorro.falar();
