# Cena Pop - Portal de Entretenimento

## Dados do Aluno

- **Nome:** Ronaldo Vasconcelos
- **Curso:** Engenharia de Software - PUC Minas
- **Disciplina:** Desenvolvimento Front-End

---

## Descrição do Projeto

Portal de notícias de entretenimento com tema escuro. A home-page exibe cards gerados dinamicamente via JavaScript a partir de um array JSON definido no `app.js`. Ao clicar em "Leia mais", o usuário é redirecionado para `detalhes.html?id=X`, onde o conteúdo completo da notícia é carregado via query string.

---

## Estrutura de Arquivos

```
Novo-Site-de-noticias/
├── index.html          → Home-page com cards dinâmicos
├── detalhes.html       → Página de detalhes da notícia
├── app.js              → Dados JSON e lógica JavaScript
├── README.md
└── assets/
    ├── css/
    │   ├── estilo.css      → Estilos globais (tema escuro)
    │   └── detalhes.css    → Estilos da página de detalhes
    └── img/
        ├── cinema.png
        ├── series.png
        ├── festivaldemusica.png
        └── tecnologia6g.png
```

---

## Dados JSON (app.js)

```javascript
const dados = [
  {
    id: 1,
    titulo: "Oscar 2026: Confira os Favoritos das Categorias Principais",
    descricao: "A premiação mais esperada do cinema mundial já tem seus candidatos definidos.",
    conteudo: "A Academia de Artes e Ciências Cinematográficas divulgou os indicados...",
    categoria: "Cinema",
    autor: "Mariana Fonseca",
    data: "2026-05-10",
    imagem: "assets/img/cinema.png"
  },
  {
    id: 2,
    titulo: "Stranger Things Confirma Data da Última Temporada na Netflix",
    descricao: "A série mais assistida da história da Netflix tem data marcada para seu capítulo final.",
    conteudo: "A Netflix anunciou oficialmente que a última temporada estreia em julho de 2026...",
    categoria: "Séries",
    autor: "Pedro Almeida",
    data: "2026-05-08",
    imagem: "assets/img/series.png"
  },
  {
    id: 3,
    titulo: "Show do Bad Bunny Esgota Ingressos em Menos de 5 Minutos",
    descricao: "A turnê chega ao Brasil com três datas confirmadas.",
    conteudo: "Os ingressos para os shows de Bad Bunny no Brasil esgotaram em menos de cinco minutos...",
    categoria: "Música",
    autor: "Isabela Torres",
    data: "2026-05-06",
    imagem: "assets/img/festivaldemusica.png"
  },
  {
    id: 4,
    titulo: "Marvel Anuncia Novo Filme dos Vingadores para 2027",
    descricao: "Kevin Feige revela detalhes sobre o próximo grande evento do MCU.",
    conteudo: "Durante o painel da Marvel na San Diego Comic-Con, Kevin Feige anunciou...",
    categoria: "Cinema",
    autor: "Rafael Guimarães",
    data: "2026-05-04",
    imagem: "assets/img/cinema.png"
  },
  {
    id: 5,
    titulo: "Beyoncé Lança Álbum Surpresa e Quebra Recordes nas Plataformas",
    descricao: "Rainha do pop lança projeto visual inédito sem nenhum aviso prévio.",
    conteudo: "Beyoncé surpreendeu o mundo ao lançar 'Renaissance III' sem qualquer divulgação prévia...",
    categoria: "Música",
    autor: "Leticia Brandão",
    data: "2026-05-02",
    imagem: "assets/img/festivaldemusica.png"
  },
  {
    id: 6,
    titulo: "Lollapalooza Brasil 2027 Anuncia Lineup com Headliners Históricos",
    descricao: "Festival revela grade com nomes que nunca haviam se apresentado juntos.",
    conteudo: "O Lollapalooza Brasil 2027 divulgou sua grade e o anúncio explodiu nas redes sociais...",
    categoria: "Eventos",
    autor: "Camila Novaes",
    data: "2026-04-30",
    imagem: "assets/img/festivaldemusica.png"
  }
]
```

---

## Funcionalidades

- **Home-page dinâmica:** cards gerados via JavaScript a partir do array JSON
- **Navegação por query string:** link no formato `detalhes.html?id=1`
- **Página de detalhes dinâmica:** lê o `id` da URL e exibe o conteúdo completo
- **Tema escuro:** paleta roxa/dark em todos os elementos
- **Layout responsivo:** adaptado para dispositivos móveis
