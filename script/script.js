let nombre, apellido, usuario, email, address, country

let formulario = document.getElementById('form')

formulario.addEventListener ('submit' , (e) => {
    e.preventDefault()
    leerData()

})

function leerData(){
nombre = document.getElementById('firstName').value
apellido = document.getElementById('lastName').value
usuario = document.getElementById('username').value
email = document.getElementById('email').value
address = document.getElementById('address').value
country = document.getElementById('country').value

GuardarLocalStorage(nombre, apellido, usuario, email, address, country)
}

function GuardarLocalStorage (nombre, apellido, usuario, email, address, country){
    localStorage.setItem('Nombre', nombre)
    localStorage.setItem('Apellido', apellido)
    localStorage.setItem('Usuario', usuario)
    localStorage.setItem('Email', email)
    localStorage.setItem('Addres', address)
    localStorage.setItem('country', country)
    ExtraerData()
}

function ExtraerData (){
  let nom = localStorage.getItem('Nombre')
    localStorage.getItem('Apellido')
    localStorage.getItem('Usuario')
    localStorage.getItem('Email')
    localStorage.getItem('Addres')
    localStorage.getItem('country')

    alert('Bienvenido', nom)
}
