
# Primeiro Projeto React

## Objetivo

Este projeto foi desenvolvido como atividade de introdução ao React, utilizando JSX e componentes funcionais.

## Componentes desenvolvidos

- **Header:** apresenta o título da página.
- **Footer:** apresenta o texto do rodapé.
- **Card:** recebe título e descrição através de props.
- **Lista:** recebe um array de strings e apresenta os itens utilizando o método map().
- **App:** importa e organiza todos os componentes.

## Reflexão

### Qual a diferença entre a abordagem imperativa e a declarativa? Por que o Virtual DOM otimiza a performance?

A abordagem imperativa, utilizada no JavaScript puro, consiste em escrever comandos para indicar como os elementos da página devem ser criados, modificados ou removidos.<img width="773" height="585" alt="image" src="https://github.com/user-attachments/assets/515ccc59-b35e-46d0-ae61-a04b61ebd415" />
<img width="764" height="439" alt="image" src="https://github.com/user-attachments/assets/32e8e88e-2b4d-408f-a739-884018d478e1" />

Já a abordagem declarativa, utilizada pelo React, consiste em descrever como queremos que a interface apareça, deixando o React responsável por realizar as atualizações necessárias.

O Virtual DOM é uma representação virtual da estrutura da página. Ele permite que o React compare as alterações e atualize apenas as partes necessárias do DOM real, evitando modificações desnecessárias e tornando a atualização da interface mais eficiente.
