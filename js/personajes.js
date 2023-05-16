class Personaje {
    constructor(nombre, descripcion, caracteristica, imagen) {
        this.nombre = nombre
        this.descripcion = descripcion
        this.caracteristica = caracteristica
        this.imagen = imagen
    }
    
    toHtml() {
        return `
        <div class="card">
            <div class="container-buttons">
                <a href="#" class="corazon" ></a>
                <a href="#" class="Mas" onclick="ver('${this.nombre}')"></a>
            </div>
            <img src="${this.imagen}">
            <p class "tittle_nombres" >${this.nombre}</p>
        </div>
        `
    }
}

const searchInput = document.getElementById('search');

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