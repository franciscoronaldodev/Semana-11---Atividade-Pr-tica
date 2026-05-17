const dados = [
  {
    id: 1,
    titulo: "Oscar 2026: Confira os Favoritos das Categorias Principais",
    descricao: "A premiação mais esperada do cinema mundial já tem seus candidatos definidos e as apostas esquentam.",
    conteudo: "A Academia de Artes e Ciências Cinematográficas divulgou os indicados ao Oscar 2026 e a disputa promete ser acirrada. Na categoria Melhor Filme, 'Horizontes Infinitos' lidera as apostas com dez indicações, seguido de perto por 'A Última Fronteira' e 'Ecos do Silêncio'. Na corrida pela estatueta de Melhor Atriz, a brasileira Fernanda Torres surge como grande surpresa com sua atuação devastadora em 'Raízes do Vento'. A cerimônia acontece em março de 2026 no Dolby Theatre, em Los Angeles, e será transmitida ao vivo para mais de 200 países.",
    categoria: "Cinema",
    autor: "Mariana Fonseca",
    data: "2026-05-10",
    imagem: "assets/img/cinema.png"
  },
  {
    id: 2,
    titulo: "Stranger Things Confirma Data da Última Temporada na Netflix",
    descricao: "A série mais assistida da história da Netflix tem data marcada para seu capítulo final.",
    conteudo: "A Netflix anunciou oficialmente que a última temporada de Stranger Things estreia em julho de 2026. Os irmãos Duffer prometem um desfecho épico com mais de 10 horas de conteúdo divididas em dois volumes. O elenco original retorna completo, com a adição de dois personagens novos cujas identidades ainda são mantidas em segredo. O trailer lançado nesta semana já ultrapassou 80 milhões de visualizações em 24 horas, quebrando o recorde anterior da própria plataforma. Fãs ao redor do mundo acompanham cada detalhe nas redes sociais.",
    categoria: "Séries",
    autor: "Pedro Almeida",
    data: "2026-05-08",
    imagem: "assets/img/series.png"
  },
  {
    id: 3,
    titulo: "Show do Bad Bunny Esgota Ingressos em Menos de 5 Minutos",
    descricao: "A turnê 'Nadie Sabe Lo Que Va a Pasar Mañana' chega ao Brasil com três datas confirmadas.",
    conteudo: "Os ingressos para os shows de Bad Bunny no Brasil, marcados para setembro de 2026 em São Paulo, Rio de Janeiro e Belo Horizonte, esgotaram em menos de cinco minutos após a abertura das vendas. O cantor porto-riquenho, que domina as paradas musicais mundiais, deve apresentar seu novo álbum ao vivo pela primeira vez em solo brasileiro. Devido à altíssima demanda, a produtora estuda a possibilidade de adicionar novas datas. O último show do artista no Brasil, em 2023, reuniu mais de 70 mil pessoas no Allianz Parque.",
    categoria: "Música",
    autor: "Isabela Torres",
    data: "2026-05-06",
    imagem: "assets/img/festivaldemusica.png"
  },
  {
    id: 4,
    titulo: "Marvel Anuncia Novo Filme dos Vingadores para 2027",
    descricao: "Kevin Feige revela detalhes sobre o próximo grande evento do Universo Cinematográfico Marvel.",
    conteudo: "Durante o painel da Marvel na San Diego Comic-Con, Kevin Feige surpreendeu os fãs ao anunciar oficialmente 'Vingadores: Novos Horizontes', com estreia prevista para maio de 2027. O filme reunirá personagens das fases 4 e 5 do MCU em uma aventura que promete superar 'Endgame' em escala e emoção. O diretor confirmado é Anthony e Joe Russo, que retornam após o sucesso de 'Infinity War' e 'Endgame'. O elenco inclui nomes confirmados como Benedict Cumberbatch, Brie Larson e a estreia de um personagem muito aguardado pelos leitores dos quadrinhos.",
    categoria: "Cinema",
    autor: "Rafael Guimarães",
    data: "2026-05-04",
    imagem: "assets/img/cinema.png"
  },
  {
    id: 5,
    titulo: "Beyoncé Lança Álbum Surpresa e Quebra Recordes nas Plataformas",
    descricao: "Rainha do pop lança projeto visual inédito sem nenhum aviso prévio.",
    conteudo: "Beyoncé surpreendeu o mundo ao lançar 'Renaissance III' sem qualquer divulgação prévia, mantendo o sigilo absoluto durante toda a produção. O álbum com 18 faixas já acumula mais de 300 milhões de streams nas primeiras 48 horas, quebrando todos os recordes do Spotify e Apple Music. Colaborações com artistas como Kendrick Lamar, Rihanna e a brasileira Anitta estão entre os destaques do projeto. A própria cantora publicou apenas uma foto preta e branca nas redes sociais com a legenda: 'Para vocês.'",
    categoria: "Música",
    autor: "Leticia Brandão",
    data: "2026-05-02",
    imagem: "assets/img/festivaldemusica.png"
  },
  {
    id: 6,
    titulo: "Lollapalooza Brasil 2027 Anuncia Lineup com Headliners Históricos",
    descricao: "Festival revela grade com nomes que nunca haviam se apresentado juntos no mesmo palco.",
    conteudo: "O Lollapalooza Brasil 2027 divulgou sua grade de atrações e o anúncio caiu como uma bomba nas redes sociais. Os headliners confirmados são Radiohead, em seu retorno aos palcos após seis anos de pausa, Dua Lipa, que estreia no festival, e o duo brasileiro Los Hermanos, comemorando 30 anos de carreira. O festival acontece em março de 2027 no Autódromo de Interlagos, em São Paulo, com ingressos disponíveis a partir de outubro de 2026. A expectativa é de um público total de 300 mil pessoas nos três dias de evento.",
    categoria: "Eventos",
    autor: "Camila Novaes",
    data: "2026-04-30",
    imagem: "assets/img/festivaldemusica.png"
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

  document.title = noticia.titulo + " | Cena Pop";
  document.getElementById("detalhe-categoria").textContent = noticia.categoria;
  document.getElementById("detalhe-data").textContent = formatarData(noticia.data);
  document.getElementById("detalhe-titulo").textContent = noticia.titulo;
  document.getElementById("detalhe-descricao").textContent = noticia.descricao;
  document.getElementById("detalhe-imagem").src = noticia.imagem;
  document.getElementById("detalhe-imagem").alt = noticia.titulo;
  document.getElementById("detalhe-conteudo").textContent = noticia.conteudo;
  document.getElementById("detalhe-autor").textContent = "Por: " + noticia.autor;
}
