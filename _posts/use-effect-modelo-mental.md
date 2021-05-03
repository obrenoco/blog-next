---
useFolks: true
subjects: ["frontend","react","hooks"]
title: "Fundamentos do useEffect"
language: "pt-br"
translations: ["pt-br"]
date: "2021-05-03T01:24:56-03:00"
description: "As bases do Hook mais utilizados no React"
---

## 👷‍♂️ Em construção...
Ter os modelos mentais certos parece essencial para se chegar à uma compreensão solida de qualquer conceito. Na verdade, superam quaisquer milhares de horas de prática em modelo mental equivocado ou simplesmente incompleto. 
A idéia desse artigo é propôr um modelo mental bastante simplificado do que realmente seria o useState, um dos Hooks mais utilizados do React.
Por algum motivo, parece ser de entendimento comum pensar no useState como uma maneira de se adicionar estado em um componente, mas esse não é exatamente visão mais correta do useState.
Na verdade, ele possui duas funções principais:
Preservar valores na primeira chamada da função ou re-renders
Acionar uma re-renderização do componente

Preservar valores é algo muito importante para os hooks, e essa singela diferença na maneira como se pensa a ferramenta vai ajudar mais à frente à entender o funcionamento de outros Hooks, pois operam dentro da mesma linha.
Falando um pouco mais à fundo sobre suas funções principais:


## Re-render
Um re-render pode ser definido como qualquer renderização posterior à primeira renderização do componente.
````javascript
const Component = () => {
  const [state, setState] = useState("")
  setState("argumento novo")
  
  // 👉 se "argumento novo" === state, 
  //     o componente NÂO re-renderiza
  // 👉 se "argumento novo" !== state, 
  //    o componente re-renderiza
  //    com valor do argumento novo
	
  return state;
};
````

Como é possivel ver acima, quando a função de update setState()é chamada, se verifica:
o valor atual do meu estado (state) é igual ou diferente ao novo valor que está sendo inserido ("argumento novo") ?
Se for igual, ele mantém o estado daquele componente, e não o re-renderiza
Se for diferente, ele atualiza o valor do estado, e re-renderiza o componente
o useRef por exemplo:
Preserva valores entre chamadas de função ou re-renders
NÂO Trigga uma re-renderização do componente

Quando escrevemos um useState, estamos bacisamente fazendo isso aqui:
```` javascript
// qual o nome dessa estrutura no JavaScript ?
const [theme, setTheme] = useState("light");
// é o mesmo que:
const themeArray = useState('light');
const theme = themeArray[0];
const setTheme = themeArray[1];
````