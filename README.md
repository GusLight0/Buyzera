# 🛍️ Buyzera - Agregador de Ofertas Premium

![Buyzera Banner](public/banner-ofertas.png)

> **Buyzera** é uma plataforma moderna de curadoria de ofertas que centraliza as melhores promoções de marketplaces gigantes como Shopee, Mercado Livre, Amazon e AliExpress. O projeto foca em uma experiência de usuário imersiva, design responsivo e performance.

---

## 🎯 Objetivo do Projeto

O principal objetivo do **Buyzera** é simplificar a jornada de compra online, oferecendo um hub centralizado onde usuários podem:
- Encontrar produtos com descontos agressivos.
- Filtrar ofertas por loja, categoria, preço e percentual de desconto.
- Ter uma experiência visual rica e confiável antes de serem redirecionados para a compra final (modelo de afiliados).

Este projeto serve como peça de portfólio para demonstrar habilidades em **Front-end Development**, **UI/UX Design** e **Lógica de Programação**.

## 🚀 Funcionalidades Principais

- **Sistema de Filtros Avançado**: Filtragem em tempo real por Loja, Categoria, Faixa de Preço e Slider de Desconto.
- **Design Imersivo & Responsivo**: Layout "Mobile-First" com elementos de *Glassmorphism*, animações suaves e efeitos de neon/glow.
- **Animações de Scroll**: Uso da API `IntersectionObserver` para revelar elementos conforme a navegação.
- **Sistema de Notificações**: Feedback visual dinâmico e animado (ex: alertas de novas ofertas) que gerencia pilhas de notificações automaticamente.
- **Busca Inteligente**: Campo de busca funcional que normaliza textos (remove acentos) para encontrar produtos facilmente.
- **Interatividade**: Modais de Termos de Uso, Banner de Cookies e Menus Mobile fluidos.

## 🛠️ Ferramentas e Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias nativas da web, garantindo leveza e performance sem dependência de frameworks pesados.

- **HTML5 Semântico**: Estrutura acessível e organizada.
- **CSS3 Moderno**:
  - Uso extensivo de **CSS Variables** para temas e cores.
  - **Flexbox** e **CSS Grid** para layouts complexos.
  - Animações (`@keyframes`) e Transições para micro-interações.
  - Media Queries para responsividade total.
- **JavaScript (ES6+)**:
  - Manipulação do DOM.
  - Lógica de filtragem de arrays (`filter`, `sort`, `map`).
  - Event Listeners e manipulação de `localStorage`.
- **VS Code**: Editor de código.

## 🤖 O Papel da Inteligência Artificial

Este projeto foi desenvolvido com o apoio estratégico de ferramentas de **IA (como Gemini Code Assist)**, atuando como um "Pair Programmer" experiente. A IA auxiliou em:

1.  **Refatoração e Limpeza de Código**: Sugestões para tornar o JavaScript mais modular e legível.
2.  **Design System**: Criação de paletas de cores vibrantes e implementação de efeitos visuais complexos (como o fundo com "blobs" animados e cartões com efeito de vidro).
3.  **Solução de Problemas**: Diagnóstico rápido de bugs, como o comportamento de links (`target="_blank"`) e lógica de sobreposição de elementos CSS.
4.  **Otimização de UX**: Ideias para o sistema de notificações empilháveis e feedback visual ao usuário (ex: estados de "vazio" na busca).

## 🎨 Destaques de Design (UI/UX)

O visual foi planejado para transmitir modernidade e urgência (comum em varejo), mas mantendo a elegância.

- **Paleta de Cores**: Uma fusão das identidades visuais dos maiores parceiros (Laranja/Coral da Shopee + Amarelo do Mercado Livre) sobre uma base clara (Cream/White) e seções escuras para contraste (Dark Mode sections).
- **Tipografia**: Uso da fonte *Plus Jakarta Sans* para legibilidade e toque geométrico moderno.

## 📂 Estrutura do Projeto

```bash
Buyzera/
├── index.html          # Página Inicial (Landing Page)
├── ofertas.html        # Página de Listagem e Filtros
├── style.css           # Estilos Globais e da Home
├── ofertas.css         # Estilos específicos da página de ofertas
├── script.js           # Lógica da Home (Menu, Scroll, Notificações)
├── ofertas.js          # Lógica de Produtos (Dados, Filtros, Renderização)
└── public/             # Assets (Imagens, Ícones)
```

## 💻 Como Executar

1.  Clone este repositório ou baixe os arquivos.
2.  Abra o arquivo `index.html` em qualquer navegador moderno.
3.  Para uma melhor experiência de desenvolvimento, utilize a extensão "Live Server" do VS Code.

---

### 📸 Prévias

**Hero Section Imersiva**
> *Animações de entrada e fundo dinâmico.*

**Página de Ofertas**
> *Grid responsivo com filtros laterais funcionais.*

---

Desenvolvido por **Elias Soares** 🚀
```

<!--
[PROMPT_SUGGESTION]Gostaria de adicionar uma seção de "Próximos Passos" no README com ideias de melhorias futuras.
[PROMPT_SUGGESTION]Poderia criar um arquivo LICENSE simples para o projeto?
-->