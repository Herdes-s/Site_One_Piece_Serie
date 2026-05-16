# 🏴‍☠️ One Piece Live Action – Interface Temática

> Experiência digital imersiva baseada no universo de One Piece (Live Action), desenvolvida para explorar conceitos avançados de estilização temática, transições de tela e responsividade.

---

## 🌓 Visualização

| Intro | Home |
| :---: | :---: |
|![one piece](./src/assets/Images/image_intro.png) | ![one piece](./src/assets/Images/image_home.png) |

---

## 🚀 Objetivo
O objetivo deste projeto foi ir além das interfaces corporativas tradicionais e criar um site altamente estilizado e temático. A aplicação simula uma imersão dentro do universo pirata, utilizando texturas que remetem a mapas antigos, pergaminhos e elementos marítimos, servindo como um excelente estudo de caso para estilização avançada e controle de layouts complexos.

---

## 🛠️ Tecnologias e Conceitos
A arquitetura do projeto utiliza o ecossistema do React para entregar uma interface robusta e modular:

* **React**: Utilizado para gerenciar a renderização dos componentes e o ciclo de vida dos estados de navegação.
* **React Router Dom**: Gerenciamento de rotas para organizar a navegação entre os diferentes cenários e locais da jornada pirata.
* **CSS Modules**: Escopamento local de estilos para garantir que a forte identidade visual de uma seção não gere conflitos nas demais.
* **JavaScript (ES6+)**: Controle de estados e lógica de temporização para as telas de transição.
* **Mobile First (Implementado na V2)**: Estrutura completamente reformulada focando primeiro na usabilidade em dispositivos móveis e expandindo dinamicamente para telas maiores.
* **Tipografia Fluida**: Uso da função `clamp()` do CSS para permitir que os textos temáticos se ajustem de forma harmoniosa sem quebrar o layout em resoluções menores.

---

## 🏗️ Estrutura da Aplicação
O projeto foi estruturado em blocos isolados e fáceis de dar manutenção:

### Intro
* **Intro**: Tela inicial de carregamento com uma transição imersiva em estilo "vinheta" que introduz o usuário ao site.

### Home
* **Header**: Menu de navegação temático (com suporte a menu oculto/hambúrguer no formato mobile).
* **Hero Section**: Introdução visual com forte impacto estético e tipografia marcante.
* **Mapa do Mundo / Locais da Jornada**: Seção interativa mostrando os pontos chave explorados pelos personagens.
* **Cartazes de Procurados (Wanted)**: Galeria estilizada exibindo as recompensas dos piratas.
* **Footer**: Rodapé temático encerrando a experiência de navegação.

---

## 🔄 Como Rodar o Projeto

Para executar este projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**
  ```bash
  git clone "https://github.com/Herdes-s/Site_One_Piece_Serie"
  ```
   
2. **Acesse a pasta do projeto:**
  ```bash
  cd Site_One_Piece_Serie
  ```

3. **Instale as dependências:**
  ```bash
  npm install
  ```

4. **Inicie o servidor de desenvolvimento:**
  ```bash
  npm start
  ```

---

## 🧠 Evolução e Desafios Técnicos
Este projeto marca um importante processo de refatoração e amadurecimento técnico dividido em duas etapas:

*   **O Desafio da Transição (V1):** O maior obstáculo inicial foi criar uma transição suave de tela (efeito vinheta) para a entrada no site. Resolvi isso integrando estados do React (`useState`) com classes do CSS Modules, disparando as animações no momento exato em que o componente é montado.
*   **A Refatoração para Performance e UX (V2):** Na primeira versão, o foco foi estritamente visual. Na V2, fiz uma reestruturação completa adotando a metodologia **Mobile-First**. Toda a folha de estilo foi reescrita partindo do mobile, aplicando menus ocultos nativos e otimizando o espaçamento com `clamp()`, o que garantiu uma excelente experiência de usuário em qualquer dispositivo.

---

## 🔗 Link de Acesso
Manutenção : Confira o projeto online: [**Visualizar One Piece Live Action**]("")

---

## 👤 Autor
Desenvolvido por **Ernand Soares**.

---
> Inspirado na série One Piece (Live Action) da Netflix.