function verificarResposta(perguntaId, respostaCorreta, exibirRespostaCorreta) {
    var jaRespondeu = document.getElementById(perguntaId).dataset.jaRespondeu;
    var perguntaElement = document.getElementById(perguntaId);

    var opcaoSelecionada = document.querySelector('#' + perguntaId + ' input[type="radio"]:checked');

    var retorno = perguntaElement.querySelector('.retorno');
    var explicacaoElement = retorno.querySelector('.explicacao');

    retorno.style.display = 'block';

    var resposta = opcaoSelecionada.value;

    if (resposta === respostaCorreta) {
        var comentario = opcaoSelecionada.parentNode.dataset.comentario;
        explicacaoElement.innerHTML = "<span class='bold'>Comentário:</span> " + "<br><br>" + comentario;
        retorno.style.display = 'block';
        opcaoSelecionada.parentNode.classList.add('opcao-correta');
    } else {
        var pergunta = document.getElementById(perguntaId);
        pergunta.classList.add('shake-animation');
        // Adicionar a classe shake-animation-active ao body
        document.body.classList.add('shake-animation-active');

        // Remover a classe shake-animation-active do body após a animação terminar
        setTimeout(function () {
            document.body.classList.remove('shake-animation-active');
        }, 1000);

        var comentarioSelecionado = opcaoSelecionada.parentNode.dataset.comentario;
        if (exibirRespostaCorreta) {
            var opcaoCorreta = document.querySelector('#' + perguntaId + ' input[value="' + respostaCorreta + '"]').parentNode;
            opcaoCorreta.classList.add('opcao-correta');
            if (perguntaId === 'true-and-false') {
                explicacaoElement.innerHTML += "<span class='bold'>A resposta correta é: Falsa</span>";
            } else {
                explicacaoElement.innerHTML += "<span class='bold'>A resposta correta é a alternativa " + respostaCorreta.toUpperCase() + "</span>";
            }
        }
        explicacaoElement.innerHTML += "<br><br><span class='bold'>Comentário:</span> " + "<br><br>" + comentarioSelecionado;
        retorno.style.display = 'block';
        opcaoSelecionada.parentNode.classList.add('opcao-incorreta');
    }

    perguntaElement.dataset.jaRespondeu = "true";

    // Adiciona a classe 'active' para aplicar a animação
    perguntaElement.classList.add('active');

    // Desabilitar seleção das opções após uma resposta ser selecionada
    document.querySelectorAll('#' + perguntaId + ' input[type="radio"]').forEach(function (opcao) {
        opcao.disabled = true;
    });

    // Desativar eventos de clique e hover nas opções de seleção
    document.querySelectorAll('#' + perguntaId + ' .opcoes label').forEach(function (label) {
        label.style.pointerEvents = 'none'; // Desativa o clique
        label.style.cursor = 'default'; // Muda o cursor para o padrão
    });

    // Remover a classe 'active' após 3 segundos
    setTimeout(function () {
        perguntaElement.classList.remove('active');
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
    // Obtém todos os rótulos das opções
    var opcaoLabels = document.querySelectorAll('.opcoes label');

    // Adiciona um evento de clique a cada rótulo
    opcaoLabels.forEach(function(label) {
        label.addEventListener('click', function() {
            // Obtém todos os elementos com a classe .bola
            var bolas = document.querySelectorAll('.bola');

            // Esconde todas as bolas
            bolas.forEach(function(bola) {
                bola.style.display = 'none';
            });

            // Mostra a bola apenas na opção clicada
            var bola = this.querySelector('.bola');
            if (bola) {
                bola.style.display = 'inline'; // ou 'block' dependendo do seu layout
            }
        });
    });
});