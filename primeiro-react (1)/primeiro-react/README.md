# Primeira Aplicação React

Projeto da disciplina (CEUMA Universidade) criado com **Vite (template React)**, aplicando os conceitos iniciais de JSX e componentização.

## Como executar

```bash
npm install
npm run dev
```

## Estrutura

```
src/
├── App.jsx
├── main.jsx
├── index.css
└── components/
    ├── Header/Header.jsx   # título da página
    ├── Footer/Footer.jsx   # texto de rodapé
    ├── Card/Card.jsx       # recebe titulo e descricao via props
    └── Lista/Lista.jsx     # recebe array de strings e renderiza <ul> com .map() e key
```

## Parte 4 – Reflexão

**Explique a diferença entre a abordagem imperativa (JavaScript puro/manipulação do DOM) e a declarativa (React). Por que o Virtual DOM otimiza a performance?**

Na abordagem **imperativa**, o programador descreve *passo a passo como* alterar a tela: seleciona elementos (`document.getElementById`), cria nós (`createElement`), altera textos e atributos e os insere ou remove do DOM manualmente. Conforme a aplicação cresce, é preciso controlar à mão cada mudança de estado e cada atualização visual, o que gera código longo, repetitivo e propenso a erros e inconsistências.

Na abordagem **declarativa** (React), o programador descreve *como a interface deve ficar* para um determinado estado ou conjunto de dados, usando componentes e JSX. Quando os dados mudam, o React se encarrega de descobrir o que precisa ser atualizado na tela. O código fica mais legível, previsível e reutilizável.

O **Virtual DOM** é uma representação leve, em memória (objetos JavaScript), da árvore de elementos da interface. Quando o estado muda, o React gera uma nova versão do Virtual DOM e a compara com a anterior (processo chamado *diffing* ou reconciliação). Em seguida, aplica no DOM real **somente as diferenças** encontradas. Como manipular o DOM real é uma operação custosa (recalcula layout e repinta a tela), atualizar apenas o que mudou, em lote, em vez de reconstruir tudo, melhora a performance.
