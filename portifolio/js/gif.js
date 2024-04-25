function trocarImagem(id, novoSrc) {
    var imagem = document.getElementById(id); // Obtém o elemento da imagem pelo ID
    
    // Função para trocar a imagem para o novoSrc
    function trocarParaNovoSrc() {
        imagem.src = novoSrc;
    }
    
    // Função para trocar a imagem de volta para o src original
    function trocarParaOriginalSrc() {
        imagem.src = imagem.dataset.originalSrc; // Obtém o src original do dataset
    }
    
    // Adiciona um ouvinte de evento para o mouseover
    imagem.addEventListener("mouseover", trocarParaNovoSrc);
    
    // Adiciona um ouvinte de evento para o mouseout
    imagem.addEventListener("mouseout", trocarParaOriginalSrc);
    
    // Salva o src original da imagem no dataset
    imagem.dataset.originalSrc = imagem.src;
}

// Chamar a função para trocar a imagem quando o mouse estiver sobre ela para gif1
trocarImagem("gif1", "./gifs/curso.gif");
trocarImagem("gif2", "./gifs/test.gif");
