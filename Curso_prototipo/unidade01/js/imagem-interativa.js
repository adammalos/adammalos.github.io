function changeImage(buttonNumber) {
    var imageSrc = "";
    switch (buttonNumber) {
        case '01':
            imageSrc = "./image/imagem-int-1.png";
            break;
        case '02':
            imageSrc = "./image/imagem-int-2.png";
            break;
        case '03':
            imageSrc = "./image/imagem-int-3.png";
            break;
        case '04':
            imageSrc = "./image/imagem-int-4.png";
            break;
        // Adicione os casos para os outros botões numerados aqui
        default:
            // Define uma imagem padrão caso não seja encontrada uma correspondência
            imageSrc = "./image/mapa_interativo.png";
            break;
    }
    // Altera o atributo src da imagem com o id "mapaInterativo"
    document.getElementById("mapaInterativo").src = imageSrc;
}