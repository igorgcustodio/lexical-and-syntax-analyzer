# Lexical and Syntax Analyzer in Node

Compilador simples com funções de análise léxica e sintática para a matéria de Compiladores.

## Autores

 * Emanuel Galvão <1510191>
 * Igor Custodio <1613329>
 * Kauê Rodrigues <1603430>
 * Roberto Bernatzki <1613301>

## Get started

- Node version: 12.16.1

```shell
$ node compiler.js '<expression1>' '<expression2>' '<expressionN>'
```

### Exemplos

```json5
[
  {
    expression: '1+a',
    isValid: false,
    errors: [ 'A expressão contém tokens inválidos' ]
  },
  {
    expression: '76/12',
    isValid: true,
    errors: []
  },
  {
    expression: '1+-2',
    isValid: false,
    errors: [ 'Não pode ter mais de um símbolo junto' ]
  },
  { 
    expression: '1+2', 
    isValid: true, 
    errors: [] 
  }
]
```
