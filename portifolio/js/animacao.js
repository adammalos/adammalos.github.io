// Evento para quando a página perde o foco
window.addEventListener('blur', function() {
  // Verifica se o botão de mute não está em modo mudo
  var toggleButton = document.getElementById('toggleSoundButton');
  if (!toggleButton.classList.contains('sound-mute')) {
      // Simula um clique no botão de mute
      toggleButton.click();
  }
});

// Adiciona a classe 'glitch' inicialmente
var hero = document.getElementById("hero");
hero.classList.add("glitch");

// Variável para controlar se o glitchSound deve ser reproduzido ou não
var shouldPlayGlitchSound = false;

// Ativa a função a cada x segundos
setInterval(toggleGlitch, 6000);

// Botão Mute Toggle
$(document).on('click', '.toggle-sound', function (e) {
  $(this).toggleClass('sound-mute');
  toggleAudio(); // Chama a função para pausar ou reproduzir os áudios imediatamente
});

// Função para alternar a classe e reproduzir os áudios
function toggleGlitch() {
  var hero = document.getElementById("hero");
  hero.classList.toggle("glitch");

  // Verifica se a classe 'glitch' está presente
  if (hero.classList.contains("glitch")) {
    shouldPlayGlitchSound = true; // Define para reproduzir o glitchSound
    toggleAudio(); // Chama a função para pausar ou reproduzir os áudios imediatamente
  } else {
    shouldPlayGlitchSound = false; // Define para não reproduzir o glitchSound
  }
}

// Função para pausar ou reproduzir os áudios com base na classe 'sound-mute'
function toggleAudio() {
  var glitchSound = document.getElementById("glitchSound");
  var cyberpunkSound = document.getElementById("cyberpunkSound");
  
  // Verifica se a classe 'sound-mute' está presente
  if (document.getElementById("toggleSoundButton").classList.contains("sound-mute")) {
    glitchSound.pause(); // Pausa o áudio
    cyberpunkSound.pause(); // Pausa o áudio
  } else {
    // Reproduz o áudio apenas se a variável shouldPlayGlitchSound for verdadeira
    if (shouldPlayGlitchSound) {
      glitchSound.play(); // Reproduz o áudio
      glitchSound.volume = 0.03;
    }
    cyberpunkSound.play(); // Reproduz o áudio
    cyberpunkSound.volume = 0.04; 
  }
}