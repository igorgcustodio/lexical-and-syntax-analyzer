# Compiler in Node

Compilador simples com funções de análise léxica e sintática para a matéria de Compiladores.

## Autores

 * Emanuel Galvão <1510191>
 * Igor Custodio <1613329>
 * Kauê Rodrigues <1603430>
 * Roberto Bernatzki <1613301>

## Get started

```shell
$ node compiler.js '<expression>'
```

### Exemplos

Expressão: **1+2**
```shell
$ node compiler.js '1+2'
```

Saída: `true`

Expressão: **(1+2))**
```shell
$ node compiler.js '(1+2))'
```

Saída: `false`

Expressão: **(1/2)**
```shell
$ node compiler.js '(1/2)'
```

Saída: `true`

