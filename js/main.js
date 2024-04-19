// Juan Pablo Ojeda
// PreEntrega2+Ojeda

welcome()
// Funcion de bienvenida
function welcome() {
    alert("Bienvenidos a Zapatillas Center\nLe solicitamos que inicie sesión\n\nUtilice las siguientes credenciales\nUsuario: JuanPablo\nContraseña: CoderHouse")
    let name = login()
    //options(name, 0)
    buscar()
}
// Función de login
function login() {
    const userdb = [
        { user: "JuanPablo", pass: "CoderHouse", name: "Juan Pablo" },
        { user: "Santi01", pass: "CoderHouse1", name: "Santiago" },
        { user: "Ana02", pass: "CoderHouse2", name: "Ana" },
        { user: "1", pass: "1", name: "Test" }
    ]

    let count = 0

    do {
        let inputUser = prompt("Ingresar tu nombre de usuario:")
        let inputPass = prompt("Ingresa tu contraseña:")
        count++

        let userFind = userdb.find(user => user.user === inputUser)

        if (userFind && userFind.pass === inputPass) {
            return userFind.name
        } else {
            alert("Usuario y/o contraseña incorrecta")
        }

    } while (count < 3)

    alert("Número máximo de intentos alcanzado. Intente más tarde.")
    errorLogin()
}


