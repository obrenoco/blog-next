---
useFolks: true
subjects: ["frontend","web","URL"]
title: "URL - um modelo mental"
language: "pt-br"
translations: ["pt-br"]
date: "2021-05-03T01:16:56-03:00"
description: "O que a rainha da Inglaterra e uma URL tem em comum ?"
---

## Afinal, o que é uma URL?

URL é um conceito **muito** imporante da Web. Resumidamente, é um mecanismo usado pelo browser para encontrar algum material postado na internet.

Digamos que um dia queremos fazer uma visita à Rainha da Inlgaterra, que vive lá no no Palacio de Buckinghan, em Londres.

Bom, não é nada fácil chegar até a rainha, são necessários uma série de protocolos e um acompanhamento bem estrito para que você isso seja feito.

Ao colocar as coordenadas do GPS do Palácio de Bukingham, temos o seguinte resultado:

> 51°29'59.1"N 0°08'33.0"W

Isso não é nada intuitivo ou fácil de ler para um ser humano comum. 

Para tornar nossa vida mais fácíl dizemos que o Palácio fica em

> **Nação**: Reino Unido
**País**: Inglaterra
**Cidade**: Londres
**Endereço**: Spur Rd, SW1A 1AA
**Sala**: 137

Não é mais fácil ?

Agora imagine se cada vez que fosse entrar no google, tivesse que digitar:

> **200.342.2.23**

Isso também não é nada intuitivo, assim como não é intuitivo encontrar um lugar passando a latitude e a longitude. Quando passamos nosso endereço corretamente, todas essas informações (latitude, longitude, altura, CEP etc) já vêm subentendidas.

Assim, ao invés passamos

> **Schema**: https
**Dominio**: www.google.com
**Caminho**: imagens
**Parâmetros**: nome = rainha da Inglaterra, sala = 137
**Âncora**: Cadeira da Rainha

ou melhor dizendo,

> https://www.google.com/imagens&nome=rainha+da+inglaterra?sala=137#cadeira-da-rainha

Vejamos mais à fundo:

---

### Schema

Para visitar a rainha na sala 137, primeiro é preciso enviar pegar um avião até a Inglaterra.

Ao chegar às portas do aeroporto, no primeiro controle é apresentado o seu **protocolo** de viagem e isso seria o nosso **schema.** Como queremos fazer uma viagem em aeronave segura, usamos o protocolo **https** de viagem segura

Se você fosse apenas enviar um email à rainha, você possivelmente iria mostrar o protocolo de emails para a rainha **mailto** no lugar de **https**).

Os dois pontos são o que separam o **schema** da próxima parte (que pode ser qualquer coisa) mas como iremos visitar uma **autoridade,** então é necessário utilizar // depois dos dois pontos ****(http://www.etc.com), que indicará que após o schema, teremos **especificamente** uma autoridade.

Acompanhado de um dos guardas que sabe exatamente os procedimentos necessários para se chegar ao salão da rainha, ele te leva até um salão com muitas muitas portas

### Domain

Mas como é uma visita especial, o avião irá lhe deixar precisamente na porta do Palácio de Buckingam. 

Você mostra o endereço

> **www.royal.uk**

o piloto do avião começa à buscar nos livros de registro qual latitude e longitude correspondem à esse endereço exato.

Com **www** já é possível saber que estamos buscando na **World Wide Web**, e **.uk** indica que este servidor pode estar hospedado na Inglaterra.

Da mesma forma, quando buscamos por

> [www.google.com](http://www.google.com)

ele irá à procura em varios servidores para encontrar o IP correspondente daquele endereço. Caso não encontre na lista do primeiro servidor, irá passar a busca para o segundo, e assim sucessivamente até encontrar o IP correspondente.

Mas, se seu browser já tiver visitado [www.google.com](http://www.google.com) em algum momento, ele já terá salvo o IP correspondente, e sua busca muito mais rápida.

Assim que encontrar o IP, o servidor DNS envia a repsosta para o seu computador, e memoriza o servidor que tem aquele IP, assim, na próxima vez que qualquer outra pessoa pergunte qual o número de IP do mesmo endereço, o servidor DNS já terá em sua memória o caminho correto para encontrar a informação.

### Path

Já nas portas do Palácio de Buckigham, existe um caminho para se chegar na sala 137. Você irá passar por várias salas antes de chegar até lá.

Path significa "caminho", e ele é literalmente o caminho que usamos para chegar onde queremos dentro de um domínio. 

O Path é correspondente ao já conhecido sistema de pastas, onde navegamos para chegarmos ao documento correto dentro do nosso computador, de uma pasta central às suas subpastas. Ao buscar nos arquivos do meu computador

> **Desktop/Fotos/Viagem/Inglaterra2021**

sei com certeza que vou encontrar as fotos da minha viagem à Londres, de forma similar funciona o path.

### Parameters

Os parâmetros nada mais são do instruções específicas do que estamos buscando dentro daquela "pasta". Se estamos buscando a sala 137 onde está a rainha, iremos utilizar

> **nome** = "rainha da Inglaterra"
**sala** = 137

 

que ao ser construido no formato de **Query**, irá se transformar em:

> ?nome=rainha+da+inglaterra&sala=137

? Marca o início dos parâmetros
& Separa um parâmetro do outro
= Separa a chave, que é sempre a mesma, do valor que estamos buscando
+ Substitui os espaços entre as palavras

### **Anchor**

Mostra a posição específica dentro daquela pasta, com aquelas configurações específicas, no caso, o ponto de encontro na cadeira da rainha

> #Cadeira-da-Rainha

E assim você se encontra a rainha da Inglaterra.

Pode parecer um esforço muito grande para um humano, mas para o seu computador, tudo isso pode demorar alguns milissegundos.

Duvida ? 

Então [faça uma visita e veja como é rápido](https://www.royal.uk/virtual-tours-buckingham-palace). 😎

## Conclusão

Vimos alguns conceitos básicos sobre a anatomia de uma URL, porém isso se extende para um universo muito maior de URLs customizadas, onde são inseridas por exemplo de qual página viemos anteriormente, qual link clicamos para acessar tal endereço, e um mundo de possibilidades no uso de URLs na Web.

Porém, conhecendo o basico dessa ferramenta, podemos entender boa parte dos sistemas e rotas mais comuns dentro do espaço Web, de maneira padronizada que possa ser compreendida por qualquer outra pessoa com facilidade.

É também muito importante escrever URLs semânticas [ ADD LINK ], deixando elas mais legíveis e limpas de uma maneira geral.

Falaremos disso com mais profundidade em um artigo futuro.

## Referências

[What is a URL?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL)

[What Is A Domain Name? | GoDaddy](https://www.youtube.com/watch?v=zXKKUJm9rZo&ab_channel=GoDaddy)

[How Do URLs Work?](https://www.youtube.com/watch?v=OvF_pnJ6zrY&ab_channel=Techquickie)