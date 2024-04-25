// Adicionar a classe 'clicked' ao <label> quando clicado
function adicionarEventoClique() {
    document.querySelectorAll('.opcoes label').forEach(function(label) {
        label.addEventListener('click', function() {
            // Remover a classe 'clicked' de todos os <label>
            document.querySelectorAll('.opcoes label').forEach(function(label) {
                label.classList.remove('clicked');
            });
            // Adicionar a classe 'clicked' apenas ao <label> clicado
            this.classList.add('clicked');
        });
    });
}

// Adicionar evento de clique e hover após o carregamento da página
window.onload = function() {
    adicionarEventoClique();
};

// Função para desabilitar seleção de opções e eventos de clique e hover após uma resposta
function verificarResposta(perguntaId, respostaCorreta, explicacaoCorreta, exibirRespostaCorreta) {
    var jaRespondeu = document.getElementById(perguntaId).dataset.jaRespondeu;
    
    if (jaRespondeu === "true") {
        mostrarPopup();
        return;
    }

    var opcaoSelecionada = document.querySelector('#' + perguntaId + ' input[type="radio"]:checked');

    var retorno = document.querySelector('#' + perguntaId + ' .retorno');
    var explicacaoElement = retorno.querySelector('.explicacao');

    if (!opcaoSelecionada) {
        alert("Por favor, selecione uma opção.");
        return;
    }

    retorno.style.display = 'block';

    var resposta = opcaoSelecionada.value;

    if (resposta === respostaCorreta) {
        explicacaoElement.innerHTML = "<span class='bold'>Comentário:</span> " + "<br><br>" + explicacaoCorreta;
        opcaoSelecionada.parentNode.classList.add('opcao-correta');
    } else {
        var textoExplicacao = "";
        if (exibirRespostaCorreta) {
            textoExplicacao = "A resposta correta é a alternativa " + respostaCorreta.toUpperCase() + ".<br><br>";
            opcaoSelecionada.parentNode.classList.add('resposta-correta');
        } else {
            textoExplicacao = "Resposta certa: Incorreta.<br><br>";
            opcaoSelecionada.parentNode.classList.add('resposta-incorreta');
        }
        textoExplicacao += "<span class='bold'>Comentário:</span> " + "<br><br>" + explicacaoCorreta;
        explicacaoElement.innerHTML = textoExplicacao;
        retorno.style.display = 'block';
        opcaoSelecionada.parentNode.classList.add('opcao-incorreta');
        document.querySelector('#' + perguntaId + ' input[value="' + respostaCorreta + '"]').parentNode.classList.add('opcao-correta');
        
        // Adicionar a classe shake-animation ao elemento da pergunta
        var pergunta = document.getElementById(perguntaId);
        pergunta.classList.add('shake-animation');
        
        // Adicionar a classe shake-animation-active ao body
        document.body.classList.add('shake-animation-active');
        
        // Remover a classe shake-animation-active do body após a animação terminar
        setTimeout(function() {
            document.body.classList.remove('shake-animation-active');
        }, 1000); // Tempo de espera deve ser igual ao tempo da animação de agitação em milissegundos
    }

    document.getElementById(perguntaId).dataset.jaRespondeu = "true";

    // Desabilitar seleção das opções após uma resposta ser selecionada
    document.querySelectorAll('#' + perguntaId + ' input[type="radio"]').forEach(function(opcao) {
        opcao.disabled = true;
    });

    // Desativar eventos de clique e hover nas opções de seleção
    document.querySelectorAll('#' + perguntaId + ' .opcoes label').forEach(function(label) {
        label.removeEventListener('click', adicionarEventoClique);
        label.style.pointerEvents = 'none'; // Desativa o clique
        label.style.cursor = 'default'; // Muda o cursor para o padrão
    });
}