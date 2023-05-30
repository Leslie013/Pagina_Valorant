// Obtener los personajes favoritos del localStorage
const favorites = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [];

// Obtener el div donde se mostrará la lista de personajes favoritos
const characterList = document.getElementById('characterList');

// Iterar sobre cada personaje favorito y crear la tarjeta correspondiente
favorites.forEach(agent => {
  // Crear el elemento de la tarjeta
  const card = document.createElement('div');
  card.classList.add('card');
// Obtener el campo de búsqueda
const searchInput = document.getElementById('searchInput');

// Agregar un evento de escucha para el evento 'input'
searchInput.addEventListener('input', function() {
  const searchValue = searchInput.value.toLowerCase(); // Obtener el valor de búsqueda en minúsculas

  // Iterar sobre cada tarjeta y mostrar o ocultar según el valor de búsqueda
  const cards = document.getElementsByClassName('card');
  Array.from(cards).forEach(card => {
    const name = card.querySelector('p').textContent.toLowerCase(); // Obtener el nombre del personaje en minúsculas

    if (name.includes(searchValue)) {
      card.style.display = 'block'; // Mostrar la tarjeta si el nombre coincide
    } else {
      card.style.display = 'none'; // Ocultar la tarjeta si el nombre no coincide
    }
  });
});

  // Crear la imagen del personaje
  const image = document.createElement('img');
  image.src = agent.displayIcon;
  image.alt = agent.displayName;

  // Verificar si la imagen carga correctamente
  image.onerror = function () {
    card.parentNode.removeChild(card); // Eliminar la tarjeta completa
  };

  // Crear el nombre del personaje
  const name = document.createElement('p');
  name.textContent = agent.displayName;

  // Crear el icono de favorito
  const favoriteIcon = document.createElement('i');
  favoriteIcon.classList.add('fa', 'fa-heart', 'favorite-icon', 'red');
  favoriteIcon.addEventListener('click', function(event) {
    event.stopPropagation(); // Evitar que el clic se propague al contenedor de la tarjeta
    toggleFavorite(favoriteIcon);
  });

  // Crear el icono de saber más
  const infoIcon = document.createElement('i');
  infoIcon.classList.add('fas', 'fa-plus-circle', 'info-icon');
  infoIcon.addEventListener('click', function(event) {
    event.stopPropagation(); // Evitar que el clic se propague al contenedor de la tarjeta
    showModal(agent);
  });

  // Crear la columna de iconos
  const iconColumn = document.createElement('div');
  iconColumn.classList.add('icon-column');

  // Agregar los iconos a la columna
  iconColumn.appendChild(favoriteIcon);
  iconColumn.appendChild(infoIcon);

  // Agregar la imagen, el nombre y la columna de iconos a la tarjeta
  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(iconColumn);

  // Agregar la tarjeta al div de la lista de personajes favoritos
  characterList.appendChild(card);
});

// Función para alternar el estado de favorito
function toggleFavorite(icon) {
  icon.classList.toggle('red'); // Agregar o quitar la clase 'red' al icono
}

// Función para mostrar el modal con la información del personaje
function showModal(agent) {
  // Obtener el div del modal
  const modalContainer = document.getElementById('modalContainer');

  // Crear el contenido del modal con la información del personaje
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  modalContent.innerHTML = `
    <h2>${agent.displayName}</h2>
    <img src="${agent.fullPortrait}" alt="${agent.displayName}">
    <p>${agent.description}</p>
    <span class="close-icon">&times; Cerrar</span>
  `;

  // Agregar el contenido del modal al contenedor del modal
  modalContainer.innerHTML = '';
  modalContainer.appendChild(modalContent);

  // Mostrar el modal
  modalContainer.style.display = 'flex';

  // Obtener la referencia al elemento de cierre del modal
  const closeIcon = modalContainer.querySelector('.close-icon');

  // Agregar evento de clic al elemento de cierre del modal
  closeIcon.addEventListener('click', function() {
    closeModal();
  });
}

// Función para cerrar el modal
function closeModal() {
  const modalContainer = document.getElementById('modalContainer');
  modalContainer.style.display = 'none';
}
