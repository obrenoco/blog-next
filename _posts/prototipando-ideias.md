---
useFolks: true
subjects: ["frontend","web","URL"]
title: "Decifrando o Git Rebase"
language: "pt-br"
translations: ["pt-br"]
date: "2021-05-03T00:46:56-03:00"
description: "Afinal, o que é um rebase ?"
---

### Rebase ? Nunca vi…

Se você é dev, é bem possível que já tenha precisado resolver conflitos entre branches.

Quando usamos o Git, existem duas maneiras bem comuns de integrar as alterações de uma branch em outra: o `merge` e o `rebase`.

O Github já possui uma maneira de fazer Squash e Rebase através da própria plataforma para os casos em que não há nenhum conflito entre as branches:

![https://cdn-images-1.medium.com/max/800/1*4zXrr2WsdpfOJtkQiMa4EQ.png](https://cdn-images-1.medium.com/max/800/1*4zXrr2WsdpfOJtkQiMa4EQ.png)

Mas é muito comum haver conflitos, precisando fazer as correções de maneira manual. Neste artigo, vamos aprender o que é o `rebase`, como fazer e em que casos você deve ou não usá-lo.


### **TL;DR**

O Git Rebase move o ponto inicial da nova branch para o ponto mais atual da branch de referência.

O Git Squash condensa N-commits em alguns poucos commits (ou mesmo 1 único commit).


```` javascript
// Atualizando a branch de referência para o estado mais atual
git checkout main
git pull origin main
git checkout minha-feature
````

```` javascript
// Squash
git rebase -i HEAD~N (N = número de commits da feature)
git add .
git rebase --continue
git push origin minha-feature --force
````

```` javascript
// Rebase
git rebase main
git add .
git rebase --continue
git push origin minha-feature --force
````

``` javascript
// Para abortar o rebase
git rebase --abort
```

### Qual o contexto ?

Imagina a seguinte situação:

Você acaba de entrar em um projeto onde vários devs trabalham ativamente nele, e as mudanças são **diárias.**

Você, dev iniciante, abre uma branch, e começa à desenvolver sua feature.

![https://cdn-images-1.medium.com/max/800/1*xyGsLcxCvOY1_hyOjw6gVg.png](https://cdn-images-1.medium.com/max/800/1*xyGsLcxCvOY1_hyOjw6gVg.png)

Passam-se as horas e os commits, até que você finalmente está com a sua branch pronta para ser mergeada para a branch principal.

Então você percebe o seguinte:

![https://cdn-images-1.medium.com/max/800/1*IxnfiZGlunXC1aK6u-09XA.png](https://cdn-images-1.medium.com/max/800/1*IxnfiZGlunXC1aK6u-09XA.png)

Olhando a árvore do git, você percebe que desde foi aberta a branch `minha-feature` , várias alterações foram feitas na branch `main`, sua branch de referência.

E os conflitos entre as branchs começam à aparecer:

![https://cdn-images-1.medium.com/max/800/1*wv4XBt2QC8Z-R0iF0hZ8Pg.png](https://cdn-images-1.medium.com/max/800/1*wv4XBt2QC8Z-R0iF0hZ8Pg.png)

Outro detalhe importante é que você comitou um total de X vezes na sua branch, o que significa que você provavelmente vai precisar resolver o conflito para ***cada um dos commits que você fez***.

![https://cdn-images-1.medium.com/max/800/1*7NzHfunVGsqOWygsLOz3XQ.png](https://cdn-images-1.medium.com/max/800/1*7NzHfunVGsqOWygsLOz3XQ.png)

Acho que agora é muito fácil entender o porquê disso rapidamente poder se tornar um **pesadelo** na sua vida.

E agora ?

### O Git Rebase

O git rebase funciona da seguinte forma:

quando abrimos uma branch nova, digamos, `minha-feature` , nós pegamos o ponto atual da nossa branch de referência como ponto de partida do nosso trabalho.

Da seguinte forma:

![https://cdn-images-1.medium.com/max/800/1*ZtqhHjRgEXG-tegD3fqIaQ.png](https://cdn-images-1.medium.com/max/800/1*ZtqhHjRgEXG-tegD3fqIaQ.png)

Na prática, funciona como se você estivesse começando a branch `minha-feature` no ponto mais atual da sua branch de referência, no nosso caso, a `main`.

### Squash

Primeiro vamos transformar todos nossos commits em 1 só, para facilitar o processo de rebase e deixa nossa branch mais limpa.

O git squash mescla seus N commits na quantidade desejada, podendo diminuindo consideravelmente a quantidade de commits de uma branch.

No nosso exemplo, temos um total de 13commits, então iremos rodar:

``` javascript
git rebase -i HEAD~13
```

Esse comando irá abrir o modo interativo do terminal:

![https://cdn-images-1.medium.com/max/800/1*P5YCQIpFLyrIGjsa3io-AA.png](https://cdn-images-1.medium.com/max/800/1*P5YCQIpFLyrIGjsa3io-AA.png)

Mude os campos `pick` para `s` para fazer o Squash, deixando apenas o primeiro sem alterações, esse será o commit que vai ficar ao final do nosso squash.

![https://cdn-images-1.medium.com/max/800/1*DerHAyQJVuhkAQuLDTIfaw.png](https://cdn-images-1.medium.com/max/800/1*DerHAyQJVuhkAQuLDTIfaw.png)

Ao fim, `ctrl + o` para subscrever as mudanças e `ctrl + x` para sair.

Você será enviado para a próxima tela:

![https://cdn-images-1.medium.com/max/800/1*p1n8V2GN_adRgDFw1XApiQ.png](https://cdn-images-1.medium.com/max/800/1*p1n8V2GN_adRgDFw1XApiQ.png)

Aqui, você vai selecionar a mensagem de commit que vai ficar ao final, apagando todas as outras

![https://cdn-images-1.medium.com/max/800/1*-ePXADWy8VMSV9Yfew600Q.png](https://cdn-images-1.medium.com/max/800/1*-ePXADWy8VMSV9Yfew600Q.png)

Aperte `ctrl + o` para subscrever as mudanças e `ctrl + x` para sair.

![https://cdn-images-1.medium.com/max/800/1*YCxFonnVNpHeeQfTsZZznw.png](https://cdn-images-1.medium.com/max/800/1*YCxFonnVNpHeeQfTsZZznw.png)

Parabéns, o Git Squash foi bem sucedido ! 🎉

Agora só precisamos pushar as mudanças:

```
git push origin minha-feature --force
```

Vamos ver como ficou?

![https://cdn-images-1.medium.com/max/800/1*iI3ArxIAxBqz9AcvMIH2Gg.png](https://cdn-images-1.medium.com/max/800/1*iI3ArxIAxBqz9AcvMIH2Gg.png)

![https://cdn-images-1.medium.com/max/800/1*yjvu4bPIs3ojpmsE8UkWlA.png](https://cdn-images-1.medium.com/max/800/1*yjvu4bPIs3ojpmsE8UkWlA.png)

Show ! Já temos todos nossos commits condensados em um commit único.

Agora para o Rebase…

### Git Rebase

Vamos lá,

Ao rodar `git rebase main`, podemos nos deparar com a seguinte tela:

![https://cdn-images-1.medium.com/max/800/1*-WaWa8qXF4oRIlpRsbDMVA.png](https://cdn-images-1.medium.com/max/800/1*-WaWa8qXF4oRIlpRsbDMVA.png)

Calma !

Isso é apenas o seu terminal dizendo que existem conflitos que precisam ser resolvidos

Usamos o comando `code .` para abrir o VSCode com os conflitos

Na aba Source Control, podemos ver a lista de arquivos conflitantes:

![https://cdn-images-1.medium.com/max/800/1*pxu_suauyadjrAo4lUOOKA.png](https://cdn-images-1.medium.com/max/800/1*pxu_suauyadjrAo4lUOOKA.png)

Escolha a opção que ficar na branch no fim, current change ou incoming change.

Nesse caso, por exemplo, iremos manter as mudanças que estão na nossa Feature, então vamos selecionar Accept Incoming Change.

Salvamos e continuamos no rebase:

``` javascript
git add .
git rebase --continue
```

E vamos fazer isso até não termos mais conflitos:

![https://cdn-images-1.medium.com/max/800/1*1eJdWhCJ1eWtSoWDnxSMWQ.png](https://cdn-images-1.medium.com/max/800/1*1eJdWhCJ1eWtSoWDnxSMWQ.png)

Percebe como já não há mais ‘@xxxxxx | rebase1/1’ ao lado do nome da nossa feature ? Isso significa que já não existem mais conflitos na nossa branch.

Agora basta pushar as modificações:

``` javascript
git push origin minha-feature --force
```

Rebase concluido com sucesso !

Vamos olhar nosso histórico ?

![https://cdn-images-1.medium.com/max/800/1*abrFZlDlviBlcsfjtWg9vQ.png](https://cdn-images-1.medium.com/max/800/1*abrFZlDlviBlcsfjtWg9vQ.png)

Na primeira parte temos o Squash dos Commits, na segunda parte temos o Rebase, e agora nossa branch não tem mais conflito algum, e está pronta para ser mergeada !

### FAQ

- **E se der tudo errado ?Resposta:** `git rebase --abort`
- **Qual a vantagem ?Resposta:** Evita e agiliza consideravelmente a resolução de conflitos entre branches.
- **Qual o risco ?Resposta:** Quando fazemos Squash, acabamos perdendo o histórico de commits, e já não será mais possível voltar à um commit específico.
- **Posso fazer Rebase sempre ?Resposta:** Não. ****O ideal é manter o tempo das branches **curto,** para não precisar fazer Rebase, além disso, é muito importante alinhar com o seu time o melhor fluxo de trabalho para que seja bom para todo mundo, alguns times preferem manter o histórico de commits.
- **O que é uma branch de referência ?Resposta:** Todo novo Pull Request tem como objetivo mergear uma branch na outra. No geral, mergeamos nosso código na `main`, que por padrão é a branch principal do nosso projeto, mas também é comum termos uma branch aberta à partir de outra branch, apesar de não ser muito recomendado que isso seja feito em cascata, pelo alto nível de complexidade que isso acaba causando no fluxo do git.

Mesmo que não vá usar no dia à dia da sua empresa, é sempre bom entender um pouco mais sobre o fluxo do Git, para projetos pessoais, ou trabalhos futuros.

Dúvidas, comentários e sugestões deixa nos comentários aqui embaixo 👇

Até a próxima! 😄