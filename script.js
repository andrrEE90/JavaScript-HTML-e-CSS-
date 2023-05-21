window.onload = function() {
    const playButton = document.getElementById('playButton');
    const video = document.getElementById('Video');
    const overlayImage = document.getElementById('overlayImage');
  
    playButton.addEventListener('click', function() {
      video.play();
      overlayImage.style.display = 'none';
    });
  };
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.querySelector(".menu");

  // Obtém os elementos dos botões
var playButton = document.getElementById("playButton");
var pauseButton = document.getElementById("pauseButton");
var stopButton = document.getElementById("stopButton");
var video = document.getElementById("Video");

// Adiciona os eventos de clique aos botões
playButton.addEventListener("click", function() {
  video.play();
});

pauseButton.addEventListener("click", function() {
  video.pause();
});

stopButton.addEventListener("click", function() {
  video.pause();
  video.currentTime = 0;
});

// Adiciona um evento de clique ao ícone do menu
menuToggle.addEventListener("click", function() {
  // Verifica se o menu está marcado como "checked"
  if (menuToggle.checked) {
    // Se estiver marcado, exibe o menu
    menu.style.display = "block";
  } else {
    // Caso contrário, oculta o menu
    menu.style.display = "none";
  }
});

// CARROSEL
var carousel = document.querySelector('.carousel');
var items = carousel.querySelectorAll('.item');
var currentIndex = 0;
var interval = setInterval(nextSlide, 3000); // Tempo de exibição de cada item (em milissegundos)

function nextSlide() {
  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % items.length;
  items[currentIndex].classList.add('active');
  carousel.scrollLeft += items[currentIndex].offsetWidth + 10; // Espaçamento entre os itens
}

// Parar o carrossel quando o mouse estiver sobre ele
carousel.addEventListener('mouseenter', function() {
  clearInterval(interval);
});

// Reiniciar o carrossel quando o mouse sair dele
carousel.addEventListener('mouseleave', function() {
  interval = setInterval(nextSlide, 3000);
});



  