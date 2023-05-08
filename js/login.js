//Si el usuario ya esta logueado se redirecciona a la página principal
const loggedUser = localStorage.getItem("loggedUser")
if(loggedUser !== null) {
    window.location.href = "../main_page/main_page.html"
}

class User {
    show(email) {
        let exist = dataUser.filter(obj => obj.email == email);
        this.name = exist.name
        this.email = exist.email
        this.password = exist.password
        this.birthday = exist.birthday
    }

    //Crea un nuevo registro
    add(name, email, password, birthday){
        const user = {
            name: name,
            email: email,
            password: password,
            birthday: birthday
        }
        const userString = JSON.stringify(user)
        localStorage.setItem("userData", userString)
    }

    //Modifica la información de un json existente
    update(email){

    }

    toHtml() {
        return `
        <div class="card">
            <p><b>${this.name}</b></p>
            <img src="${this.email}" alt="personaje"/>
            <p>${this.birthday}</p>
        </div>
        `
    }
}
