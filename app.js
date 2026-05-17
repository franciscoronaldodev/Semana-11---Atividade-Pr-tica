// ── CREDENCIAIS ──────────────────────────────────────────────
const USUARIO_VALIDO = {
  email: "admin@cenapop.com",
  senha: "cena2026"
};

// ── AUTENTICAÇÃO ─────────────────────────────────────────────
function validarLogin() {
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;
  const msgErro = document.getElementById("msg-erro");

  if (!email || !senha) {
    msgErro.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Preencha todos os campos.';
    return;
  }

  if (email === USUARIO_VALIDO.email && senha === USUARIO_VALIDO.senha) {
    sessionStorage.setItem("logado", "true");
    window.location.href = "index.html";
  } else {
    msgErro.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> E-mail ou senha incorretos.';
    document.getElementById("senha").value = "";
    document.getElementById("senha").focus();
  }
}

function verificarLogin() {
  if (sessionStorage.getItem("logado") !== "true") {
    window.location.href = "login.html";
  }
}

function sair() {
  sessionStorage.removeItem("logado");
  window.location.href = "login.html";
}

function alternarSenha() {
  const input = document.getElementById("senha");
  const icone = document.getElementById("icone-olho");
  if (input.type === "password") {
    input.type = "text";
    icone.className = "fa-solid fa-eye-slash";
  } else {
    input.type = "password";
    icone.className = "fa-solid fa-eye";
  }
}

// ── DADOS JSON ───────────────────────────────────────────────
const dados = [
  {
    id: 1,
    titulo: "Oscar 2026: Confira os Favoritos das Categorias Principais",
    descricao: "A premiacao mais esperada do cinema mundial ja tem seus candidatos definidos e as apostas esquentam.",
    conteudo: "A Academia de Artes e Ciencias Cinematograficas divulgou os indicados ao Oscar 2026 e a disputa promete ser acirrada. Na categoria Melhor Filme, Horizontes Infinitos lidera as apostas com dez indicacoes, seguido de perto por A Ultima Fronteira e Ecos do Silencio. Na corrida pela estatueta de Melhor Atriz, a brasileira Fernanda Torres surge como grande surpresa com sua atuacao devastadora em Raizes do Vento. A cerimonia acontece em marco de 2026 no Dolby Theatre, em Los Angeles, e sera transmitida ao vivo para mais de 200 paises.",
    categoria: "Cinema",
    autor: "Mariana Fonseca",
    data: "2026-05-10",
    imagem: "assets/img/cinema.png"
  },
  {
    id: 2,
    titulo: "Stranger Things Confirma Data da Ultima Temporada na Netflix",
    descricao: "A serie mais assistida da historia da Netflix tem data marcada para seu capitulo final.",
    conteudo: "A Netflix anunciou oficialmente que a ultima temporada de Stranger Things estreia em julho de 2026. Os irmaos Duffer prometem um desfecho epico com mais de 10 horas de conteudo divididas em dois volumes. O elenco original retorna completo, com a adicao de dois personagens novos cujas identidades ainda sao mantidas em segredo. O trailer lancado nesta semana ja ultrapassou 80 milhoes de visualizacoes em 24 horas, quebrando o recorde anterior da propria plataforma.",
    categoria: "Series",
    autor: "Pedro Almeida",
    data: "2026-05-08",
    imagem: "assets/img/series.png"
  },
  {
    id: 3,
    titulo: "Show do Bad Bunny Esgota Ingressos em Menos de 5 Minutos",
    descricao: "A turne chega ao Brasil com tres datas confirmadas em setembro de 2026.",
    conteudo: "Os ingressos para os shows de Bad Bunny no Brasil, marcados para setembro de 2026 em Sao Paulo, Rio de Janeiro e Belo Horizonte, esgotaram em menos de cinco minutos apos a abertura das vendas. O cantor porto-riquenho, que domina as paradas musicais mundiais, deve apresentar seu novo album ao vivo pela primeira vez em solo brasileiro. Devido a altissima demanda, a produtora estuda a possibilidade de adicionar novas datas.",
    categoria: "Musica",
    autor: "Isabela Torres",
    data: "2026-05-06",
    imagem: "assets/img/festivaldemusica.png"
  },
  {
    id: 4,
    titulo: "Marvel Anuncia Novo Filme dos Vingadores para 2027",
    descricao: "Kevin Feige revela detalhes sobre o proximo grande evento do Universo Cinematografico Marvel.",
    conteudo: "Durante o painel da Marvel na San Diego Comic-Con, Kevin Feige surpreendeu os fas ao anunciar oficialmente Vingadores: Novos Horizontes, com estreia prevista para maio de 2027. O filme reunira personagens das fases 4 e 5 do MCU em uma aventura que promete superar Endgame em escala e emocao. O diretor confirmado e Anthony e Joe Russo, que retornam apos o sucesso de Infinity War e Endgame.",
    categoria: "Cinema",
    autor: "Rafael Guimaraes",
    data: "2026-05-04",
    imagem: "assets/img/cinema.png"
  },
  {
    id: 5,
    titulo: "Beyonce Lanca Album Surpresa e Quebra Recordes nas Plataformas",
    descricao: "Rainha do pop lanca projeto visual inedito sem nenhum aviso previo.",
    conteudo: "Beyonce surpreendeu o mundo ao lancar Renaissance III sem qualquer divulgacao previa, mantendo o sigilo absoluto durante toda a producao. O album com 18 faixas ja acumula mais de 300 milhoes de streams nas primeiras 48 horas, quebrando todos os recordes do Spotify e Apple Music. Colaboracoes com artistas como Kendrick Lamar, Rihanna e a brasileira Anitta estao entre os destaques do projeto.",
    categoria: "Musica",
    autor: "Leticia Brandao",
    data: "2026-05-02",
    imagem: "assets/img/festivaldemusica.png"
  },
  {
    id: 6,
    titulo: "Lollapalooza Brasil 2027 Anuncia Lineup com Headliners Historicos",
    descricao: "Festival revela grade com nomes que nunca haviam se apresentado juntos no mesmo palco.",
    conteudo: "O Lollapalooza Brasil 2027 divulgou sua grade de atracoes e o anuncio caiu como uma bomba nas redes sociais. Os headliners confirmados sao Radiohead, em seu retorno aos palcos apos seis anos de pausa, Dua Lipa, que estreia no festival, e o duo brasileiro Los Hermanos, comemorando 30 anos de carreira. O festival acontece em marco de 2027 no Autodromo de Interlagos, em Sao Paulo.",
    categoria: "Eventos",
    autor: "Camila Novaes",
    data: "2026-04-30",
    imagem: "assets/img/festivaldemusica.png"
  }
];

