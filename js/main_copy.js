// Juan Pablo Ojeda
// PreEntrega2+Ojeda

welcome()
// Funcion de bienvenida
function welcome() {
    alert("Bienvenidos a Zapatillas Center\nLe solicitamos que inicie sesión\n\nUtilice las siguientes credenciales\nUsuario: JuanPablo\nContraseña: CoderHouse")
    let name = login()
    //options(name, 0)
    buscarProducto()
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




// Array de objetos con las propiedades nombre, marca, color, talle, tipo y género


// Función para buscar en el array de productos
function buscarProducto() {
    // Base de datos calzado
    const productos = [
        { id: 1, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 38, color: "Negro", tipo: "calzado deportivo", genero: "Hombre", precio: 125000 },
        { id: 2, nombre: "Nike Air Max 270", marca: "Nike", talle: 38, color: "Rojo", tipo: "calzado deportivo", genero: "Hombre", precio: 135000 },
        { id: 3, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 38, color: "Verde", tipo: "calzado casual", genero: "Hombre", precio: 110000 },
        { id: 4, nombre: "Puma Future Rider", marca: "Puma", talle: 38, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 115000 },
        { id: 5, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 90000 },
        { id: 6, nombre: "Vans Old Skool", marca: "Vans", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000 },
        { id: 7, nombre: "New Balance 574", marca: "New Balance", talle: 38, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 120000 },
        { id: 8, nombre: "Adidas Superstar", marca: "Adidas", talle: 38, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 130000 },
        { id: 9, nombre: "Nike Air Force 1", marca: "Nike", talle: 38, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 140000 },
        { id: 10, nombre: "Reebok Club C 85", marca: "Reebok", talle: 38, color: "Azul", tipo: "calzado casual", genero: "Hombre", precio: 100000 },
        { id: 11, nombre: "Puma Suede Classic", marca: "Puma", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000 },
        { id: 12, nombre: "Converse One Star", marca: "Converse", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 85000 },
        { id: 13, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 105000 },
        { id: 14, nombre: "New Balance 990v5", marca: "New Balance", talle: 38, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 150000 },
        { id: 15, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 38, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 160000 },
        { id: 16, nombre: "Nike React Infinity Run", marca: "Nike", talle: 38, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 145000 },
        { id: 17, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 38, color: "Azul", tipo: "calzado deportivo", genero: "Hombre", precio: 130000 },
        { id: 18, nombre: "Puma RS-X3", marca: "Puma", talle: 38, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 110000 },
        { id: 19, nombre: "Converse Jack Purcell", marca: "Converse", talle: 38, color: "Gris", tipo: "calzado casual", genero: "Hombre", precio: 90000 },
        { id: 20, nombre: "Vans Authentic", marca: "Vans", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 80000 },
        { id: 21, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 39, color: "Negro", tipo: "calzado deportivo", genero: "Hombre", precio: 125000 },
        { id: 22, nombre: "Nike Air Max 270", marca: "Nike", talle: 39, color: "Rojo", tipo: "calzado deportivo", genero: "Hombre", precio: 135000 },
        { id: 23, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 39, color: "Verde", tipo: "calzado casual", genero: "Hombre", precio: 110000 },
        { id: 24, nombre: "Puma Future Rider", marca: "Puma", talle: 39, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 115000 },
        { id: 25, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 90000 },
        { id: 26, nombre: "Vans Old Skool", marca: "Vans", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000 },
        { id: 27, nombre: "New Balance 574", marca: "New Balance", talle: 39, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 120000 },
        { id: 28, nombre: "Adidas Superstar", marca: "Adidas", talle: 39, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 130000 },
        { id: 29, nombre: "Nike Air Force 1", marca: "Nike", talle: 39, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 140000 },
        { id: 30, nombre: "Reebok Club C 85", marca: "Reebok", talle: 39, color: "Azul", tipo: "calzado casual", genero: "Hombre", precio: 100000 },
        { id: 31, nombre: "Puma Suede Classic", marca: "Puma", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000 },
        { id: 32, nombre: "Converse One Star", marca: "Converse", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 85000 },
        { id: 33, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 105000 },
        { id: 34, nombre: "New Balance 990v5", marca: "New Balance", talle: 39, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 150000 },
        { id: 35, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 39, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 160000 },
        { id: 36, nombre: "Nike React Infinity Run", marca: "Nike", talle: 39, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 145000 },
        { id: 37, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 39, color: "Azul", tipo: "calzado deportivo", genero: "Hombre", precio: 130000 },
        { id: 38, nombre: "Puma RS-X3", marca: "Puma", talle: 39, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 110000 },
        { id: 39, nombre: "Converse Jack Purcell", marca: "Converse", talle: 39, color: "Gris", tipo: "calzado casual", genero: "Hombre", precio: 90000 },
        { id: 40, nombre: "Vans Authentic", marca: "Vans", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 80000 },
        { id: 41, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 40, color: "Negro", tipo: "calzado deportivo", genero: "Hombre", precio: 125000 },
        { id: 42, nombre: "Nike Air Max 270", marca: "Nike", talle: 40, color: "Rojo", tipo: "calzado deportivo", genero: "Hombre", precio: 135000 },
        { id: 43, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 40, color: "Verde", tipo: "calzado casual", genero: "Hombre", precio: 110000 },
        { id: 44, nombre: "Puma Future Rider", marca: "Puma", talle: 40, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 115000 },
        { id: 45, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 90000 },
        { id: 46, nombre: "Vans Old Skool", marca: "Vans", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000 },
        { id: 47, nombre: "New Balance 574", marca: "New Balance", talle: 40, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 120000 },
        { id: 48, nombre: "Adidas Superstar", marca: "Adidas", talle: 40, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 130000 },
        { id: 49, nombre: "Nike Air Force 1", marca: "Nike", talle: 40, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 140000 },
        { id: 50, nombre: "Reebok Club C 85", marca: "Reebok", talle: 40, color: "Azul", tipo: "calzado casual", genero: "Hombre", precio: 100000 },
        { id: 51, nombre: "Puma Suede Classic", marca: "Puma", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000 },
        { id: 52, nombre: "Converse One Star", marca: "Converse", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 85000 },
        { id: 53, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 105000 },
        { id: 54, nombre: "New Balance 990v5", marca: "New Balance", talle: 40, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 150000 },
        { id: 55, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 40, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 160000 },
        { id: 56, nombre: "Nike React Infinity Run", marca: "Nike", talle: 40, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 145000 },
        { id: 57, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 40, color: "Azul", tipo: "calzado deportivo", genero: "Hombre", precio: 130000 },
        { id: 58, nombre: "Puma RS-X3", marca: "Puma", talle: 40, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 110000 },
        { id: 59, nombre: "Converse Jack Purcell", marca: "Converse", talle: 40, color: "Gris", tipo: "calzado casual", genero: "Hombre", precio: 90000 },
        { id: 60, nombre: "Vans Authentic", marca: "Vans", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 80000 },
        { id: 61, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 41, color: "Negro", tipo: "calzado deportivo", genero: "Hombre", precio: 125000 },
        { id: 62, nombre: "Nike Air Max 270", marca: "Nike", talle: 41, color: "Rojo", tipo: "calzado deportivo", genero: "Hombre", precio: 135000 },
        { id: 63, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 41, color: "Verde", tipo: "calzado casual", genero: "Hombre", precio: 110000 },
        { id: 64, nombre: "Puma Future Rider", marca: "Puma", talle: 41, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 115000 },
        { id: 65, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 90000 },
        { id: 66, nombre: "Vans Old Skool", marca: "Vans", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000 },
        { id: 67, nombre: "New Balance 574", marca: "New Balance", talle: 41, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 120000 },
        { id: 68, nombre: "Adidas Superstar", marca: "Adidas", talle: 41, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 130000 },
        { id: 69, nombre: "Nike Air Force 1", marca: "Nike", talle: 41, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 140000 },
        { id: 70, nombre: "Reebok Club C 85", marca: "Reebok", talle: 41, color: "Azul", tipo: "calzado casual", genero: "Hombre", precio: 100000 },
        { id: 71, nombre: "Puma Suede Classic", marca: "Puma", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000 },
        { id: 72, nombre: "Converse One Star", marca: "Converse", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 85000 },
        { id: 73, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 105000 },
        { id: 74, nombre: "New Balance 990v5", marca: "New Balance", talle: 41, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 150000 },
        { id: 75, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 41, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 160000 },
        { id: 76, nombre: "Nike React Infinity Run", marca: "Nike", talle: 41, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 145000 },
        { id: 77, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 41, color: "Azul", tipo: "calzado deportivo", genero: "Hombre", precio: 130000 },
        { id: 78, nombre: "Puma RS-X3", marca: "Puma", talle: 41, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 110000 },
        { id: 79, nombre: "Converse Jack Purcell", marca: "Converse", talle: 41, color: "Gris", tipo: "calzado casual", genero: "Hombre", precio: 90000 },
        { id: 80, nombre: "Vans Authentic", marca: "Vans", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 80000 },
        { id: 81, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 42, color: "Negro", tipo: "calzado deportivo", genero: "Hombre", precio: 125000 },
        { id: 82, nombre: "Nike Air Max 270", marca: "Nike", talle: 42, color: "Rojo", tipo: "calzado deportivo", genero: "Hombre", precio: 135000 },
        { id: 83, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 42, color: "Verde", tipo: "calzado casual", genero: "Hombre", precio: 110000 },
        { id: 84, nombre: "Puma Future Rider", marca: "Puma", talle: 42, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 115000 },
        { id: 85, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 90000 },
        { id: 86, nombre: "Vans Old Skool", marca: "Vans", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000 },
        { id: 87, nombre: "New Balance 574", marca: "New Balance", talle: 42, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 120000 },
        { id: 88, nombre: "Adidas Superstar", marca: "Adidas", talle: 42, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 130000 },
        { id: 89, nombre: "Nike Air Force 1", marca: "Nike", talle: 42, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 140000 },
        { id: 90, nombre: "Reebok Club C 85", marca: "Reebok", talle: 42, color: "Azul", tipo: "calzado casual", genero: "Hombre", precio: 100000 },
        { id: 91, nombre: "Puma Suede Classic", marca: "Puma", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000 },
        { id: 92, nombre: "Converse One Star", marca: "Converse", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 85000 },
        { id: 93, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 105000 },
        { id: 94, nombre: "New Balance 990v5", marca: "New Balance", talle: 42, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 150000 },
        { id: 95, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 42, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 160000 },
        { id: 96, nombre: "Nike React Infinity Run", marca: "Nike", talle: 42, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 145000 },
        { id: 97, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 42, color: "Azul", tipo: "calzado deportivo", genero: "Hombre", precio: 130000 },
        { id: 98, nombre: "Puma RS-X3", marca: "Puma", talle: 42, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 110000 },
        { id: 99, nombre: "Converse Jack Purcell", marca: "Converse", talle: 42, color: "Gris", tipo: "calzado casual", genero: "Hombre", precio: 90000 },
        { id: 100, nombre: "Vans Authentic", marca: "Vans", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 80000 },
        { id: 101, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 43, color: "Negro", tipo: "calzado deportivo", genero: "Hombre", precio: 125000 },
        { id: 102, nombre: "Nike Air Max 270", marca: "Nike", talle: 43, color: "Rojo", tipo: "calzado deportivo", genero: "Hombre", precio: 135000 },
        { id: 103, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 43, color: "Verde", tipo: "calzado casual", genero: "Hombre", precio: 110000 },
        { id: 104, nombre: "Puma Future Rider", marca: "Puma", talle: 43, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 115000 },
        { id: 105, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 90000 },
        { id: 106, nombre: "Vans Old Skool", marca: "Vans", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000 },
        { id: 107, nombre: "New Balance 574", marca: "New Balance", talle: 43, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 120000 },
        { id: 108, nombre: "Adidas Superstar", marca: "Adidas", talle: 43, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 130000 },
        { id: 109, nombre: "Nike Air Force 1", marca: "Nike", talle: 43, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 140000 },
        { id: 110, nombre: "Reebok Club C 85", marca: "Reebok", talle: 43, color: "Azul", tipo: "calzado casual", genero: "Hombre", precio: 100000 },
        { id: 111, nombre: "Puma Suede Classic", marca: "Puma", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000 },
        { id: 112, nombre: "Converse One Star", marca: "Converse", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 85000 },
        { id: 113, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 105000 },
        { id: 114, nombre: "New Balance 990v5", marca: "New Balance", talle: 43, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 150000 },
        { id: 115, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 43, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 160000 },
        { id: 116, nombre: "Nike React Infinity Run", marca: "Nike", talle: 43, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 145000 },
        { id: 117, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 43, color: "Azul", tipo: "calzado deportivo", genero: "Hombre", precio: 130000 },
        { id: 118, nombre: "Puma RS-X3", marca: "Puma", talle: 43, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 110000 },
        { id: 119, nombre: "Converse Jack Purcell", marca: "Converse", talle: 43, color: "Gris", tipo: "calzado casual", genero: "Hombre", precio: 90000 },
        { id: 120, nombre: "Vans Authentic", marca: "Vans", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 80000 },
        { id: 121, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 44, color: "Negro", tipo: "calzado deportivo", genero: "Hombre", precio: 125000 },
        { id: 122, nombre: "Nike Air Max 270", marca: "Nike", talle: 44, color: "Rojo", tipo: "calzado deportivo", genero: "Hombre", precio: 135000 },
        { id: 123, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 44, color: "Verde", tipo: "calzado casual", genero: "Hombre", precio: 110000 },
        { id: 124, nombre: "Puma Future Rider", marca: "Puma", talle: 44, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 115000 },
        { id: 125, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 90000 },
        { id: 126, nombre: "Vans Old Skool", marca: "Vans", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000 },
        { id: 127, nombre: "New Balance 574", marca: "New Balance", talle: 44, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 120000 },
        { id: 128, nombre: "Adidas Superstar", marca: "Adidas", talle: 44, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 130000 },
        { id: 129, nombre: "Nike Air Force 1", marca: "Nike", talle: 44, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 140000 },
        { id: 130, nombre: "Reebok Club C 85", marca: "Reebok", talle: 44, color: "Azul", tipo: "calzado casual", genero: "Hombre", precio: 100000 },
        { id: 131, nombre: "Puma Suede Classic", marca: "Puma", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000 },
        { id: 132, nombre: "Converse One Star", marca: "Converse", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 85000 },
        { id: 133, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 105000 },
        { id: 134, nombre: "New Balance 990v5", marca: "New Balance", talle: 44, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 150000 },
        { id: 135, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 44, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 160000 },
        { id: 136, nombre: "Nike React Infinity Run", marca: "Nike", talle: 44, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 145000 },
        { id: 137, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 44, color: "Azul", tipo: "calzado deportivo", genero: "Hombre", precio: 130000 },
        { id: 138, nombre: "Puma RS-X3", marca: "Puma", talle: 44, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 110000 },
        { id: 139, nombre: "Converse Jack Purcell", marca: "Converse", talle: 44, color: "Gris", tipo: "calzado casual", genero: "Hombre", precio: 90000 },
        { id: 140, nombre: "Vans Authentic", marca: "Vans", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 80000 },
        { id: 141, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 38, color: "Negro", tipo: "calzado deportivo", genero: "Mujer", precio: 125000 },
        { id: 142, nombre: "Nike Air Max 270", marca: "Nike", talle: 38, color: "Rojo", tipo: "calzado deportivo", genero: "Mujer", precio: 135000 },
        { id: 143, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 38, color: "Verde", tipo: "calzado casual", genero: "Mujer", precio: 110000 },
        { id: 144, nombre: "Puma Future Rider", marca: "Puma", talle: 38, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 115000 },
        { id: 145, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 90000 },
        { id: 146, nombre: "Vans Old Skool", marca: "Vans", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000 },
        { id: 147, nombre: "New Balance 574", marca: "New Balance", talle: 38, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 120000 },
        { id: 148, nombre: "Adidas Superstar", marca: "Adidas", talle: 38, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 130000 },
        { id: 149, nombre: "Nike Air Force 1", marca: "Nike", talle: 38, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 140000 },
        { id: 150, nombre: "Reebok Club C 85", marca: "Reebok", talle: 38, color: "Azul", tipo: "calzado casual", genero: "Mujer", precio: 100000 },
        { id: 151, nombre: "Puma Suede Classic", marca: "Puma", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000 },
        { id: 152, nombre: "Converse One Star", marca: "Converse", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 85000 },
        { id: 153, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 105000 },
        { id: 154, nombre: "New Balance 990v5", marca: "New Balance", talle: 38, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 150000 },
        { id: 155, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 38, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 160000 },
        { id: 156, nombre: "Nike React Infinity Run", marca: "Nike", talle: 38, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 145000 },
        { id: 157, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 38, color: "Azul", tipo: "calzado deportivo", genero: "Mujer", precio: 130000 },
        { id: 158, nombre: "Puma RS-X3", marca: "Puma", talle: 38, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 110000 },
        { id: 159, nombre: "Converse Jack Purcell", marca: "Converse", talle: 38, color: "Gris", tipo: "calzado casual", genero: "Mujer", precio: 90000 },
        { id: 160, nombre: "Vans Authentic", marca: "Vans", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 80000 },
        { id: 161, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 39, color: "Negro", tipo: "calzado deportivo", genero: "Mujer", precio: 125000 },
        { id: 162, nombre: "Nike Air Max 270", marca: "Nike", talle: 39, color: "Rojo", tipo: "calzado deportivo", genero: "Mujer", precio: 135000 },
        { id: 163, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 39, color: "Verde", tipo: "calzado casual", genero: "Mujer", precio: 110000 },
        { id: 164, nombre: "Puma Future Rider", marca: "Puma", talle: 39, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 115000 },
        { id: 165, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 90000 },
        { id: 166, nombre: "Vans Old Skool", marca: "Vans", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000 },
        { id: 167, nombre: "New Balance 574", marca: "New Balance", talle: 39, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 120000 },
        { id: 168, nombre: "Adidas Superstar", marca: "Adidas", talle: 39, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 130000 },
        { id: 169, nombre: "Nike Air Force 1", marca: "Nike", talle: 39, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 140000 },
        { id: 170, nombre: "Reebok Club C 85", marca: "Reebok", talle: 39, color: "Azul", tipo: "calzado casual", genero: "Mujer", precio: 100000 },
        { id: 171, nombre: "Puma Suede Classic", marca: "Puma", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000 },
        { id: 172, nombre: "Converse One Star", marca: "Converse", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 85000 },
        { id: 173, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 105000 },
        { id: 174, nombre: "New Balance 990v5", marca: "New Balance", talle: 39, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 150000 },
        { id: 175, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 39, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 160000 },
        { id: 176, nombre: "Nike React Infinity Run", marca: "Nike", talle: 39, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 145000 },
        { id: 177, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 39, color: "Azul", tipo: "calzado deportivo", genero: "Mujer", precio: 130000 },
        { id: 178, nombre: "Puma RS-X3", marca: "Puma", talle: 39, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 110000 },
        { id: 179, nombre: "Converse Jack Purcell", marca: "Converse", talle: 39, color: "Gris", tipo: "calzado casual", genero: "Mujer", precio: 90000 },
        { id: 180, nombre: "Vans Authentic", marca: "Vans", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 80000 },
        { id: 181, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 40, color: "Negro", tipo: "calzado deportivo", genero: "Mujer", precio: 125000 },
        { id: 182, nombre: "Nike Air Max 270", marca: "Nike", talle: 40, color: "Rojo", tipo: "calzado deportivo", genero: "Mujer", precio: 135000 },
        { id: 183, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 40, color: "Verde", tipo: "calzado casual", genero: "Mujer", precio: 110000 },
        { id: 184, nombre: "Puma Future Rider", marca: "Puma", talle: 40, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 115000 },
        { id: 185, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 90000 },
        { id: 186, nombre: "Vans Old Skool", marca: "Vans", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000 },
        { id: 187, nombre: "New Balance 574", marca: "New Balance", talle: 40, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 120000 },
        { id: 188, nombre: "Adidas Superstar", marca: "Adidas", talle: 40, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 130000 },
        { id: 189, nombre: "Nike Air Force 1", marca: "Nike", talle: 40, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 140000 },
        { id: 190, nombre: "Reebok Club C 85", marca: "Reebok", talle: 40, color: "Azul", tipo: "calzado casual", genero: "Mujer", precio: 100000 },
        { id: 191, nombre: "Puma Suede Classic", marca: "Puma", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000 },
        { id: 192, nombre: "Converse One Star", marca: "Converse", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 85000 },
        { id: 193, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 105000 },
        { id: 194, nombre: "New Balance 990v5", marca: "New Balance", talle: 40, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 150000 },
        { id: 195, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 40, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 160000 },
        { id: 196, nombre: "Nike React Infinity Run", marca: "Nike", talle: 40, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 145000 },
        { id: 197, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 40, color: "Azul", tipo: "calzado deportivo", genero: "Mujer", precio: 130000 },
        { id: 198, nombre: "Puma RS-X3", marca: "Puma", talle: 40, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 110000 },
        { id: 199, nombre: "Converse Jack Purcell", marca: "Converse", talle: 40, color: "Gris", tipo: "calzado casual", genero: "Mujer", precio: 90000 },
        { id: 200, nombre: "Vans Authentic", marca: "Vans", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 80000 },
        { id: 201, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 41, color: "Negro", tipo: "calzado deportivo", genero: "Mujer", precio: 125000 },
        { id: 202, nombre: "Nike Air Max 270", marca: "Nike", talle: 41, color: "Rojo", tipo: "calzado deportivo", genero: "Mujer", precio: 135000 },
        { id: 203, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 41, color: "Verde", tipo: "calzado casual", genero: "Mujer", precio: 110000 },
        { id: 204, nombre: "Puma Future Rider", marca: "Puma", talle: 41, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 115000 },
        { id: 205, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 90000 },
        { id: 206, nombre: "Vans Old Skool", marca: "Vans", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000 },
        { id: 207, nombre: "New Balance 574", marca: "New Balance", talle: 41, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 120000 },
        { id: 208, nombre: "Adidas Superstar", marca: "Adidas", talle: 41, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 130000 },
        { id: 209, nombre: "Nike Air Force 1", marca: "Nike", talle: 41, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 140000 },
        { id: 210, nombre: "Reebok Club C 85", marca: "Reebok", talle: 41, color: "Azul", tipo: "calzado casual", genero: "Mujer", precio: 100000 },
        { id: 211, nombre: "Puma Suede Classic", marca: "Puma", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000 },
        { id: 212, nombre: "Converse One Star", marca: "Converse", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 85000 },
        { id: 213, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 105000 },
        { id: 214, nombre: "New Balance 990v5", marca: "New Balance", talle: 41, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 150000 },
        { id: 215, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 41, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 160000 },
        { id: 216, nombre: "Nike React Infinity Run", marca: "Nike", talle: 41, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 145000 },
        { id: 217, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 41, color: "Azul", tipo: "calzado deportivo", genero: "Mujer", precio: 130000 },
        { id: 218, nombre: "Puma RS-X3", marca: "Puma", talle: 41, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 110000 },
        { id: 219, nombre: "Converse Jack Purcell", marca: "Converse", talle: 41, color: "Gris", tipo: "calzado casual", genero: "Mujer", precio: 90000 },
        { id: 220, nombre: "Vans Authentic", marca: "Vans", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 80000 },
        { id: 221, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 42, color: "Negro", tipo: "calzado deportivo", genero: "Mujer", precio: 125000 },
        { id: 222, nombre: "Nike Air Max 270", marca: "Nike", talle: 42, color: "Rojo", tipo: "calzado deportivo", genero: "Mujer", precio: 135000 },
        { id: 223, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 42, color: "Verde", tipo: "calzado casual", genero: "Mujer", precio: 110000 },
        { id: 224, nombre: "Puma Future Rider", marca: "Puma", talle: 42, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 115000 },
        { id: 225, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 90000 },
        { id: 226, nombre: "Vans Old Skool", marca: "Vans", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000 },
        { id: 227, nombre: "New Balance 574", marca: "New Balance", talle: 42, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 120000 },
        { id: 228, nombre: "Adidas Superstar", marca: "Adidas", talle: 42, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 130000 },
        { id: 229, nombre: "Nike Air Force 1", marca: "Nike", talle: 42, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 140000 },
        { id: 230, nombre: "Reebok Club C 85", marca: "Reebok", talle: 42, color: "Azul", tipo: "calzado casual", genero: "Mujer", precio: 100000 },
        { id: 231, nombre: "Puma Suede Classic", marca: "Puma", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000 },
        { id: 232, nombre: "Converse One Star", marca: "Converse", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 85000 },
        { id: 233, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 105000 },
        { id: 234, nombre: "New Balance 990v5", marca: "New Balance", talle: 42, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 150000 },
        { id: 235, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 42, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 160000 },
        { id: 236, nombre: "Nike React Infinity Run", marca: "Nike", talle: 42, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 145000 },
        { id: 237, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 42, color: "Azul", tipo: "calzado deportivo", genero: "Mujer", precio: 130000 },
        { id: 238, nombre: "Puma RS-X3", marca: "Puma", talle: 42, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 110000 },
        { id: 239, nombre: "Converse Jack Purcell", marca: "Converse", talle: 42, color: "Gris", tipo: "calzado casual", genero: "Mujer", precio: 90000 },
        { id: 240, nombre: "Vans Authentic", marca: "Vans", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 80000 },
        { id: 241, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 43, color: "Negro", tipo: "calzado deportivo", genero: "Mujer", precio: 125000 },
        { id: 242, nombre: "Nike Air Max 270", marca: "Nike", talle: 43, color: "Rojo", tipo: "calzado deportivo", genero: "Mujer", precio: 135000 },
        { id: 243, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 43, color: "Verde", tipo: "calzado casual", genero: "Mujer", precio: 110000 },
        { id: 244, nombre: "Puma Future Rider", marca: "Puma", talle: 43, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 115000 },
        { id: 245, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 90000 },
        { id: 246, nombre: "Vans Old Skool", marca: "Vans", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000 },
        { id: 247, nombre: "New Balance 574", marca: "New Balance", talle: 43, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 120000 },
        { id: 248, nombre: "Adidas Superstar", marca: "Adidas", talle: 43, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 130000 },
        { id: 249, nombre: "Nike Air Force 1", marca: "Nike", talle: 43, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 140000 },
        { id: 250, nombre: "Reebok Club C 85", marca: "Reebok", talle: 43, color: "Azul", tipo: "calzado casual", genero: "Mujer", precio: 100000 },
        { id: 251, nombre: "Puma Suede Classic", marca: "Puma", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000 },
        { id: 252, nombre: "Converse One Star", marca: "Converse", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 85000 },
        { id: 253, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 105000 },
        { id: 254, nombre: "New Balance 990v5", marca: "New Balance", talle: 43, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 150000 },
        { id: 255, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 43, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 160000 },
        { id: 256, nombre: "Nike React Infinity Run", marca: "Nike", talle: 43, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 145000 },
        { id: 257, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 43, color: "Azul", tipo: "calzado deportivo", genero: "Mujer", precio: 130000 },
        { id: 258, nombre: "Puma RS-X3", marca: "Puma", talle: 43, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 110000 },
        { id: 259, nombre: "Converse Jack Purcell", marca: "Converse", talle: 43, color: "Gris", tipo: "calzado casual", genero: "Mujer", precio: 90000 },
        { id: 260, nombre: "Vans Authentic", marca: "Vans", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 80000 },
        { id: 261, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 44, color: "Negro", tipo: "calzado deportivo", genero: "Mujer", precio: 125000 },
        { id: 262, nombre: "Nike Air Max 270", marca: "Nike", talle: 44, color: "Rojo", tipo: "calzado deportivo", genero: "Mujer", precio: 135000 },
        { id: 263, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 44, color: "Verde", tipo: "calzado casual", genero: "Mujer", precio: 110000 },
        { id: 264, nombre: "Puma Future Rider", marca: "Puma", talle: 44, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 115000 },
        { id: 265, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 90000 },
        { id: 266, nombre: "Vans Old Skool", marca: "Vans", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000 },
        { id: 267, nombre: "New Balance 574", marca: "New Balance", talle: 44, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 120000 },
        { id: 268, nombre: "Adidas Superstar", marca: "Adidas", talle: 44, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 130000 },
        { id: 269, nombre: "Nike Air Force 1", marca: "Nike", talle: 44, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 140000 },
        { id: 270, nombre: "Reebok Club C 85", marca: "Reebok", talle: 44, color: "Azul", tipo: "calzado casual", genero: "Mujer", precio: 100000 },
        { id: 271, nombre: "Puma Suede Classic", marca: "Puma", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000 },
        { id: 272, nombre: "Converse One Star", marca: "Converse", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 85000 },
        { id: 273, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 105000 },
        { id: 274, nombre: "New Balance 990v5", marca: "New Balance", talle: 44, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 150000 },
        { id: 275, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 44, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 160000 },
        { id: 276, nombre: "Nike React Infinity Run", marca: "Nike", talle: 44, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 145000 },
        { id: 277, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 44, color: "Azul", tipo: "calzado deportivo", genero: "Mujer", precio: 130000 },
        { id: 278, nombre: "Puma RS-X3", marca: "Puma", talle: 44, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 110000 },
        { id: 279, nombre: "Converse Jack Purcell", marca: "Converse", talle: 44, color: "Gris", tipo: "calzado casual", genero: "Mujer", precio: 90000 },
        { id: 280, nombre: "Vans Authentic", marca: "Vans", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 80000 }
    ]
    // Pedir al usuario que ingrese el término de búsqueda
    let terminoBusqueda = prompt("Ingrese el término de búsqueda:");

    // Convertir el término de búsqueda a minúsculas para hacer la búsqueda insensible a mayúsculas
    terminoBusqueda = terminoBusqueda.toLowerCase();
    console.log(terminoBusqueda)

    // Filtrar los productos que coincidan con el término de búsqueda en alguna de sus propiedades
    let resultados = productos.filter(producto => Object.values(producto).some(valor => typeof valor === 'string' && valor.toLowerCase().includes(terminoBusqueda))
    );

    let salida = ""
    // Mostrar los resultados
    if (resultados.length > 0) {
        resultados.forEach(producto => {
            // console.log(producto);
            salida += producto.id + ")  " + producto.nombre + " $" + producto.precio + "\n"
        });
        alert(salida)
    } else {
        alert("No se encontraron productos que coincidan con la búsqueda.");
    }
}

// Llamar a la función para iniciar la búsqueda
buscarProducto();





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
