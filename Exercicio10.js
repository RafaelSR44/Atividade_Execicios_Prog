/* 
10) Crie um exemplo prático no qual você tenha duas classes:

- Uma classe `Produto` com atributos `nome` e `preco`, e um método `calcularDesconto()` 
que aplica um desconto fixo de 10% no preço do produto.

- Uma classe `Livro` que herda de `Produto` e modifica o método `calcularDesconto()`,
aplicando um desconto de 20% no preço dos livros.

Explique como funciona a herança nesse contexto e como você implementaria a modificação do método na classe `Livro`.

Resposta:
A Herança nesse contexto se dá apartir da palavara "extends" de uma classe pra outra,
o método de sobreposição de funções resolveria essa questão do desconto especial para livros.
*/

// Exercicio na pratica

class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  calcularDesconto() {
    let precoDesconto = this.preco*0.9;
    return precoDesconto;
  }
}

class Livro extends Produto {
  calcularDesconto() {
    let precoDesconto = this.preco*0.8;
    return precoDesconto;
  }
}

let livro = new Livro("A Mão Esquerda de Deus", 100);
console.log(livro.calcularDesconto());
console.log(livro.preco);

