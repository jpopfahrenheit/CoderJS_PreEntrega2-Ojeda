// Juan Pablo Ojeda
// PreEntrega2+Ojeda
sistemaCompras()

function sistemaCompras() {

    // Base de datos calzado
    const productodb = [
        { id: 0, nombre: "Adidas T4 Fire", marca: "Adidas", genero: "Hombre", precio: 125000, stock: 7 }
        , { id: 1, nombre: "Nike Air Max 270", marca: "Nike", genero: "Hombre", precio: 135000, stock: 14 }
        , { id: 2, nombre: "Reebok Classic Leather", marca: "Reebok", genero: "Hombre", precio: 110000, stock: 18 }
        , { id: 3, nombre: "Puma Future Rider", marca: "Puma", genero: "Hombre", precio: 115000, stock: 5 }
        , { id: 4, nombre: "Converse Chuck Taylor All Star", marca: "Converse", genero: "Hombre", precio: 90000, stock: 12 }
        , { id: 5, nombre: "Vans Old Skool", marca: "Vans", genero: "Hombre", precio: 95000, stock: 2 }
        , { id: 6, nombre: "New Balance 574", marca: "New Balance", genero: "Hombre", precio: 120000, stock: 9 }
        , { id: 7, nombre: "Adidas Superstar", marca: "Adidas", genero: "Hombre", precio: 130000, stock: 17 }
        , { id: 8, nombre: "Nike Air Force 1", marca: "Nike", genero: "Hombre", precio: 140000, stock: 10 }
        , { id: 9, nombre: "Reebok Club C 85", marca: "Reebok", genero: "Hombre", precio: 100000, stock: 4 }
        , { id: 10, nombre: "Puma Suede Classic", marca: "Puma", genero: "Hombre", precio: 95000, stock: 20 }
        , { id: 11, nombre: "Converse One Star", marca: "Converse", genero: "Hombre", precio: 85000, stock: 11 }
        , { id: 12, nombre: "Vans Sk8-Hi", marca: "Vans", genero: "Hombre", precio: 105000, stock: 16 }
        , { id: 13, nombre: "New Balance 990v5", marca: "New Balance", genero: "Hombre", precio: 150000, stock: 8 }
        , { id: 14, nombre: "Adidas Ultraboost", marca: "Adidas", genero: "Hombre", precio: 160000, stock: 3 }
        , { id: 15, nombre: "Nike React Infinity Run", marca: "Nike", genero: "Hombre", precio: 145000, stock: 6 }
        , { id: 16, nombre: "Reebok Zig Kinetica", marca: "Reebok", genero: "Hombre", precio: 130000, stock: 13 }
        , { id: 17, nombre: "Puma RS-X3", marca: "Puma", genero: "Hombre", precio: 110000, stock: 19 }
        , { id: 18, nombre: "Converse Jack Purcell", marca: "Converse", genero: "Hombre", precio: 90000, stock: 1 }
        , { id: 19, nombre: "Vans Authentic", marca: "Vans", genero: "Hombre", precio: 80000, stock: 0 }
        , { id: 20, nombre: "Adidas T4 Fire", marca: "Adidas", genero: "Mujer", precio: 125000, stock: 8 }
        , { id: 21, nombre: "Nike Air Max 270", marca: "Nike", genero: "Mujer", precio: 135000, stock: 13 }
        , { id: 22, nombre: "Reebok Classic Leather", marca: "Reebok", genero: "Mujer", precio: 110000, stock: 2 }
        , { id: 23, nombre: "Puma Future Rider", marca: "Puma", genero: "Mujer", precio: 115000, stock: 10 }
        , { id: 24, nombre: "Converse Chuck Taylor All Star", marca: "Converse", genero: "Mujer", precio: 90000, stock: 18 }
        , { id: 25, nombre: "Vans Old Skool", marca: "Vans", genero: "Mujer", precio: 95000, stock: 15 }
        , { id: 26, nombre: "New Balance 574", marca: "New Balance", genero: "Mujer", precio: 120000, stock: 5 }
        , { id: 27, nombre: "Adidas Superstar", marca: "Adidas", genero: "Mujer", precio: 130000, stock: 7 }
        , { id: 28, nombre: "Nike Air Force 1", marca: "Nike", genero: "Mujer", precio: 140000, stock: 12 }
        , { id: 29, nombre: "Reebok Club C 85", marca: "Reebok", genero: "Mujer", precio: 100000, stock: 4 }
        , { id: 30, nombre: "Puma Suede Classic", marca: "Puma", genero: "Mujer", precio: 95000, stock: 20 }
        , { id: 31, nombre: "Converse One Star", marca: "Converse", genero: "Mujer", precio: 85000, stock: 17 }
        , { id: 32, nombre: "Vans Sk8-Hi", marca: "Vans", genero: "Mujer", precio: 105000, stock: 6 }
        , { id: 33, nombre: "New Balance 990v5", marca: "New Balance", genero: "Mujer", precio: 150000, stock: 16 }
        , { id: 34, nombre: "Adidas Ultraboost", marca: "Adidas", genero: "Mujer", precio: 160000, stock: 3 }
        , { id: 35, nombre: "Nike React Infinity Run", marca: "Nike", genero: "Mujer", precio: 145000, stock: 19 }
        , { id: 36, nombre: "Reebok Zig Kinetica", marca: "Reebok", genero: "Mujer", precio: 130000, stock: 1 }
        , { id: 37, nombre: "Puma RS-X3", marca: "Puma", genero: "Mujer", precio: 110000, stock: 14 }
        , { id: 38, nombre: "Converse Jack Purcell", marca: "Converse", genero: "Mujer", precio: 90000, stock: 9 }
        , { id: 39, nombre: "Vans Authentic", marca: "Vans", genero: "Mujer", precio: 80000, stock: 11 }



    ]
    // Base de datos nombre
    const nombredb = [
        { id: 1, nombre: "Adidas T4 Fire" },
        { id: 2, nombre: "Nike Air Max 270" },
        { id: 3, nombre: "Reebok Classic Leather" },
        { id: 4, nombre: "Puma Future Rider" },
        { id: 5, nombre: "Converse Chuck Taylor All Star" },
        { id: 6, nombre: "Vans Old Skool" },
        { id: 7, nombre: "New Balance 574" },
        { id: 8, nombre: "Adidas Superstar" },
        { id: 9, nombre: "Nike Air Force 1" },
        { id: 10, nombre: "Reebok Club C 85" },
        { id: 11, nombre: "Puma Suede Classic" },
        { id: 12, nombre: "Converse One Star" },
        { id: 13, nombre: "Vans Sk8-Hi" },
        { id: 14, nombre: "New Balance 990v5" },
        { id: 15, nombre: "Adidas Ultraboost" },
        { id: 16, nombre: "Nike React Infinity Run" },
        { id: 17, nombre: "Reebok Zig Kinetica" },
        { id: 18, nombre: "Puma RS-X3" },
        { id: 19, nombre: "Converse Jack Purcell" },
        { id: 20, nombre: "Vans Authentic" }
    ]
    //Base de datos marcas
    const marcadb = [
        { id: 1, nombre: "Adidas" },
        { id: 2, nombre: "Nike" },
        { id: 3, nombre: "Reebok" },
        { id: 4, nombre: "Puma" },
        { id: 5, nombre: "Converse" },
        { id: 6, nombre: "Vans" },
        { id: 7, nombre: "New Balance" }
    ]
    //Base de datos genero
    const generodb = [
        { id: 1, nombre: "Hombre" },
        { id: 2, nombre: "Mujer" }
    ]
    //Base de datos categorias
    const categoriadb = [
        { id: 1, nombre: "Marca", base: marcadb },
        { id: 2, nombre: "Género", base: generodb },
        { id: 3, nombre: "Nombre", base: nombredb }
    ]
    ///////////////////////
    let carrito = []
    let total = []
    let opcionMenu = ""
    ///////////////////////
    welcome()
    let name = login()
    menuPrincipal(name)

    function menuProductos(opcion, base) {
        if (base === 1) {
            productosFiltrados(opcion)
        } else if (base === 2) {
            console.log("genero")
        } else if (base === 3) {
            console.log("nombre")
        }
    }
    function verCarrito(array) {
        const lista = array.map((objeto, index) => ({
            index: index,
            nombre: objeto.nombre,
            genero: objeto.genero,
            precio: objeto.precio,
            stock: objeto.stock
        }))
        return lista.map(producto => `${producto.index + 1}: ${producto.nombre} ${producto.genero} $${producto.precio}`).join("\n")
    }

    function listaCalzado(array) {
        const lista = array.map((objeto, index) => ({
            index: index,
            nombre: objeto.nombre,
            genero: objeto.genero,
            precio: objeto.precio,
            stock: objeto.stock
        }))
        return lista.map(producto => `${producto.index + 1}: ${producto.nombre} ${producto.genero} $${producto.precio} | Stock: ${producto.stock}`).join("\n")
    }


    function menuSecundario(opcionMenu) {
        let base = (categoriadb[opcionMenu - 1].base)
        let opcionMenuSecundario
        do {
            opcionMenuSecundario = Number(prompt(`Elija una opción de búsqueda para su calzado\n${opciones(base)}----------\n9: Volver\n0: Salir\n`))
            if (opcionMenuSecundario === 0) {
                exit(name)
            } else if (opcionMenuSecundario === 9) {
                menuPrincipal(name)
            } else if (!base.some(item => item.id === opcionMenuSecundario)) {
                alert("Por favor, ingrese una opción válida")
            } else {
                menuProductos(base[opcionMenuSecundario - 1], opcionMenu)
            }
        } while (opcionMenuSecundario !== 0 && opcionMenuSecundario !== 9 && (!base.some(item => item.id === opcionMenuSecundario)))

    }


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






    ///////////////////////////////
    function welcome() {
        alert(`Bienvenidos a Zapatillas Center\nLe solicitamos que inicie sesión\n\nUtilice las siguientes credenciales\nUsuario: JuanPablo\nContraseña: CoderHouse`)
    }
    ///////////////////////////////
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
    ///////////////////////////////
    function menuPrincipal(name) {

        do {
            opcionMenu = Number(prompt(`Bienvenido ${name}\nElija una opción de búsqueda para su calzado\n${opciones(categoriadb)}----------\n0: Salir\n`))
            if (opcionMenu === 0) {
                exit(name)
            } else if (!categoriadb.some(item => item.id === opcionMenu)) {
                alert("Por favor, ingrese una opción válida")
            } else {
                menuSecundario(opcionMenu)
            }
        } while (opcionMenu !== 0 && (!categoriadb.some(item => item.id === opcionMenu)))

    }
    ///////////////////////////////
    function opciones(objeto) {
        console.log(objeto)
        let opciones = ""
        objeto.forEach(item => {
            opciones += `${item.id}: ${item.nombre}\n`
        })
        console.log(opciones)
        return opciones
    }

    /////////////////////////////

    function obtenerNombresUnicos(objeto) {

        let nombresProductos = []

        objeto.forEach((item, index) => {
            if (!nombresProductos.includes(item.nombre)) {
                nombresProductos.push(`${index + 1}: ${item.nombre}`)
            }
        })

        let mensaje = nombresProductos.join("\n")

        return mensaje
    }

    function productosFiltrados(opcion) {
        let productosFiltrados = []
        productodb.forEach(producto => {
            if (producto.marca.includes(opcion.nombre) && !productosFiltrados.some(item => item.nombre === producto.nombre)) {
                productosFiltrados.push({ nombre: producto.nombre })
            }
        })
        console.log(productosFiltrados)

        let opcionNombre = ""

        let nombre2 = []
        do {
            opcionNombre = Number(prompt(`Elija el modelo de calzado que desea\n${obtenerNombresUnicos(productosFiltrados)}\n----------\n9: Volver\n0: Salir\n`))
            console.log(opcionNombre)
            console.log(productosFiltrados)

            if (opcionNombre === 0) {
                exit(name)
            } else if (opcionNombre === 9) {
                menuSecundario(opcionMenu)
            } else if (opcionNombre < 1 || opcionNombre > productosFiltrados.length) {
                alert("Por favor, ingrese una opción válida")
            } else {
                let nombre = productosFiltrados[opcionNombre - 1].nombre
                console.log(nombre)
                nombre2 = productodb.filter(producto => producto.nombre === nombre)
                console.log(nombre2)
                detalleCalzado(nombre2)
            }

            

            
        } while (opcionNombre !== 0 && opcionNombre !== 9 && (!productosFiltrados.some(item => item.id === opcionMenu)))

        function detalleCalzado(nombre2){
            let calzado = Number(prompt(`Seleccione el calzado que desea agregar al carrito \n${listaCalzado(nombre2)}\n----------\n9: Volver\n0: Salir\n`))
            console.log(calzado)
            // condicional
            if (calzado === 0) {
                exit(name)
            } else if (calzado === 9) {
                menuSecundario(opcionMenu)
            } else if (calzado < 1 || calzado > nombre2.length) {
                alert("Por favor, ingrese una opción válida")
            }else{

            }



            let calzado2 = nombre2[calzado - 1]
            console.log(calzado2)
            carrito.push(calzado2)
            console.log(calzado2.precio)
            total.push(calzado2.precio)
            alert("Carrito de compras:\n" + verCarrito(carrito))    
        }





    }











}