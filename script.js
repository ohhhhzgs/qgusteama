// Contador de intentos
let clickCount = 0;

// Función para mostrar la frase "TE AMO MI CHUNI" en una posición aleatoria
function showLoveMessage() {
  clickCount++; // Incrementar el contador de clics
  const loveContainer = document.createElement('div');
  loveContainer.classList.add('love-message');
  loveContainer.textContent = "TE AMO MI CHUNI";

  // Posición aleatoria en la pantalla
  const x = Math.random() * (window.innerWidth - 200); // Ajustar el ancho del mensaje
  const y = Math.random() * (window.innerHeight - 30); // Ajustar la altura del mensaje
  loveContainer.style.left = x + 'px';
  loveContainer.style.top = y + 'px';

  // Agregar la frase al cuerpo del documento
  document.body.appendChild(loveContainer);

  // Si se han realizado 10 intentos, mostrar la lluvia de corazones
  if (clickCount === 10) {
    showHeartRain();
  }
}

// Función para mostrar la lluvia de corazones
function showHeartRain() {
  // Crear la lluvia de corazones
  const heartRainContainer = document.createElement('div');
  heartRainContainer.classList.add('heart-rain-container');
  document.body.appendChild(heartRainContainer);

  // Crear los corazones y agregarlos al contenedor
  for (let i = 0; i < 100; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animationDelay = Math.random() * 5 + 's'; // Retardo aleatorio para la animación
    heartRainContainer.appendChild(heart);
  }

  // Eliminar el botón después de mostrar la lluvia de corazones
  loveButton.style.display = 'none';
}

// Botón de amor
const loveButton = document.getElementById('love-button');
loveButton.textContent = 'TOCAME'; // Cambiar el texto del botón
loveButton.addEventListener('click', showLoveMessage);
