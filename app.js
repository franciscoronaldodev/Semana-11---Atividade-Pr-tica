const dados = [
  {
    id: 1,
    titulo: "Prefeitura Lança Novo Plano de Mobilidade Urbana",
    descricao: "Novo plano visa melhorar o transporte público e reduzir o trânsito na cidade.",
    conteudo: "A Prefeitura apresentou nesta segunda-feira um novo plano de mobilidade urbana que inclui a criação de corredores exclusivos de ônibus, ciclovias e a requalificação de vias principais. O projeto será implementado ao longo dos próximos dois anos e contará com investimento de R$ 400 milhões provenientes de parceria público-privada. Especialistas em mobilidade urbana apontam que a iniciativa é uma das mais ambiciosas da última década. A expectativa é que o novo sistema reduza em até 30% o tempo médio de deslocamento dos moradores nas áreas contempladas.",
    categoria: "Cidades",
    autor: "Ana Maria Pires",
    data: "2026-03-05",
    imagem: "assets/img/mobilidade.png"
  },
  {
    id: 2,
    titulo: "Tecnologia 6G Está em Desenvolvimento",
    descricao: "Pesquisadores anunciam avanços na próxima geração de redes móveis.",
    conteudo: "Universidades e empresas de telecomunicação já estão testando tecnologias que poderão compor a infraestrutura do 6G. A expectativa é que a nova geração seja 100 vezes mais rápida que o 5G e amplie a integração entre dispositivos inteligentes. Laboratórios no Japão, Coreia do Sul e Europa lideram as pesquisas, com previsão de implementação comercial para 2030. No Brasil, a Anatel já iniciou estudos para regulamentação futura e acompanha de perto os avanços internacionais.",
    categoria: "Tecnologia",
    autor: "Bruno Costa e Silva",
    data: "2026-03-04",
    imagem: "assets/img/tecnologia6g.png"
  },
  {
    id: 3,
    titulo: "Festival de Música Reúne Mais de 50 Mil Pessoas em BH",
    descricao: "Evento cultural movimentou o final de semana com atrações nacionais e internacionais.",
    conteudo: "Durante três dias de programação, o Festival de Música de Belo Horizonte contou com a participação de mais de 40 artistas e promoveu atividades culturais e gastronômicas em paralelo. A prefeitura estima um impacto positivo no turismo local de aproximadamente R$ 80 milhões. O evento, que aconteceu no Parque das Mangabeiras, registrou público recorde e consolidou a capital mineira como um dos principais destinos culturais do país. Para o próximo ano, os organizadores planejam ampliar o número de palcos e atrair artistas internacionais de maior porte.",
    categoria: "Cultura",
    autor: "Carla Vieira Grossi",
    data: "2026-03-03",
    imagem: "assets/img/festivaldemusica.png"
  },
  {
    id: 4,
    titulo: "Gastronomia Mineira Recebe Prêmio Internacional",
    descricao: "Culinária tradicional de Minas Gerais é reconhecida em premiação europeia.",
    conteudo: "A gastronomia mineira conquistou mais um título internacional ao receber o prêmio 'Melhor Cozinha Regional da América Latina' concedido por uma importante revista de gastronomia sediada em Paris. O pão de queijo, o frango com quiabo e o feijão tropeiro foram destacados como pratos representativos da riqueza cultural e culinária do estado. Chefs mineiros que participaram do evento na capital francesa destacaram que o reconhecimento coloca Minas Gerais no mapa gastronômico mundial e abre portas para o turismo gastronômico na região.",
    categoria: "Gastronomia",
    autor: "Fabiana Pereira Lima",
    data: "2026-03-02",
    imagem: "assets/img/gastronomia.png"
  },
  {
    id: 5,
    titulo: "Nova Lei de Proteção Ambiental Entra em Vigor",
    descricao: "Legislação amplia áreas de preservação e endurece punições para crimes ambientais.",
    conteudo: "A nova Lei de Proteção Ambiental sancionada pelo governo federal entrou em vigor nesta semana, trazendo importantes avanços para a preservação dos biomas brasileiros. A legislação amplia as áreas de preservação permanente, estabelece metas de reflorestamento para empresas e endurece as punições para crimes ambientais, com multas que podem chegar a R$ 50 milhões. Ambientalistas comemoraram a aprovação e destacam que a lei é um passo fundamental para cumprir os compromissos assumidos pelo Brasil no Acordo de Paris.",
    categoria: "Meio Ambiente",
    autor: "Diego Santana Ferreira",
    data: "2026-03-01",
    imagem: "assets/img/mobilidade.png"
  },
  {
    id: 6,
    titulo: "Startup Brasileira Desenvolve IA para Diagnóstico Médico",
    descricao: "Solução promete reduzir erros de diagnóstico em até 40% nos hospitais públicos.",
    conteudo: "Uma startup sediada em Belo Horizonte desenvolveu uma solução de inteligência artificial capaz de auxiliar médicos no diagnóstico de doenças raras. A tecnologia, testada em parceria com três hospitais públicos de Minas Gerais, analisou mais de 200 mil prontuários e obteve taxa de acerto superior a 95% na identificação precoce de condições como câncer de pulmão e doenças autoimunes. A iniciativa recebeu aporte de R$ 30 milhões de um fundo de inovação e deve ser expandida para mais estados ainda este ano.",
    categoria: "Saúde",
    autor: "Eloísa Campos Monteiro",
    data: "2026-02-28",
    imagem: "assets/img/tecnologia6g.png"
  }
];

function formatarData(dataISO) {
  const [ano, mes, dia] = dataISO.split("-");
  return `${dia}/${mes}/${ano}`;
}

function renderizarCards() {
  const container = document.getElementById("noticias");
  if (!container) return;

  container.innerHTML = "";

  dados.forEach(function (noticia) {
    const card = document.createElement("div");
    card.className = "cartao";

    card.innerHTML = `
      <img class="imagem-do-cartao" src="${noticia.imagem}" alt="${noticia.titulo}" />
      <section class="corpo-do-cartao">
        <h1 class="titulo-do-cartao">${noticia.titulo}</h1>
        <p class="classificacao">
          <span class="categoria-da-noticia">${noticia.categoria}</span>
          <span class="data-da-noticia">${formatarData(noticia.data)}</span>
        </p>
        <p class="descricao-da-noticia">${noticia.descricao}</p>
        <p class="autor-da-noticia">${noticia.autor}</p>
      </section>
      <a href="detalhes.html?id=${noticia.id}" class="botao-do-cartao">Leia mais</a>
    `;

    container.appendChild(card);
  });
}

function renderizarDetalhes() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  const noticia = dados.find(function (item) {
    return item.id === id;
  });

  if (!noticia) {
    document.getElementById("detalhe-titulo").textContent = "Notícia não encontrada.";
    return;
  }

  document.title = noticia.titulo + " | Portal de Notícias";
  document.getElementById("detalhe-categoria").textContent = noticia.categoria;
  document.getElementById("detalhe-data").textContent = formatarData(noticia.data);
  document.getElementById("detalhe-titulo").textContent = noticia.titulo;
  document.getElementById("detalhe-descricao").textContent = noticia.descricao;
  document.getElementById("detalhe-imagem").src = noticia.imagem;
  document.getElementById("detalhe-imagem").alt = noticia.titulo;
  document.getElementById("detalhe-conteudo").textContent = noticia.conteudo;
  document.getElementById("detalhe-autor").textContent = "Por: " + noticia.autor;
}
