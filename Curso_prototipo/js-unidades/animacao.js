// Adiciona o tooltips do bootstrap
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
// Animacao para virar o card
function virar_card(card) {
  console.log(card);
  card.classList.toggle("is-flipped");
  card.classList.toggle("not-flipped");
}
// Alteracao de dados por click no botao
const dados = {
  1: {
    titulo_imagem: "Figura 1 - Mapa global com a localização dos casos de mpox até 28 de dezembro de 2022. \
    Círculos alaranjados indicam os países sem histórico de mpox, e os azuis os países com histórico de mpox",
    url_imagem: "./image/mapa_01.png",
    fonte_imagem: "Fonte: Centers for Disease Control and Prevention (2022a).",
    dados_texto: "O surto de mpox atingiu muitos países em todo o mundo.\
    A partir de maio de 2022,houve uma transmissão mais abrangente do vírus, uma distribuição geográfica mais ampla de casos\
    e casos com sinais e sintomas diferentes dos casos endêmicos da África.\n\n\
    O primeiro caso identificado de mpox foi em 6 de maio de 2022 no Reino Unido e até\
    28 de dezembro de 2022 foram confirmados no mundo - em 110 países - 83.539 casos de mpox, com 74\
    mortes distribuídas em 18 países (CDC, 2022a). Acompanhe na Figura 1 os locais com maior número\
    de casos de mpox no mundo, que estão marcados no mapa com círculos de maior diâmetro.",
    saiba_mais_texto: "Você pode acessar os dados e mapas atualizados na página do Centro de Controle e Prevenção de Doenças (do inglês: Centers for Disease Control and Prevention - CDC) no sítio eletrônico",
    saiba_mais_link: "https://www.cdc.gov/poxvirus/monkeypox/response/2022/world-map.html"
  },
  2: {
    titulo_imagem: "Figura 2 - Casos confirmados de mpox no mundo, segundo média móvel, \
    considerando os últimos sete dias - Maio a Dezembro de 2022",
    url_imagem: "./image/mapa_02.png",
    fonte_imagem: "Fonte: Our World Data (2022).",
    dados_texto: "O número de casos no mundo aumentou progressivamente até agosto de 2022, \
    com predomínio de casos na Europa até início de junho, mas depois desse período esse cenário \
    mudou para as Américas. A partir de agosto de 2022, observa-se uma queda na “média móvel dos últimos \
    7 dias” no mundo, como demonstra a Figura 2.",
    saiba_mais_texto: "Para saber mais sobre os números atualizados da Mpox no mundo, consulte também:",
    saiba_mais_link: "https://www.who.int/emergencies/disease-outbreak-news/item/2022-DON393"
  },
  3: {
    titulo_imagem: "Figura 3 - Casos confirmados de Mpox no Brasil e no Mundo segundo média móvel, \
    considerando os últimos sete dias - Maio a Dezembro de 2022",
    url_imagem: "./image/mapa_03.png",
    fonte_imagem: "Fonte: Our World Data (2022).",
    dados_texto: "A distribuição de casos no Brasil segue a mesma curva observada no mundo e em outros países \
    com grande número de casos, como os Estados Unidos da América. Podemos observar a similaridade \
    nas curvas de distribuição da doença no país e no mundo na Figura 3."
  }
}

const elementosDOM = {
  tituloImagem: document.querySelector('#titulo_imagem'),
  urlImagem: document.querySelector('#url_imagem'),
  fonteImagem: document.querySelector('#fonte_imagem'),
  urlImagemModal: document.querySelector('#url_imagem_modal'),
  dadosTexto: document.querySelector('#dados_texto'),
  saibaMais: document.querySelector('#dados_saiba_mais'),
  saibaMaisTexto: document.querySelector('#saiba_mais_texto'),
  saibaMaisLink: document.querySelector('#saiba_mais_link'),
  imagem_saiba_mais: document.querySelector('#imagem_saiba_mais')
};

function alterar_dados(botao, parametro) {
  elementosDOM.tituloImagem.innerText = dados[parametro].titulo_imagem;
  elementosDOM.urlImagem.src = dados[parametro].url_imagem;
  elementosDOM.fonteImagem.innerText = dados[parametro].fonte_imagem;
  elementosDOM.urlImagemModal.src = dados[parametro].url_imagem;
  elementosDOM.dadosTexto.innerText = dados[parametro].dados_texto;
  if (dados[parametro].saiba_mais_texto) {
    elementosDOM.imagem_saiba_mais.classList.add('d-none')
    elementosDOM.saibaMais.classList.remove('d-none')
    elementosDOM.saibaMaisTexto.innerText = dados[parametro].saiba_mais_texto;
    elementosDOM.saibaMaisLink.innerText = dados[parametro].saiba_mais_link;
    elementosDOM.saibaMaisLink.href = dados[parametro].saiba_mais_link;
  } else {
    elementosDOM.saibaMais.classList.add('d-none')
    elementosDOM.imagem_saiba_mais.classList.remove('d-none')
    
  }

  
  btn = document.querySelector('.btn-dados.active'),
  btn.classList.remove('active');
  botao.classList.add('active');
};


// Mostrar resposta ao clicar no botao
function alterar_resposta(btn, id) {
  resposta = document.getElementById(id);
  if(resposta.classList.contains('d-none')) {
    resposta.classList.remove('d-none');
    btn.innerText = 'X'
  } else {
    resposta.classList.add('d-none');
    btn.innerText = 'Ver resposta'
  }
}
// Fechar o modulo ao clicar no botao de sair
function sair(){
  if(confirm('Deseja mesmo sair?')) {
    window.close();
  }
}
 // Mostra a legenda na estrutura MPOX
function mostrar_legenda(id){
  legenda = document.getElementById(id);
  legenda.classList.toggle('d-none');
  legenda.classList.toggle('d-block');
}

const elements = document.querySelectorAll('[data-animation]');

function handleScroll() {
  const screenPosition = window.innerHeight / 1.5;

  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    if (elementPosition < screenPosition && elementBottom > 0) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', handleScroll);