function buscar() {
    // Base de datos calzado
    const productodb = [
        { id: 0, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 38, color: "Negro", tipo: "calzado deportivo", genero: "Hombre", precio: 125000 },
        { id: 1, nombre: "Nike Air Max 270", marca: "Nike", talle: 38, color: "Rojo", tipo: "calzado deportivo", genero: "Hombre", precio: 135000 },
        { id: 2, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 38, color: "Verde", tipo: "calzado casual", genero: "Hombre", precio: 110000 },
        { id: 3, nombre: "Puma Future Rider", marca: "Puma", talle: 38, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 115000 },
        { id: 4, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 90000 },
        { id: 5, nombre: "Vans Old Skool", marca: "Vans", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000 },
        { id: 6, nombre: "New Balance 574", marca: "New Balance", talle: 38, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 120000 },
        { id: 7, nombre: "Adidas Superstar", marca: "Adidas", talle: 38, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 130000 },
        { id: 8, nombre: "Nike Air Force 1", marca: "Nike", talle: 38, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 140000 },
        { id: 9, nombre: "Reebok Club C 85", marca: "Reebok", talle: 38, color: "Azul", tipo: "calzado casual", genero: "Hombre", precio: 100000 },
        { id: 10, nombre: "Puma Suede Classic", marca: "Puma", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000 },
        { id: 11, nombre: "Converse One Star", marca: "Converse", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 85000 },
        { id: 12, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 105000 },
        { id: 13, nombre: "New Balance 990v5", marca: "New Balance", talle: 38, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 150000 },
        { id: 14, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 38, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 160000 },
        { id: 15, nombre: "Nike React Infinity Run", marca: "Nike", talle: 38, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 145000 },
        { id: 16, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 38, color: "Azul", tipo: "calzado deportivo", genero: "Hombre", precio: 130000 },
        { id: 17, nombre: "Puma RS-X3", marca: "Puma", talle: 38, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 110000 },
        { id: 18, nombre: "Converse Jack Purcell", marca: "Converse", talle: 38, color: "Gris", tipo: "calzado casual", genero: "Hombre", precio: 90000 },
        { id: 19, nombre: "Vans Authentic", marca: "Vans", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 80000 },
        { id: 20, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 39, color: "Negro", tipo: "calzado deportivo", genero: "Hombre", precio: 125000 },
        { id: 21, nombre: "Nike Air Max 270", marca: "Nike", talle: 39, color: "Rojo", tipo: "calzado deportivo", genero: "Hombre", precio: 135000 },
        { id: 22, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 39, color: "Verde", tipo: "calzado casual", genero: "Hombre", precio: 110000 },
        { id: 23, nombre: "Puma Future Rider", marca: "Puma", talle: 39, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 115000 },
        { id: 24, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 90000 },
        { id: 25, nombre: "Vans Old Skool", marca: "Vans", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000 },
        { id: 26, nombre: "New Balance 574", marca: "New Balance", talle: 39, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 120000 },
        { id: 27, nombre: "Adidas Superstar", marca: "Adidas", talle: 39, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 130000 },
        { id: 28, nombre: "Nike Air Force 1", marca: "Nike", talle: 39, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 140000 },
        { id: 29, nombre: "Reebok Club C 85", marca: "Reebok", talle: 39, color: "Azul", tipo: "calzado casual", genero: "Hombre", precio: 100000 },
        { id: 30, nombre: "Puma Suede Classic", marca: "Puma", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000 },
        { id: 31, nombre: "Converse One Star", marca: "Converse", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 85000 },
        { id: 32, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 105000 },
        { id: 33, nombre: "New Balance 990v5", marca: "New Balance", talle: 39, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 150000 },
        { id: 34, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 39, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 160000 },
        { id: 35, nombre: "Nike React Infinity Run", marca: "Nike", talle: 39, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 145000 },
        { id: 36, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 39, color: "Azul", tipo: "calzado deportivo", genero: "Hombre", precio: 130000 },
        { id: 37, nombre: "Puma RS-X3", marca: "Puma", talle: 39, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 110000 },
        { id: 38, nombre: "Converse Jack Purcell", marca: "Converse", talle: 39, color: "Gris", tipo: "calzado casual", genero: "Hombre", precio: 90000 },
        { id: 39, nombre: "Vans Authentic", marca: "Vans", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 80000 },
        { id: 40, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 40, color: "Negro", tipo: "calzado deportivo", genero: "Hombre", precio: 125000 },
        { id: 41, nombre: "Nike Air Max 270", marca: "Nike", talle: 40, color: "Rojo", tipo: "calzado deportivo", genero: "Hombre", precio: 135000 },
        { id: 42, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 40, color: "Verde", tipo: "calzado casual", genero: "Hombre", precio: 110000 },
        { id: 43, nombre: "Puma Future Rider", marca: "Puma", talle: 40, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 115000 },
        { id: 44, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 90000 },
        { id: 45, nombre: "Vans Old Skool", marca: "Vans", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000 },
        { id: 46, nombre: "New Balance 574", marca: "New Balance", talle: 40, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 120000 },
        { id: 47, nombre: "Adidas Superstar", marca: "Adidas", talle: 40, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 130000 },
        { id: 48, nombre: "Nike Air Force 1", marca: "Nike", talle: 40, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 140000 },
        { id: 49, nombre: "Reebok Club C 85", marca: "Reebok", talle: 40, color: "Azul", tipo: "calzado casual", genero: "Hombre", precio: 100000 },
        { id: 50, nombre: "Puma Suede Classic", marca: "Puma", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000 },
        { id: 51, nombre: "Converse One Star", marca: "Converse", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 85000 },
        { id: 52, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 105000 },
        { id: 53, nombre: "New Balance 990v5", marca: "New Balance", talle: 40, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 150000 },
        { id: 54, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 40, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 160000 },
        { id: 55, nombre: "Nike React Infinity Run", marca: "Nike", talle: 40, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 145000 },
        { id: 56, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 40, color: "Azul", tipo: "calzado deportivo", genero: "Hombre", precio: 130000 },
        { id: 57, nombre: "Puma RS-X3", marca: "Puma", talle: 40, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 110000 },
        { id: 58, nombre: "Converse Jack Purcell", marca: "Converse", talle: 40, color: "Gris", tipo: "calzado casual", genero: "Hombre", precio: 90000 },
        { id: 59, nombre: "Vans Authentic", marca: "Vans", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 80000 },
        { id: 60, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 41, color: "Negro", tipo: "calzado deportivo", genero: "Hombre", precio: 125000 },
        { id: 61, nombre: "Nike Air Max 270", marca: "Nike", talle: 41, color: "Rojo", tipo: "calzado deportivo", genero: "Hombre", precio: 135000 },
        { id: 62, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 41, color: "Verde", tipo: "calzado casual", genero: "Hombre", precio: 110000 },
        { id: 63, nombre: "Puma Future Rider", marca: "Puma", talle: 41, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 115000 },
        { id: 64, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 90000 },
        { id: 65, nombre: "Vans Old Skool", marca: "Vans", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000 },
        { id: 66, nombre: "New Balance 574", marca: "New Balance", talle: 41, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 120000 },
        { id: 67, nombre: "Adidas Superstar", marca: "Adidas", talle: 41, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 130000 },
        { id: 68, nombre: "Nike Air Force 1", marca: "Nike", talle: 41, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 140000 },
        { id: 69, nombre: "Reebok Club C 85", marca: "Reebok", talle: 41, color: "Azul", tipo: "calzado casual", genero: "Hombre", precio: 100000 },
        { id: 70, nombre: "Puma Suede Classic", marca: "Puma", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000 },
        { id: 71, nombre: "Converse One Star", marca: "Converse", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 85000 },
        { id: 72, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 105000 },
        { id: 73, nombre: "New Balance 990v5", marca: "New Balance", talle: 41, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 150000 },
        { id: 74, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 41, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 160000 },
        { id: 75, nombre: "Nike React Infinity Run", marca: "Nike", talle: 41, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 145000 },
        { id: 76, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 41, color: "Azul", tipo: "calzado deportivo", genero: "Hombre", precio: 130000 },
        { id: 77, nombre: "Puma RS-X3", marca: "Puma", talle: 41, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 110000 },
        { id: 78, nombre: "Converse Jack Purcell", marca: "Converse", talle: 41, color: "Gris", tipo: "calzado casual", genero: "Hombre", precio: 90000 },
        { id: 79, nombre: "Vans Authentic", marca: "Vans", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 80000 },
        { id: 80, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 42, color: "Negro", tipo: "calzado deportivo", genero: "Hombre", precio: 125000 },
        { id: 81, nombre: "Nike Air Max 270", marca: "Nike", talle: 42, color: "Rojo", tipo: "calzado deportivo", genero: "Hombre", precio: 135000 },
        { id: 82, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 42, color: "Verde", tipo: "calzado casual", genero: "Hombre", precio: 110000 },
        { id: 83, nombre: "Puma Future Rider", marca: "Puma", talle: 42, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 115000 },
        { id: 84, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 90000 },
        { id: 85, nombre: "Vans Old Skool", marca: "Vans", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000 },
        { id: 86, nombre: "New Balance 574", marca: "New Balance", talle: 42, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 120000 },
        { id: 87, nombre: "Adidas Superstar", marca: "Adidas", talle: 42, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 130000 },
        { id: 88, nombre: "Nike Air Force 1", marca: "Nike", talle: 42, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 140000 },
        { id: 89, nombre: "Reebok Club C 85", marca: "Reebok", talle: 42, color: "Azul", tipo: "calzado casual", genero: "Hombre", precio: 100000 },
        { id: 90, nombre: "Puma Suede Classic", marca: "Puma", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000 },
        { id: 91, nombre: "Converse One Star", marca: "Converse", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 85000 },
        { id: 92, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 105000 },
        { id: 93, nombre: "New Balance 990v5", marca: "New Balance", talle: 42, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 150000 },
        { id: 94, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 42, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 160000 },
        { id: 95, nombre: "Nike React Infinity Run", marca: "Nike", talle: 42, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 145000 },
        { id: 96, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 42, color: "Azul", tipo: "calzado deportivo", genero: "Hombre", precio: 130000 },
        { id: 97, nombre: "Puma RS-X3", marca: "Puma", talle: 42, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 110000 },
        { id: 98, nombre: "Converse Jack Purcell", marca: "Converse", talle: 42, color: "Gris", tipo: "calzado casual", genero: "Hombre", precio: 90000 },
        { id: 99, nombre: "Vans Authentic", marca: "Vans", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 80000 },
        { id: 100, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 43, color: "Negro", tipo: "calzado deportivo", genero: "Hombre", precio: 125000 },
        { id: 101, nombre: "Nike Air Max 270", marca: "Nike", talle: 43, color: "Rojo", tipo: "calzado deportivo", genero: "Hombre", precio: 135000 },
        { id: 102, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 43, color: "Verde", tipo: "calzado casual", genero: "Hombre", precio: 110000 },
        { id: 103, nombre: "Puma Future Rider", marca: "Puma", talle: 43, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 115000 },
        { id: 104, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 90000 },
        { id: 105, nombre: "Vans Old Skool", marca: "Vans", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000 },
        { id: 106, nombre: "New Balance 574", marca: "New Balance", talle: 43, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 120000 },
        { id: 107, nombre: "Adidas Superstar", marca: "Adidas", talle: 43, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 130000 },
        { id: 108, nombre: "Nike Air Force 1", marca: "Nike", talle: 43, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 140000 },
        { id: 109, nombre: "Reebok Club C 85", marca: "Reebok", talle: 43, color: "Azul", tipo: "calzado casual", genero: "Hombre", precio: 100000 },
        { id: 110, nombre: "Puma Suede Classic", marca: "Puma", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000 },
        { id: 111, nombre: "Converse One Star", marca: "Converse", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 85000 },
        { id: 112, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 105000 },
        { id: 113, nombre: "New Balance 990v5", marca: "New Balance", talle: 43, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 150000 },
        { id: 114, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 43, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 160000 },
        { id: 115, nombre: "Nike React Infinity Run", marca: "Nike", talle: 43, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 145000 },
        { id: 116, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 43, color: "Azul", tipo: "calzado deportivo", genero: "Hombre", precio: 130000 },
        { id: 117, nombre: "Puma RS-X3", marca: "Puma", talle: 43, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 110000 },
        { id: 118, nombre: "Converse Jack Purcell", marca: "Converse", talle: 43, color: "Gris", tipo: "calzado casual", genero: "Hombre", precio: 90000 },
        { id: 119, nombre: "Vans Authentic", marca: "Vans", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 80000 },
        { id: 120, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 44, color: "Negro", tipo: "calzado deportivo", genero: "Hombre", precio: 125000 },
        { id: 121, nombre: "Nike Air Max 270", marca: "Nike", talle: 44, color: "Rojo", tipo: "calzado deportivo", genero: "Hombre", precio: 135000 },
        { id: 122, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 44, color: "Verde", tipo: "calzado casual", genero: "Hombre", precio: 110000 },
        { id: 123, nombre: "Puma Future Rider", marca: "Puma", talle: 44, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 115000 },
        { id: 124, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 90000 },
        { id: 125, nombre: "Vans Old Skool", marca: "Vans", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000 },
        { id: 126, nombre: "New Balance 574", marca: "New Balance", talle: 44, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 120000 },
        { id: 127, nombre: "Adidas Superstar", marca: "Adidas", talle: 44, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 130000 },
        { id: 128, nombre: "Nike Air Force 1", marca: "Nike", talle: 44, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 140000 },
        { id: 129, nombre: "Reebok Club C 85", marca: "Reebok", talle: 44, color: "Azul", tipo: "calzado casual", genero: "Hombre", precio: 100000 },
        { id: 130, nombre: "Puma Suede Classic", marca: "Puma", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000 },
        { id: 131, nombre: "Converse One Star", marca: "Converse", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 85000 },
        { id: 132, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 105000 },
        { id: 133, nombre: "New Balance 990v5", marca: "New Balance", talle: 44, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 150000 },
        { id: 134, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 44, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 160000 },
        { id: 135, nombre: "Nike React Infinity Run", marca: "Nike", talle: 44, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 145000 },
        { id: 136, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 44, color: "Azul", tipo: "calzado deportivo", genero: "Hombre", precio: 130000 },
        { id: 137, nombre: "Puma RS-X3", marca: "Puma", talle: 44, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 110000 },
        { id: 138, nombre: "Converse Jack Purcell", marca: "Converse", talle: 44, color: "Gris", tipo: "calzado casual", genero: "Hombre", precio: 90000 },
        { id: 139, nombre: "Vans Authentic", marca: "Vans", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 80000 },
        { id: 140, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 38, color: "Negro", tipo: "calzado deportivo", genero: "Mujer", precio: 125000 },
        { id: 141, nombre: "Nike Air Max 270", marca: "Nike", talle: 38, color: "Rojo", tipo: "calzado deportivo", genero: "Mujer", precio: 135000 },
        { id: 142, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 38, color: "Verde", tipo: "calzado casual", genero: "Mujer", precio: 110000 },
        { id: 143, nombre: "Puma Future Rider", marca: "Puma", talle: 38, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 115000 },
        { id: 144, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 90000 },
        { id: 145, nombre: "Vans Old Skool", marca: "Vans", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000 },
        { id: 146, nombre: "New Balance 574", marca: "New Balance", talle: 38, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 120000 },
        { id: 147, nombre: "Adidas Superstar", marca: "Adidas", talle: 38, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 130000 },
        { id: 148, nombre: "Nike Air Force 1", marca: "Nike", talle: 38, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 140000 },
        { id: 149, nombre: "Reebok Club C 85", marca: "Reebok", talle: 38, color: "Azul", tipo: "calzado casual", genero: "Mujer", precio: 100000 },
        { id: 150, nombre: "Puma Suede Classic", marca: "Puma", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000 },
        { id: 151, nombre: "Converse One Star", marca: "Converse", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 85000 },
        { id: 152, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 105000 },
        { id: 153, nombre: "New Balance 990v5", marca: "New Balance", talle: 38, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 150000 },
        { id: 154, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 38, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 160000 },
        { id: 155, nombre: "Nike React Infinity Run", marca: "Nike", talle: 38, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 145000 },
        { id: 156, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 38, color: "Azul", tipo: "calzado deportivo", genero: "Mujer", precio: 130000 },
        { id: 157, nombre: "Puma RS-X3", marca: "Puma", talle: 38, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 110000 },
        { id: 158, nombre: "Converse Jack Purcell", marca: "Converse", talle: 38, color: "Gris", tipo: "calzado casual", genero: "Mujer", precio: 90000 },
        { id: 159, nombre: "Vans Authentic", marca: "Vans", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 80000 },
        { id: 160, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 39, color: "Negro", tipo: "calzado deportivo", genero: "Mujer", precio: 125000 },
        { id: 161, nombre: "Nike Air Max 270", marca: "Nike", talle: 39, color: "Rojo", tipo: "calzado deportivo", genero: "Mujer", precio: 135000 },
        { id: 162, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 39, color: "Verde", tipo: "calzado casual", genero: "Mujer", precio: 110000 },
        { id: 163, nombre: "Puma Future Rider", marca: "Puma", talle: 39, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 115000 },
        { id: 164, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 90000 },
        { id: 165, nombre: "Vans Old Skool", marca: "Vans", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000 },
        { id: 166, nombre: "New Balance 574", marca: "New Balance", talle: 39, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 120000 },
        { id: 167, nombre: "Adidas Superstar", marca: "Adidas", talle: 39, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 130000 },
        { id: 168, nombre: "Nike Air Force 1", marca: "Nike", talle: 39, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 140000 },
        { id: 169, nombre: "Reebok Club C 85", marca: "Reebok", talle: 39, color: "Azul", tipo: "calzado casual", genero: "Mujer", precio: 100000 },
        { id: 170, nombre: "Puma Suede Classic", marca: "Puma", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000 },
        { id: 171, nombre: "Converse One Star", marca: "Converse", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 85000 },
        { id: 172, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 105000 },
        { id: 173, nombre: "New Balance 990v5", marca: "New Balance", talle: 39, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 150000 },
        { id: 174, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 39, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 160000 },
        { id: 175, nombre: "Nike React Infinity Run", marca: "Nike", talle: 39, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 145000 },
        { id: 176, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 39, color: "Azul", tipo: "calzado deportivo", genero: "Mujer", precio: 130000 },
        { id: 177, nombre: "Puma RS-X3", marca: "Puma", talle: 39, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 110000 },
        { id: 178, nombre: "Converse Jack Purcell", marca: "Converse", talle: 39, color: "Gris", tipo: "calzado casual", genero: "Mujer", precio: 90000 },
        { id: 179, nombre: "Vans Authentic", marca: "Vans", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 80000 },
        { id: 180, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 40, color: "Negro", tipo: "calzado deportivo", genero: "Mujer", precio: 125000 },
        { id: 181, nombre: "Nike Air Max 270", marca: "Nike", talle: 40, color: "Rojo", tipo: "calzado deportivo", genero: "Mujer", precio: 135000 },
        { id: 182, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 40, color: "Verde", tipo: "calzado casual", genero: "Mujer", precio: 110000 },
        { id: 183, nombre: "Puma Future Rider", marca: "Puma", talle: 40, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 115000 },
        { id: 184, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 90000 },
        { id: 185, nombre: "Vans Old Skool", marca: "Vans", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000 },
        { id: 186, nombre: "New Balance 574", marca: "New Balance", talle: 40, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 120000 },
        { id: 187, nombre: "Adidas Superstar", marca: "Adidas", talle: 40, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 130000 },
        { id: 188, nombre: "Nike Air Force 1", marca: "Nike", talle: 40, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 140000 },
        { id: 189, nombre: "Reebok Club C 85", marca: "Reebok", talle: 40, color: "Azul", tipo: "calzado casual", genero: "Mujer", precio: 100000 },
        { id: 190, nombre: "Puma Suede Classic", marca: "Puma", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000 },
        { id: 191, nombre: "Converse One Star", marca: "Converse", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 85000 },
        { id: 192, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 105000 },
        { id: 193, nombre: "New Balance 990v5", marca: "New Balance", talle: 40, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 150000 },
        { id: 194, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 40, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 160000 },
        { id: 195, nombre: "Nike React Infinity Run", marca: "Nike", talle: 40, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 145000 },
        { id: 196, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 40, color: "Azul", tipo: "calzado deportivo", genero: "Mujer", precio: 130000 },
        { id: 197, nombre: "Puma RS-X3", marca: "Puma", talle: 40, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 110000 },
        { id: 198, nombre: "Converse Jack Purcell", marca: "Converse", talle: 40, color: "Gris", tipo: "calzado casual", genero: "Mujer", precio: 90000 },
        { id: 199, nombre: "Vans Authentic", marca: "Vans", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 80000 },
        { id: 200, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 41, color: "Negro", tipo: "calzado deportivo", genero: "Mujer", precio: 125000 },
        { id: 201, nombre: "Nike Air Max 270", marca: "Nike", talle: 41, color: "Rojo", tipo: "calzado deportivo", genero: "Mujer", precio: 135000 },
        { id: 202, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 41, color: "Verde", tipo: "calzado casual", genero: "Mujer", precio: 110000 },
        { id: 203, nombre: "Puma Future Rider", marca: "Puma", talle: 41, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 115000 },
        { id: 204, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 90000 },
        { id: 205, nombre: "Vans Old Skool", marca: "Vans", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000 },
        { id: 206, nombre: "New Balance 574", marca: "New Balance", talle: 41, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 120000 },
        { id: 207, nombre: "Adidas Superstar", marca: "Adidas", talle: 41, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 130000 },
        { id: 208, nombre: "Nike Air Force 1", marca: "Nike", talle: 41, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 140000 },
        { id: 209, nombre: "Reebok Club C 85", marca: "Reebok", talle: 41, color: "Azul", tipo: "calzado casual", genero: "Mujer", precio: 100000 },
        { id: 210, nombre: "Puma Suede Classic", marca: "Puma", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000 },
        { id: 211, nombre: "Converse One Star", marca: "Converse", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 85000 },
        { id: 212, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 105000 },
        { id: 213, nombre: "New Balance 990v5", marca: "New Balance", talle: 41, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 150000 },
        { id: 214, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 41, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 160000 },
        { id: 215, nombre: "Nike React Infinity Run", marca: "Nike", talle: 41, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 145000 },
        { id: 216, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 41, color: "Azul", tipo: "calzado deportivo", genero: "Mujer", precio: 130000 },
        { id: 217, nombre: "Puma RS-X3", marca: "Puma", talle: 41, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 110000 },
        { id: 218, nombre: "Converse Jack Purcell", marca: "Converse", talle: 41, color: "Gris", tipo: "calzado casual", genero: "Mujer", precio: 90000 },
        { id: 219, nombre: "Vans Authentic", marca: "Vans", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 80000 },
        { id: 220, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 42, color: "Negro", tipo: "calzado deportivo", genero: "Mujer", precio: 125000 },
        { id: 221, nombre: "Nike Air Max 270", marca: "Nike", talle: 42, color: "Rojo", tipo: "calzado deportivo", genero: "Mujer", precio: 135000 },
        { id: 222, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 42, color: "Verde", tipo: "calzado casual", genero: "Mujer", precio: 110000 },
        { id: 223, nombre: "Puma Future Rider", marca: "Puma", talle: 42, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 115000 },
        { id: 224, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 90000 },
        { id: 225, nombre: "Vans Old Skool", marca: "Vans", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000 },
        { id: 226, nombre: "New Balance 574", marca: "New Balance", talle: 42, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 120000 },
        { id: 227, nombre: "Adidas Superstar", marca: "Adidas", talle: 42, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 130000 },
        { id: 228, nombre: "Nike Air Force 1", marca: "Nike", talle: 42, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 140000 },
        { id: 229, nombre: "Reebok Club C 85", marca: "Reebok", talle: 42, color: "Azul", tipo: "calzado casual", genero: "Mujer", precio: 100000 },
        { id: 230, nombre: "Puma Suede Classic", marca: "Puma", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000 },
        { id: 231, nombre: "Converse One Star", marca: "Converse", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 85000 },
        { id: 232, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 105000 },
        { id: 233, nombre: "New Balance 990v5", marca: "New Balance", talle: 42, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 150000 },
        { id: 234, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 42, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 160000 },
        { id: 235, nombre: "Nike React Infinity Run", marca: "Nike", talle: 42, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 145000 },
        { id: 236, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 42, color: "Azul", tipo: "calzado deportivo", genero: "Mujer", precio: 130000 },
        { id: 237, nombre: "Puma RS-X3", marca: "Puma", talle: 42, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 110000 },
        { id: 238, nombre: "Converse Jack Purcell", marca: "Converse", talle: 42, color: "Gris", tipo: "calzado casual", genero: "Mujer", precio: 90000 },
        { id: 239, nombre: "Vans Authentic", marca: "Vans", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 80000 },
        { id: 240, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 43, color: "Negro", tipo: "calzado deportivo", genero: "Mujer", precio: 125000 },
        { id: 241, nombre: "Nike Air Max 270", marca: "Nike", talle: 43, color: "Rojo", tipo: "calzado deportivo", genero: "Mujer", precio: 135000 },
        { id: 242, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 43, color: "Verde", tipo: "calzado casual", genero: "Mujer", precio: 110000 },
        { id: 243, nombre: "Puma Future Rider", marca: "Puma", talle: 43, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 115000 },
        { id: 244, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 90000 },
        { id: 245, nombre: "Vans Old Skool", marca: "Vans", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000 },
        { id: 246, nombre: "New Balance 574", marca: "New Balance", talle: 43, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 120000 },
        { id: 247, nombre: "Adidas Superstar", marca: "Adidas", talle: 43, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 130000 },
        { id: 248, nombre: "Nike Air Force 1", marca: "Nike", talle: 43, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 140000 },
        { id: 249, nombre: "Reebok Club C 85", marca: "Reebok", talle: 43, color: "Azul", tipo: "calzado casual", genero: "Mujer", precio: 100000 },
        { id: 250, nombre: "Puma Suede Classic", marca: "Puma", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000 },
        { id: 251, nombre: "Converse One Star", marca: "Converse", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 85000 },
        { id: 252, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 105000 },
        { id: 253, nombre: "New Balance 990v5", marca: "New Balance", talle: 43, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 150000 },
        { id: 254, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 43, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 160000 },
        { id: 255, nombre: "Nike React Infinity Run", marca: "Nike", talle: 43, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 145000 },
        { id: 256, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 43, color: "Azul", tipo: "calzado deportivo", genero: "Mujer", precio: 130000 },
        { id: 257, nombre: "Puma RS-X3", marca: "Puma", talle: 43, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 110000 },
        { id: 258, nombre: "Converse Jack Purcell", marca: "Converse", talle: 43, color: "Gris", tipo: "calzado casual", genero: "Mujer", precio: 90000 },
        { id: 259, nombre: "Vans Authentic", marca: "Vans", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 80000 },
        { id: 260, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 44, color: "Negro", tipo: "calzado deportivo", genero: "Mujer", precio: 125000 },
        { id: 261, nombre: "Nike Air Max 270", marca: "Nike", talle: 44, color: "Rojo", tipo: "calzado deportivo", genero: "Mujer", precio: 135000 },
        { id: 262, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 44, color: "Verde", tipo: "calzado casual", genero: "Mujer", precio: 110000 },
        { id: 263, nombre: "Puma Future Rider", marca: "Puma", talle: 44, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 115000 },
        { id: 264, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 90000 },
        { id: 265, nombre: "Vans Old Skool", marca: "Vans", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000 },
        { id: 266, nombre: "New Balance 574", marca: "New Balance", talle: 44, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 120000 },
        { id: 267, nombre: "Adidas Superstar", marca: "Adidas", talle: 44, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 130000 },
        { id: 268, nombre: "Nike Air Force 1", marca: "Nike", talle: 44, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 140000 },
        { id: 269, nombre: "Reebok Club C 85", marca: "Reebok", talle: 44, color: "Azul", tipo: "calzado casual", genero: "Mujer", precio: 100000 },
        { id: 270, nombre: "Puma Suede Classic", marca: "Puma", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000 },
        { id: 271, nombre: "Converse One Star", marca: "Converse", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 85000 },
        { id: 272, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 105000 },
        { id: 273, nombre: "New Balance 990v5", marca: "New Balance", talle: 44, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 150000 },
        { id: 274, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 44, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 160000 },
        { id: 275, nombre: "Nike React Infinity Run", marca: "Nike", talle: 44, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 145000 },
        { id: 276, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 44, color: "Azul", tipo: "calzado deportivo", genero: "Mujer", precio: 130000 },
        { id: 277, nombre: "Puma RS-X3", marca: "Puma", talle: 44, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 110000 },
        { id: 278, nombre: "Converse Jack Purcell", marca: "Converse", talle: 44, color: "Gris", tipo: "calzado casual", genero: "Mujer", precio: 90000 },
        { id: 279, nombre: "Vans Authentic", marca: "Vans", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 80000 }
    ]
    //Base de datos categorias
    const categoriadb = [
        { id: 1, propiedad: "nombre", texto: "Escriba el nombre del calzado que buscas" },
        { id: 2, propiedad: "marca", texto: "Escriba la marca del calzado que buscas" },
        { id: 3, propiedad: "tipo", texto: "Escriba el tipo del calzado que buscas" },
        { id: 4, propiedad: "genero", texto: "Escriba el género del calzado que buscas" },
        { id: 5, propiedad: "color", texto: "Escriba el color del calzado que buscas" },
        { id: 6, propiedad: "talle", texto: "Escriba el talle del calzado que buscas" }
    ]

    let opciones = ""
    categoriadb.forEach(propiedad => {
        opciones += `${propiedad.id}: ${propiedad.propiedad}\n`
    })
    let categoriaBuscada = Number(prompt("¿Por qué categoría deseas buscar?\n" + opciones))
    console.log(categoriaBuscada)
    let catPropiedad = categoriadb[categoriaBuscada-1].propiedad.toLowerCase()
    console.log(catPropiedad)
    let textoBuscado = prompt(categoriadb[categoriaBuscada - 1].texto).toString().toLowerCase()
    console.log(textoBuscado)
    alert(textoBuscado)

    let calzadoFiltrado = productodb.filter(producto => producto[catPropiedad].toString().toLowerCase().includes(textoBuscado))
    console.log(calzadoFiltrado)

    let salida = ""
    let nombresProductos = []

    calzadoFiltrado.forEach(producto => {
        if (!nombresProductos.includes(producto.nombre)) {
            nombresProductos.push(producto.nombre)
            salida += producto.nombre + " $" + producto.precio + "\n"
        }
    });

    alert(salida);


}

