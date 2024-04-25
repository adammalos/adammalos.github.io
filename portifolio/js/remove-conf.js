function removerEstilos(id) {
    var elemento = document.getElementById(id);
    if (elemento) {
      elemento.classList.add('conf-2'); // Adicionar classe para transição
      elemento.style.color = 'inherit'; // Usar a cor padrão do pai
    } else {
      console.error('Elemento não encontrado com o ID:', id);
    }
  }