// ── UTILITARIO ───────────────────────────────────────────────
function formatarData(dataISO) {
  const [ano, mes, dia] = dataISO.split("-");
  return `${dia}/${mes}/${ano}`;
}

// ── HOME-PAGE ────────────────────────────────────────────────
function renderizarCards() {
  const container = document.getElementById("noticias");
  if (!container) return;

  container.innerHTML = "";

  dados.forEach(function (noticia) {
    const card = document.createElement("div");
    card.className = "cartao";

    card.innerHTML =
      '<img class="imagem-do-cartao" src="' + noticia.imagem + '" alt="' + noticia.titulo + '" />' +
      '<section class="corpo-do-cartao">' +
        '<h1 class="titulo-do-cartao">' + noticia.titulo + '</h1>' +
        '<p class="classificacao">' +
          '<span class="categoria-da-noticia">' + noticia.categoria + '</span>' +
          '<span class="data-da-noticia">' + formatarData(noticia.data) + '</span>' +
        '</p>' +
        '<p class="descricao-da-noticia">' + noticia.descricao + '</p>' +
        '<p class="autor-da-noticia">' + noticia.autor + '</p>' +
      '</section>' +
      '<a href="detalhes.html?id=' + noticia.id + '" class="botao-do-cartao">Leia mais</a>';

    container.appendChild(card);
  });
}

// ── PAGINA DE DETALHES ───────────────────────────────────────
function renderizarDetalhes() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  const noticia = dados.find(function (item) {
    return item.id === id;
  });

  if (!noticia) {
    document.getElementById("detalhe-titulo").textContent = "Noticia nao encontrada.";
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
