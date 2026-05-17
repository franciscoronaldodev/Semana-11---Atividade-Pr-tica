# Portal de Notícias - Semana 11

## Dados do Aluno

- **Nome:** Ronaldo Vasconcelos
- **Curso:** Engenharia de Software - PUC Minas
- **Disciplina:** Desenvolvimento Front-End

---

## Descrição do Projeto

Portal de notícias com página inicial dinâmica e página de detalhes.  
Os cards são gerados via JavaScript a partir de um array JSON definido no `app.js`.  
Ao clicar em "Leia mais", o usuário é redirecionado para `detalhes.html?id=X`, onde o conteúdo completo da notícia é carregado dinamicamente via query string.

---

## Estrutura de Arquivos

```
07-web-aula-template/
├── index.html          → Home-page com cards dinâmicos
├── detalhes.html       → Página de detalhes da notícia
├── app.js              → Dados JSON e lógica JavaScript
├── README.md
└── assets/
    ├── css/
    │   ├── estilo.css
    │   ├── cabecalho.css
    │   ├── corpo.css
    │   ├── cartao.css
    │   ├── menulateral.css
    │   ├── rodape.css
    │   ├── responsividade.css
    │   └── detalhes.css
    └── img/
        ├── mobilidade.png
        ├── tecnologia6g.png
        ├── festivaldemusica.png
        └── gastronomia.png
```

---

## Dados JSON (app.js)

```javascript
const dados = [
  {
    id: 1,
    titulo: "Prefeitura Lança Novo Plano de Mobilidade Urbana",
    descricao: "Novo plano visa melhorar o transporte público e reduzir o trânsito na cidade.",
    conteudo: "A Prefeitura apresentou nesta segunda-feira um novo plano de mobilidade urbana...",
    categoria: "Cidades",
    autor: "Ana Maria Pires",
    data: "2026-03-05",
    imagem: "assets/img/mobilidade.png"
  },
  {
    id: 2,
    titulo: "Tecnologia 6G Está em Desenvolvimento",
    descricao: "Pesquisadores anunciam avanços na próxima geração de redes móveis.",
    conteudo: "Universidades e empresas de telecomunicação já estão testando tecnologias...",
    categoria: "Tecnologia",
    autor: "Bruno Costa e Silva",
    data: "2026-03-04",
    imagem: "assets/img/tecnologia6g.png"
  },
  {
    id: 3,
    titulo: "Festival de Música Reúne Mais de 50 Mil Pessoas em BH",
    descricao: "Evento cultural movimentou o final de semana com atrações nacionais e internacionais.",
    conteudo: "Durante três dias de programação, o festival contou com mais de 40 artistas...",
    categoria: "Cultura",
    autor: "Carla Vieira Grossi",
    data: "2026-03-03",
    imagem: "assets/img/festivaldemusica.png"
  },
  {
    id: 4,
    titulo: "Gastronomia Mineira Recebe Prêmio Internacional",
    descricao: "Culinária tradicional de Minas Gerais é reconhecida em premiação europeia.",
    conteudo: "A gastronomia mineira conquistou mais um título internacional...",
    categoria: "Gastronomia",
    autor: "Fabiana Pereira Lima",
    data: "2026-03-02",
    imagem: "assets/img/gastronomia.png"
  },
  {
    id: 5,
    titulo: "Nova Lei de Proteção Ambiental Entra em Vigor",
    descricao: "Legislação amplia áreas de preservação e endurece punições para crimes ambientais.",
    conteudo: "A nova Lei de Proteção Ambiental sancionada pelo governo federal entrou em vigor...",
    categoria: "Meio Ambiente",
    autor: "Diego Santana Ferreira",
    data: "2026-03-01",
    imagem: "assets/img/mobilidade.png"
  },
  {
    id: 6,
    titulo: "Startup Brasileira Desenvolve IA para Diagnóstico Médico",
    descricao: "Solução promete reduzir erros de diagnóstico em até 40% nos hospitais públicos.",
    conteudo: "Uma startup sediada em Belo Horizonte desenvolveu uma solução de IA...",
    categoria: "Saúde",
    autor: "Eloísa Campos Monteiro",
    data: "2026-02-28",
    imagem: "assets/img/tecnologia6g.png"
  }
]
```

---

## Funcionalidades

- **Home-page dinâmica:** cards gerados via JavaScript a partir do array JSON
- **Navegação por query string:** link no formato `detalhes.html?id=1`
- **Página de detalhes dinâmica:** lê o `id` da URL e exibe o conteúdo completo da notícia
- **Layout responsivo:** adaptado para dispositivos móveis