/* function options(name, total) {
    let exitLoop = false
    let shoes = ["Zapatillas para trekking hombre", "Zapatillas para correr hombre", "Botines Futbol para hombre", "Zapatillas para trekking mujer", "Zapatillas para correr mujer", "Botines Futbol para mujer", "Zapatillas para deportes niño", "Zapatillas de escuela niño", "Zapatillas para deportes niña", "Zapatillas para escuela niña"]

    while (!exitLoop) {
        let menu = parseInt(prompt(`Bienvenido ${name}\nSeleccione qué desea ver e ingrese el número:\n1) Zapatillas para hombres\n2) Zapatillas para Mujer\n3) Zapatillas para Niños\n4) Zapatillas para Niñas\n5) Carrito de compras\n0) Salir`))

        switch (menu) {
            case 0:
                exitLoop = true
                exit(name, total)
                break
            case 1:
                total = men(total)
                break
            case 2:
                total = women(total)
                break
            case 3:
                total = boys(total)
                break
            case 4:
                total = girls(total)
                break
            case 5:
                cart(total)
                break
            default:
                alert("Esta opción no es válida")
                break
        }
    }
    function men(total) {
        let subTotalMen = 0
        let back = false

        do {
            let menu = parseInt(prompt(`Tenemos los siguientes productos\nSeleccione cuál desea agregar al carrito\n1) ${shoes[0]} : $125000\n2) ${shoes[1]} : $100000\n3) ${shoes[2]} : $95500\n0) Volver al menú anterior`))

            switch (menu) {
                case 0:
                    back = true
                    break
                case 1:
                    subTotalMen += 125000
                    break
                case 2:
                    subTotalMen += 100000
                    break
                case 3:
                    subTotalMen += 95500
                    break
                default:
                    alert("Esta opción no es válida")
                    break
            }
        } while (!back)

        total += subTotalMen
        return total
    }

    function women(total) {
        let subTotalWomen = 0
        let back = false

        do {
            let menu = parseInt(prompt(`Tenemos los siguientes productos\nSeleccione cuál desea agregar al carrito\n1) ${shoes[3]} : $115000\n2) ${shoes[4]} : $94000\n3) ${shoes[5]} : $98250\n0) Volver al menú anterior`))

            switch (menu) {
                case 0:
                    back = true
                    break
                case 1:
                    subTotalWomen += 115000
                    break
                case 2:
                    subTotalWomen += 94000
                    break
                case 3:
                    subTotalWomen += 98250
                    break
                default:
                    alert("Esta opción no es válida")
                    break
            }
        } while (!back)

        total += subTotalWomen
        return total
    }

    function boys(total) {
        let subTotalBoys = 0
        let back = false

        do {
            let menu = parseInt(prompt(`Tenemos los siguientes productos\nSeleccione cuál desea agregar al carrito\n1) ${shoes[6]} : $85260\n2) ${shoes[7]} : $72300\n0) Volver al menú anterior`))

            switch (menu) {
                case 0:
                    back = true
                    break
                case 1:
                    subTotalBoys += 85260
                    break
                case 2:
                    subTotalBoys += 72300
                    break
                default:
                    alert("Esta opción no es válida")
                    break
            }
        } while (!back)

        total += subTotalBoys
        return total
    }

    function girls(total) {
        let subTotalGirls = 0
        let back = false

        do {
            let menu = parseInt(prompt(`Tenemos los siguientes productos\nSeleccione cuál desea agregar al carrito\n1) ${shoes[8]} : $85260\n2) ${shoes[9]} : $72300\n0) Volver al menú anterior`))

            switch (menu) {
                case 0:
                    back = true
                    break
                case 1:
                    subTotalGirls += 85260
                    break
                case 2:
                    subTotalGirls += 72300
                    break
                default:
                    alert("Esta opción no es válida")
                    break
            }
        } while (!back)

        total += subTotalGirls
        return total
    }
} */



function cart(total) {
    let messageCart = ""
    if (total == 0) {
        messageCart = "El carrito está vacío"
    } else {
        messageCart = `El total acumulado en el carrito es: $${total}`
    }
    alert(messageCart)
}

function errorLogin() {
    for (let i = 3; i > 0; i--) {
        alert(`Vuelva más tarde (${i})`)
    }
    alert("Bueno, ya esperaste demasiado, prueba otra vez")
    welcome()
}

function exit(name) {
    alert(`${name} gracias por elegirnos\nVuelva pronto!`)
    welcome()
}
