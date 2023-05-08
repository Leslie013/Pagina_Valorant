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