/* 
**2) O seguinte código JavaScript tem um erro que impede sua execução correta.
 Analise e indique a opção que melhor corrige o problema.
  Justifique sua resposta.**

```javascript
function soma(a, b) {
    if (a || b === 0) {
        return "Erro: número inválido";
    }
    return a + b;
}
console.log(soma(2, 0));
```

a) Substituir if (a || b === 0) por if (a === 0 || b === 0)

b) Substituir if (a || b === 0) por if (a === 0 && b === 0)

c) Substituir if (a || b === 0) por if (a && b === 0)

d) Remover completamente a verificação if (a || b === 0)

Resposta desta questão está ambigua por falta de definição de escopo, a resposta pode ser tanto
a substituição por "if (a === 0 || b === 0)" seguindo a lógica aplicada na função soma. Porém se o 
objetivo da função for apenas somar numeros, seria apenas remover completamente a verificação 
"if (a || b === 0)". No entanto, seguindo uma lógica onde a soma de dois zeros é invalida o melhor
seria "if (a === 0 && b === 0)". Devido a isso a ambiguidade que a questão abre algumas respostas
podem ser consideradas corretas.

*/ 

function soma(a, b) {
  if (a || b === 0) {
      return "Erro: número inválido";
  }
  return a + b;
}
console.log(soma(2, 0));