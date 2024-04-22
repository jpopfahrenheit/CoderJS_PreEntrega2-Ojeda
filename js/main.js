// Juan Pablo Ojeda
// PreEntrega2+Ojeda
sistemaCompras()

function sistemaCompras() {
    //Base de datos categorias
    const categoriadb = [
        { id: 1, nombre: "Marca" },
        { id: 2, nombre: "Género" },
        { id: 3, nombre: "Color" },
    ]
    // Base de datos calzado
    const productodb = [
        { id: 0, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 38, color: "Negro", tipo: "calzado deportivo", genero: "Hombre", precio: 125000, stock: 7 },
        { id: 1, nombre: "Nike Air Max 270", marca: "Nike", talle: 38, color: "Rojo", tipo: "calzado deportivo", genero: "Hombre", precio: 135000, stock: 14 },
        { id: 2, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 38, color: "Verde", tipo: "calzado casual", genero: "Hombre", precio: 110000, stock: 18 },
        { id: 3, nombre: "Puma Future Rider", marca: "Puma", talle: 38, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 115000, stock: 5 },
        { id: 4, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 90000, stock: 12 },
        { id: 5, nombre: "Vans Old Skool", marca: "Vans", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000, stock: 2 },
        { id: 6, nombre: "New Balance 574", marca: "New Balance", talle: 38, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 120000, stock: 9 },
        { id: 7, nombre: "Adidas Superstar", marca: "Adidas", talle: 38, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 130000, stock: 17 },
        { id: 8, nombre: "Nike Air Force 1", marca: "Nike", talle: 38, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 140000, stock: 10 },
        { id: 9, nombre: "Reebok Club C 85", marca: "Reebok", talle: 38, color: "Azul", tipo: "calzado casual", genero: "Hombre", precio: 100000, stock: 4 },
        { id: 10, nombre: "Puma Suede Classic", marca: "Puma", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000, stock: 20 },
        { id: 11, nombre: "Converse One Star", marca: "Converse", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 85000, stock: 11 },
        { id: 12, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 105000, stock: 16 },
        { id: 13, nombre: "New Balance 990v5", marca: "New Balance", talle: 38, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 150000, stock: 8 },
        { id: 14, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 38, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 160000, stock: 3 },
        { id: 15, nombre: "Nike React Infinity Run", marca: "Nike", talle: 38, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 145000, stock: 6 },
        { id: 16, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 38, color: "Azul", tipo: "calzado deportivo", genero: "Hombre", precio: 130000, stock: 13 },
        { id: 17, nombre: "Puma RS-X3", marca: "Puma", talle: 38, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 110000, stock: 19 },
        { id: 18, nombre: "Converse Jack Purcell", marca: "Converse", talle: 38, color: "Gris", tipo: "calzado casual", genero: "Hombre", precio: 90000, stock: 1 },
        { id: 19, nombre: "Vans Authentic", marca: "Vans", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 80000, stock: 0 },
        { id: 20, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 39, color: "Negro", tipo: "calzado deportivo", genero: "Hombre", precio: 125000, stock: 8 },
        { id: 21, nombre: "Nike Air Max 270", marca: "Nike", talle: 39, color: "Rojo", tipo: "calzado deportivo", genero: "Hombre", precio: 135000, stock: 13 },
        { id: 22, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 39, color: "Verde", tipo: "calzado casual", genero: "Hombre", precio: 110000, stock: 2 },
        { id: 23, nombre: "Puma Future Rider", marca: "Puma", talle: 39, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 115000, stock: 10 },
        { id: 24, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 90000, stock: 18 },
        { id: 25, nombre: "Vans Old Skool", marca: "Vans", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000, stock: 15 },
        { id: 26, nombre: "New Balance 574", marca: "New Balance", talle: 39, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 120000, stock: 5 },
        { id: 27, nombre: "Adidas Superstar", marca: "Adidas", talle: 39, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 130000, stock: 7 },
        { id: 28, nombre: "Nike Air Force 1", marca: "Nike", talle: 39, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 140000, stock: 12 },
        { id: 29, nombre: "Reebok Club C 85", marca: "Reebok", talle: 39, color: "Azul", tipo: "calzado casual", genero: "Hombre", precio: 100000, stock: 4 },
        { id: 30, nombre: "Puma Suede Classic", marca: "Puma", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000, stock: 20 },
        { id: 31, nombre: "Converse One Star", marca: "Converse", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 85000, stock: 17 },
        { id: 32, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 105000, stock: 6 },
        { id: 33, nombre: "New Balance 990v5", marca: "New Balance", talle: 39, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 150000, stock: 16 },
        { id: 34, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 39, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 160000, stock: 3 },
        { id: 35, nombre: "Nike React Infinity Run", marca: "Nike", talle: 39, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 145000, stock: 19 },
        { id: 36, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 39, color: "Azul", tipo: "calzado deportivo", genero: "Hombre", precio: 130000, stock: 1 },
        { id: 37, nombre: "Puma RS-X3", marca: "Puma", talle: 39, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 110000, stock: 14 },
        { id: 38, nombre: "Converse Jack Purcell", marca: "Converse", talle: 39, color: "Gris", tipo: "calzado casual", genero: "Hombre", precio: 90000, stock: 9 },
        { id: 39, nombre: "Vans Authentic", marca: "Vans", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 80000, stock: 11 },
        { id: 40, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 40, color: "Negro", tipo: "calzado deportivo", genero: "Hombre", precio: 125000, stock: 0 },
        { id: 41, nombre: "Nike Air Max 270", marca: "Nike", talle: 40, color: "Rojo", tipo: "calzado deportivo", genero: "Hombre", precio: 135000, stock: 15 },
        { id: 42, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 40, color: "Verde", tipo: "calzado casual", genero: "Hombre", precio: 110000, stock: 18 },
        { id: 43, nombre: "Puma Future Rider", marca: "Puma", talle: 40, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 115000, stock: 6 },
        { id: 44, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 90000, stock: 10 },
        { id: 45, nombre: "Vans Old Skool", marca: "Vans", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000, stock: 13 },
        { id: 46, nombre: "New Balance 574", marca: "New Balance", talle: 40, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 120000, stock: 16 },
        { id: 47, nombre: "Adidas Superstar", marca: "Adidas", talle: 40, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 130000, stock: 7 },
        { id: 48, nombre: "Nike Air Force 1", marca: "Nike", talle: 40, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 140000, stock: 1 },
        { id: 49, nombre: "Reebok Club C 85", marca: "Reebok", talle: 40, color: "Azul", tipo: "calzado casual", genero: "Hombre", precio: 100000, stock: 12 },
        { id: 50, nombre: "Puma Suede Classic", marca: "Puma", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000, stock: 19 },
        { id: 51, nombre: "Converse One Star", marca: "Converse", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 85000, stock: 9 },
        { id: 52, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 105000, stock: 20 },
        { id: 53, nombre: "New Balance 990v5", marca: "New Balance", talle: 40, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 150000, stock: 4 },
        { id: 54, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 40, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 160000, stock: 3 },
        { id: 55, nombre: "Nike React Infinity Run", marca: "Nike", talle: 40, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 145000, stock: 2 },
        { id: 56, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 40, color: "Azul", tipo: "calzado deportivo", genero: "Hombre", precio: 130000, stock: 5 },
        { id: 57, nombre: "Puma RS-X3", marca: "Puma", talle: 40, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 110000, stock: 14 },
        { id: 58, nombre: "Converse Jack Purcell", marca: "Converse", talle: 40, color: "Gris", tipo: "calzado casual", genero: "Hombre", precio: 90000, stock: 11 },
        { id: 59, nombre: "Vans Authentic", marca: "Vans", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 80000, stock: 8 },
        { id: 60, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 41, color: "Negro", tipo: "calzado deportivo", genero: "Hombre", precio: 125000, stock: 17 },
        { id: 61, nombre: "Nike Air Max 270", marca: "Nike", talle: 41, color: "Rojo", tipo: "calzado deportivo", genero: "Hombre", precio: 135000, stock: 0 },
        { id: 62, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 41, color: "Verde", tipo: "calzado casual", genero: "Hombre", precio: 110000, stock: 15 },
        { id: 63, nombre: "Puma Future Rider", marca: "Puma", talle: 41, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 115000, stock: 13 },
        { id: 64, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 90000, stock: 19 },
        { id: 65, nombre: "Vans Old Skool", marca: "Vans", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000, stock: 7 },
        { id: 66, nombre: "New Balance 574", marca: "New Balance", talle: 41, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 120000, stock: 16 },
        { id: 67, nombre: "Adidas Superstar", marca: "Adidas", talle: 41, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 130000, stock: 14 },
        { id: 68, nombre: "Nike Air Force 1", marca: "Nike", talle: 41, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 140000, stock: 3 },
        { id: 69, nombre: "Reebok Club C 85", marca: "Reebok", talle: 41, color: "Azul", tipo: "calzado casual", genero: "Hombre", precio: 100000, stock: 6 },
        { id: 70, nombre: "Puma Suede Classic", marca: "Puma", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000, stock: 11 },
        { id: 71, nombre: "Converse One Star", marca: "Converse", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 85000, stock: 18 },
        { id: 72, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 105000, stock: 2 },
        { id: 73, nombre: "New Balance 990v5", marca: "New Balance", talle: 41, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 150000, stock: 4 },
        { id: 74, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 41, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 160000, stock: 9 },
        { id: 75, nombre: "Nike React Infinity Run", marca: "Nike", talle: 41, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 145000, stock: 20 },
        { id: 76, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 41, color: "Azul", tipo: "calzado deportivo", genero: "Hombre", precio: 130000, stock: 1 },
        { id: 77, nombre: "Puma RS-X3", marca: "Puma", talle: 41, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 110000, stock: 10 },
        { id: 78, nombre: "Converse Jack Purcell", marca: "Converse", talle: 41, color: "Gris", tipo: "calzado casual", genero: "Hombre", precio: 90000, stock: 8 },
        { id: 79, nombre: "Vans Authentic", marca: "Vans", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 80000, stock: 5 },
        { id: 80, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 42, color: "Negro", tipo: "calzado deportivo", genero: "Hombre", precio: 125000, stock: 12 },
        { id: 81, nombre: "Nike Air Max 270", marca: "Nike", talle: 42, color: "Rojo", tipo: "calzado deportivo", genero: "Hombre", precio: 135000, stock: 17 },
        { id: 82, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 42, color: "Verde", tipo: "calzado casual", genero: "Hombre", precio: 110000, stock: 0 },
        { id: 83, nombre: "Puma Future Rider", marca: "Puma", talle: 42, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 115000, stock: 15 },
        { id: 84, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 90000, stock: 6 },
        { id: 85, nombre: "Vans Old Skool", marca: "Vans", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000, stock: 2 },
        { id: 86, nombre: "New Balance 574", marca: "New Balance", talle: 42, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 120000, stock: 13 },
        { id: 87, nombre: "Adidas Superstar", marca: "Adidas", talle: 42, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 130000, stock: 16 },
        { id: 88, nombre: "Nike Air Force 1", marca: "Nike", talle: 42, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 140000, stock: 9 },
        { id: 89, nombre: "Reebok Club C 85", marca: "Reebok", talle: 42, color: "Azul", tipo: "calzado casual", genero: "Hombre", precio: 100000, stock: 3 },
        { id: 90, nombre: "Puma Suede Classic", marca: "Puma", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000, stock: 5 },
        { id: 91, nombre: "Converse One Star", marca: "Converse", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 85000, stock: 20 },
        { id: 92, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 105000, stock: 8 },
        { id: 93, nombre: "New Balance 990v5", marca: "New Balance", talle: 42, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 150000, stock: 14 },
        { id: 94, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 42, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 160000, stock: 7 },
        { id: 95, nombre: "Nike React Infinity Run", marca: "Nike", talle: 42, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 145000, stock: 11 },
        { id: 96, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 42, color: "Azul", tipo: "calzado deportivo", genero: "Hombre", precio: 130000, stock: 18 },
        { id: 97, nombre: "Puma RS-X3", marca: "Puma", talle: 42, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 110000, stock: 1 },
        { id: 98, nombre: "Converse Jack Purcell", marca: "Converse", talle: 42, color: "Gris", tipo: "calzado casual", genero: "Hombre", precio: 90000, stock: 4 },
        { id: 99, nombre: "Vans Authentic", marca: "Vans", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 80000, stock: 10 },
        { id: 100, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 43, color: "Negro", tipo: "calzado deportivo", genero: "Hombre", precio: 125000, stock: 17 },
        { id: 101, nombre: "Nike Air Max 270", marca: "Nike", talle: 43, color: "Rojo", tipo: "calzado deportivo", genero: "Hombre", precio: 135000, stock: 19 },
        { id: 102, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 43, color: "Verde", tipo: "calzado casual", genero: "Hombre", precio: 110000, stock: 15 },
        { id: 103, nombre: "Puma Future Rider", marca: "Puma", talle: 43, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 115000, stock: 12 },
        { id: 104, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 90000, stock: 0 },
        { id: 105, nombre: "Vans Old Skool", marca: "Vans", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000, stock: 8 },
        { id: 106, nombre: "New Balance 574", marca: "New Balance", talle: 43, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 120000, stock: 2 },
        { id: 107, nombre: "Adidas Superstar", marca: "Adidas", talle: 43, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 130000, stock: 6 },
        { id: 108, nombre: "Nike Air Force 1", marca: "Nike", talle: 43, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 140000, stock: 9 },
        { id: 109, nombre: "Reebok Club C 85", marca: "Reebok", talle: 43, color: "Azul", tipo: "calzado casual", genero: "Hombre", precio: 100000, stock: 5 },
        { id: 110, nombre: "Puma Suede Classic", marca: "Puma", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000, stock: 11 },
        { id: 111, nombre: "Converse One Star", marca: "Converse", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 85000, stock: 14 },
        { id: 112, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 105000, stock: 4 },
        { id: 113, nombre: "New Balance 990v5", marca: "New Balance", talle: 43, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 150000, stock: 20 },
        { id: 114, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 43, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 160000, stock: 7 },
        { id: 115, nombre: "Nike React Infinity Run", marca: "Nike", talle: 43, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 145000, stock: 1 },
        { id: 116, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 43, color: "Azul", tipo: "calzado deportivo", genero: "Hombre", precio: 130000, stock: 10 },
        { id: 117, nombre: "Puma RS-X3", marca: "Puma", talle: 43, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 110000, stock: 18 },
        { id: 118, nombre: "Converse Jack Purcell", marca: "Converse", talle: 43, color: "Gris", tipo: "calzado casual", genero: "Hombre", precio: 90000, stock: 16 },
        { id: 119, nombre: "Vans Authentic", marca: "Vans", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 80000, stock: 13 },
        { id: 120, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 44, color: "Negro", tipo: "calzado deportivo", genero: "Hombre", precio: 125000, stock: 3 },
        { id: 121, nombre: "Nike Air Max 270", marca: "Nike", talle: 44, color: "Rojo", tipo: "calzado deportivo", genero: "Hombre", precio: 135000, stock: 17 },
        { id: 122, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 44, color: "Verde", tipo: "calzado casual", genero: "Hombre", precio: 110000, stock: 19 },
        { id: 123, nombre: "Puma Future Rider", marca: "Puma", talle: 44, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 115000, stock: 15 },
        { id: 124, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 90000, stock: 12 },
        { id: 125, nombre: "Vans Old Skool", marca: "Vans", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000, stock: 0 },
        { id: 126, nombre: "New Balance 574", marca: "New Balance", talle: 44, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 120000, stock: 2 },
        { id: 127, nombre: "Adidas Superstar", marca: "Adidas", talle: 44, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 130000, stock: 6 },
        { id: 128, nombre: "Nike Air Force 1", marca: "Nike", talle: 44, color: "Negro", tipo: "calzado casual", genero: "Hombre", precio: 140000, stock: 5 },
        { id: 129, nombre: "Reebok Club C 85", marca: "Reebok", talle: 44, color: "Azul", tipo: "calzado casual", genero: "Hombre", precio: 100000, stock: 8 },
        { id: 130, nombre: "Puma Suede Classic", marca: "Puma", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 95000, stock: 11 },
        { id: 131, nombre: "Converse One Star", marca: "Converse", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 85000, stock: 7 },
        { id: 132, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 105000, stock: 20 },
        { id: 133, nombre: "New Balance 990v5", marca: "New Balance", talle: 44, color: "Blanco", tipo: "calzado deportivo", genero: "Hombre", precio: 150000, stock: 10 },
        { id: 134, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 44, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 160000, stock: 14 },
        { id: 135, nombre: "Nike React Infinity Run", marca: "Nike", talle: 44, color: "Gris", tipo: "calzado deportivo", genero: "Hombre", precio: 145000, stock: 4 },
        { id: 136, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 44, color: "Azul", tipo: "calzado deportivo", genero: "Hombre", precio: 130000, stock: 18 },
        { id: 137, nombre: "Puma RS-X3", marca: "Puma", talle: 44, color: "Amarillo", tipo: "calzado deportivo", genero: "Hombre", precio: 110000, stock: 1 },
        { id: 138, nombre: "Converse Jack Purcell", marca: "Converse", talle: 44, color: "Gris", tipo: "calzado casual", genero: "Hombre", precio: 90000, stock: 9 },
        { id: 139, nombre: "Vans Authentic", marca: "Vans", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Hombre", precio: 80000, stock: 3 },
        { id: 140, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 38, color: "Negro", tipo: "calzado deportivo", genero: "Mujer", precio: 125000, stock: 16 },
        { id: 141, nombre: "Nike Air Max 270", marca: "Nike", talle: 38, color: "Rojo", tipo: "calzado deportivo", genero: "Mujer", precio: 135000, stock: 13 },
        { id: 142, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 38, color: "Verde", tipo: "calzado casual", genero: "Mujer", precio: 110000, stock: 17 },
        { id: 143, nombre: "Puma Future Rider", marca: "Puma", talle: 38, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 115000, stock: 12 },
        { id: 144, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 90000, stock: 15 },
        { id: 145, nombre: "Vans Old Skool", marca: "Vans", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000, stock: 6 },
        { id: 146, nombre: "New Balance 574", marca: "New Balance", talle: 38, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 120000, stock: 0 },
        { id: 147, nombre: "Adidas Superstar", marca: "Adidas", talle: 38, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 130000, stock: 2 },
        { id: 148, nombre: "Nike Air Force 1", marca: "Nike", talle: 38, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 140000, stock: 8 },
        { id: 149, nombre: "Reebok Club C 85", marca: "Reebok", talle: 38, color: "Azul", tipo: "calzado casual", genero: "Mujer", precio: 100000, stock: 7 },
        { id: 150, nombre: "Puma Suede Classic", marca: "Puma", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000, stock: 10 },
        { id: 151, nombre: "Converse One Star", marca: "Converse", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 85000, stock: 5 },
        { id: 152, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 105000, stock: 18 },
        { id: 153, nombre: "New Balance 990v5", marca: "New Balance", talle: 38, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 150000, stock: 11 },
        { id: 154, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 38, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 160000, stock: 20 },
        { id: 155, nombre: "Nike React Infinity Run", marca: "Nike", talle: 38, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 145000, stock: 3 },
        { id: 156, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 38, color: "Azul", tipo: "calzado deportivo", genero: "Mujer", precio: 130000, stock: 4 },
        { id: 157, nombre: "Puma RS-X3", marca: "Puma", talle: 38, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 110000, stock: 1 },
        { id: 158, nombre: "Converse Jack Purcell", marca: "Converse", talle: 38, color: "Gris", tipo: "calzado casual", genero: "Mujer", precio: 90000, stock: 9 },
        { id: 159, nombre: "Vans Authentic", marca: "Vans", talle: 38, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 80000, stock: 13 },
        { id: 160, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 39, color: "Negro", tipo: "calzado deportivo", genero: "Mujer", precio: 125000, stock: 16 },
        { id: 161, nombre: "Nike Air Max 270", marca: "Nike", talle: 39, color: "Rojo", tipo: "calzado deportivo", genero: "Mujer", precio: 135000, stock: 19 },
        { id: 162, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 39, color: "Verde", tipo: "calzado casual", genero: "Mujer", precio: 110000, stock: 14 },
        { id: 163, nombre: "Puma Future Rider", marca: "Puma", talle: 39, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 115000, stock: 17 },
        { id: 164, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 90000, stock: 12 },
        { id: 165, nombre: "Vans Old Skool", marca: "Vans", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000, stock: 15 },
        { id: 166, nombre: "New Balance 574", marca: "New Balance", talle: 39, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 120000, stock: 6 },
        { id: 167, nombre: "Adidas Superstar", marca: "Adidas", talle: 39, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 130000, stock: 0 },
        { id: 168, nombre: "Nike Air Force 1", marca: "Nike", talle: 39, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 140000, stock: 2 },
        { id: 169, nombre: "Reebok Club C 85", marca: "Reebok", talle: 39, color: "Azul", tipo: "calzado casual", genero: "Mujer", precio: 100000, stock: 8 },
        { id: 170, nombre: "Puma Suede Classic", marca: "Puma", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000, stock: 7 },
        { id: 171, nombre: "Converse One Star", marca: "Converse", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 85000, stock: 10 },
        { id: 172, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 105000, stock: 5 },
        { id: 173, nombre: "New Balance 990v5", marca: "New Balance", talle: 39, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 150000, stock: 18 },
        { id: 174, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 39, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 160000, stock: 11 },
        { id: 175, nombre: "Nike React Infinity Run", marca: "Nike", talle: 39, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 145000, stock: 20 },
        { id: 176, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 39, color: "Azul", tipo: "calzado deportivo", genero: "Mujer", precio: 130000, stock: 3 },
        { id: 177, nombre: "Puma RS-X3", marca: "Puma", talle: 39, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 110000, stock: 4 },
        { id: 178, nombre: "Converse Jack Purcell", marca: "Converse", talle: 39, color: "Gris", tipo: "calzado casual", genero: "Mujer", precio: 90000, stock: 1 },
        { id: 179, nombre: "Vans Authentic", marca: "Vans", talle: 39, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 80000, stock: 9 },
        { id: 180, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 40, color: "Negro", tipo: "calzado deportivo", genero: "Mujer", precio: 125000, stock: 13 },
        { id: 181, nombre: "Nike Air Max 270", marca: "Nike", talle: 40, color: "Rojo", tipo: "calzado deportivo", genero: "Mujer", precio: 135000, stock: 16 },
        { id: 182, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 40, color: "Verde", tipo: "calzado casual", genero: "Mujer", precio: 110000, stock: 19 },
        { id: 183, nombre: "Puma Future Rider", marca: "Puma", talle: 40, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 115000, stock: 14 },
        { id: 184, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 90000, stock: 17 },
        { id: 185, nombre: "Vans Old Skool", marca: "Vans", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000, stock: 12 },
        { id: 186, nombre: "New Balance 574", marca: "New Balance", talle: 40, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 120000, stock: 15 },
        { id: 187, nombre: "Adidas Superstar", marca: "Adidas", talle: 40, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 130000, stock: 6 },
        { id: 188, nombre: "Nike Air Force 1", marca: "Nike", talle: 40, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 140000, stock: 0 },
        { id: 189, nombre: "Reebok Club C 85", marca: "Reebok", talle: 40, color: "Azul", tipo: "calzado casual", genero: "Mujer", precio: 100000, stock: 2 },
        { id: 190, nombre: "Puma Suede Classic", marca: "Puma", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000, stock: 8 },
        { id: 191, nombre: "Converse One Star", marca: "Converse", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 85000, stock: 7 },
        { id: 192, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 105000, stock: 10 },
        { id: 193, nombre: "New Balance 990v5", marca: "New Balance", talle: 40, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 150000, stock: 5 },
        { id: 194, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 40, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 160000, stock: 18 },
        { id: 195, nombre: "Nike React Infinity Run", marca: "Nike", talle: 40, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 145000, stock: 11 },
        { id: 196, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 40, color: "Azul", tipo: "calzado deportivo", genero: "Mujer", precio: 130000, stock: 20 },
        { id: 197, nombre: "Puma RS-X3", marca: "Puma", talle: 40, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 110000, stock: 3 },
        { id: 198, nombre: "Converse Jack Purcell", marca: "Converse", talle: 40, color: "Gris", tipo: "calzado casual", genero: "Mujer", precio: 90000, stock: 4 },
        { id: 199, nombre: "Vans Authentic", marca: "Vans", talle: 40, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 80000, stock: 1 },
        { id: 200, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 41, color: "Negro", tipo: "calzado deportivo", genero: "Mujer", precio: 125000, stock: 9 },
        { id: 201, nombre: "Nike Air Max 270", marca: "Nike", talle: 41, color: "Rojo", tipo: "calzado deportivo", genero: "Mujer", precio: 135000, stock: 13 },
        { id: 202, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 41, color: "Verde", tipo: "calzado casual", genero: "Mujer", precio: 110000, stock: 16 },
        { id: 203, nombre: "Puma Future Rider", marca: "Puma", talle: 41, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 115000, stock: 19 },
        { id: 204, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 90000, stock: 14 },
        { id: 205, nombre: "Vans Old Skool", marca: "Vans", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000, stock: 17 },
        { id: 206, nombre: "New Balance 574", marca: "New Balance", talle: 41, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 120000, stock: 12 },
        { id: 207, nombre: "Adidas Superstar", marca: "Adidas", talle: 41, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 130000, stock: 15 },
        { id: 208, nombre: "Nike Air Force 1", marca: "Nike", talle: 41, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 140000, stock: 6 },
        { id: 209, nombre: "Reebok Club C 85", marca: "Reebok", talle: 41, color: "Azul", tipo: "calzado casual", genero: "Mujer", precio: 100000, stock: 0 },
        { id: 210, nombre: "Puma Suede Classic", marca: "Puma", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000, stock: 2 },
        { id: 211, nombre: "Converse One Star", marca: "Converse", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 85000, stock: 8 },
        { id: 212, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 105000, stock: 7 },
        { id: 213, nombre: "New Balance 990v5", marca: "New Balance", talle: 41, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 150000, stock: 10 },
        { id: 214, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 41, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 160000, stock: 5 },
        { id: 215, nombre: "Nike React Infinity Run", marca: "Nike", talle: 41, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 145000, stock: 18 },
        { id: 216, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 41, color: "Azul", tipo: "calzado deportivo", genero: "Mujer", precio: 130000, stock: 11 },
        { id: 217, nombre: "Puma RS-X3", marca: "Puma", talle: 41, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 110000, stock: 20 },
        { id: 218, nombre: "Converse Jack Purcell", marca: "Converse", talle: 41, color: "Gris", tipo: "calzado casual", genero: "Mujer", precio: 90000, stock: 3 },
        { id: 219, nombre: "Vans Authentic", marca: "Vans", talle: 41, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 80000, stock: 4 },
        { id: 220, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 42, color: "Negro", tipo: "calzado deportivo", genero: "Mujer", precio: 125000, stock: 1 },
        { id: 221, nombre: "Nike Air Max 270", marca: "Nike", talle: 42, color: "Rojo", tipo: "calzado deportivo", genero: "Mujer", precio: 135000, stock: 9 },
        { id: 222, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 42, color: "Verde", tipo: "calzado casual", genero: "Mujer", precio: 110000, stock: 13 },
        { id: 223, nombre: "Puma Future Rider", marca: "Puma", talle: 42, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 115000, stock: 16 },
        { id: 224, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 90000, stock: 19 },
        { id: 225, nombre: "Vans Old Skool", marca: "Vans", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000, stock: 14 },
        { id: 226, nombre: "New Balance 574", marca: "New Balance", talle: 42, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 120000, stock: 17 },
        { id: 227, nombre: "Adidas Superstar", marca: "Adidas", talle: 42, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 130000, stock: 12 },
        { id: 228, nombre: "Nike Air Force 1", marca: "Nike", talle: 42, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 140000, stock: 15 },
        { id: 229, nombre: "Reebok Club C 85", marca: "Reebok", talle: 42, color: "Azul", tipo: "calzado casual", genero: "Mujer", precio: 100000, stock: 6 },
        { id: 230, nombre: "Puma Suede Classic", marca: "Puma", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000, stock: 0 },
        { id: 231, nombre: "Converse One Star", marca: "Converse", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 85000, stock: 2 },
        { id: 232, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 105000, stock: 8 },
        { id: 233, nombre: "New Balance 990v5", marca: "New Balance", talle: 42, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 150000, stock: 7 },
        { id: 234, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 42, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 160000, stock: 10 },
        { id: 235, nombre: "Nike React Infinity Run", marca: "Nike", talle: 42, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 145000, stock: 5 },
        { id: 236, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 42, color: "Azul", tipo: "calzado deportivo", genero: "Mujer", precio: 130000, stock: 18 },
        { id: 237, nombre: "Puma RS-X3", marca: "Puma", talle: 42, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 110000, stock: 11 },
        { id: 238, nombre: "Converse Jack Purcell", marca: "Converse", talle: 42, color: "Gris", tipo: "calzado casual", genero: "Mujer", precio: 90000, stock: 20 },
        { id: 239, nombre: "Vans Authentic", marca: "Vans", talle: 42, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 80000, stock: 3 },
        { id: 240, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 43, color: "Negro", tipo: "calzado deportivo", genero: "Mujer", precio: 125000, stock: 4 },
        { id: 241, nombre: "Nike Air Max 270", marca: "Nike", talle: 43, color: "Rojo", tipo: "calzado deportivo", genero: "Mujer", precio: 135000, stock: 1 },
        { id: 242, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 43, color: "Verde", tipo: "calzado casual", genero: "Mujer", precio: 110000, stock: 9 },
        { id: 243, nombre: "Puma Future Rider", marca: "Puma", talle: 43, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 115000, stock: 13 },
        { id: 244, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 90000, stock: 16 },
        { id: 245, nombre: "Vans Old Skool", marca: "Vans", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000, stock: 19 },
        { id: 246, nombre: "New Balance 574", marca: "New Balance", talle: 43, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 120000, stock: 14 },
        { id: 247, nombre: "Adidas Superstar", marca: "Adidas", talle: 43, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 130000, stock: 17 },
        { id: 248, nombre: "Nike Air Force 1", marca: "Nike", talle: 43, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 140000, stock: 12 },
        { id: 249, nombre: "Reebok Club C 85", marca: "Reebok", talle: 43, color: "Azul", tipo: "calzado casual", genero: "Mujer", precio: 100000, stock: 15 },
        { id: 250, nombre: "Puma Suede Classic", marca: "Puma", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000, stock: 6 },
        { id: 251, nombre: "Converse One Star", marca: "Converse", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 85000, stock: 0 },
        { id: 252, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 105000, stock: 2 },
        { id: 253, nombre: "New Balance 990v5", marca: "New Balance", talle: 43, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 150000, stock: 8 },
        { id: 254, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 43, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 160000, stock: 7 },
        { id: 255, nombre: "Nike React Infinity Run", marca: "Nike", talle: 43, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 145000, stock: 10 },
        { id: 256, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 43, color: "Azul", tipo: "calzado deportivo", genero: "Mujer", precio: 130000, stock: 5 },
        { id: 257, nombre: "Puma RS-X3", marca: "Puma", talle: 43, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 110000, stock: 18 },
        { id: 258, nombre: "Converse Jack Purcell", marca: "Converse", talle: 43, color: "Gris", tipo: "calzado casual", genero: "Mujer", precio: 90000, stock: 11 },
        { id: 259, nombre: "Vans Authentic", marca: "Vans", talle: 43, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 80000, stock: 20 },
        { id: 260, nombre: "Adidas T4 Fire", marca: "Adidas", talle: 44, color: "Negro", tipo: "calzado deportivo", genero: "Mujer", precio: 125000, stock: 3 },
        { id: 261, nombre: "Nike Air Max 270", marca: "Nike", talle: 44, color: "Rojo", tipo: "calzado deportivo", genero: "Mujer", precio: 135000, stock: 4 },
        { id: 262, nombre: "Reebok Classic Leather", marca: "Reebok", talle: 44, color: "Verde", tipo: "calzado casual", genero: "Mujer", precio: 110000, stock: 1 },
        { id: 263, nombre: "Puma Future Rider", marca: "Puma", talle: 44, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 115000, stock: 9 },
        { id: 264, nombre: "Converse Chuck Taylor All Star", marca: "Converse", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 90000, stock: 13 },
        { id: 265, nombre: "Vans Old Skool", marca: "Vans", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000, stock: 16 },
        { id: 266, nombre: "New Balance 574", marca: "New Balance", talle: 44, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 120000, stock: 19 },
        { id: 267, nombre: "Adidas Superstar", marca: "Adidas", talle: 44, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 130000, stock: 14 },
        { id: 268, nombre: "Nike Air Force 1", marca: "Nike", talle: 44, color: "Negro", tipo: "calzado casual", genero: "Mujer", precio: 140000, stock: 17 },
        { id: 269, nombre: "Reebok Club C 85", marca: "Reebok", talle: 44, color: "Azul", tipo: "calzado casual", genero: "Mujer", precio: 100000, stock: 12 },
        { id: 270, nombre: "Puma Suede Classic", marca: "Puma", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 95000, stock: 15 },
        { id: 271, nombre: "Converse One Star", marca: "Converse", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 85000, stock: 20 },
        { id: 272, nombre: "Vans Sk8-Hi", marca: "Vans", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 105000, stock: 3 },
        { id: 273, nombre: "New Balance 990v5", marca: "New Balance", talle: 44, color: "Blanco", tipo: "calzado deportivo", genero: "Mujer", precio: 150000, stock: 4 },
        { id: 274, nombre: "Adidas Ultraboost", marca: "Adidas", talle: 44, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 160000, stock: 1 },
        { id: 275, nombre: "Nike React Infinity Run", marca: "Nike", talle: 44, color: "Gris", tipo: "calzado deportivo", genero: "Mujer", precio: 145000, stock: 9 },
        { id: 276, nombre: "Reebok Zig Kinetica", marca: "Reebok", talle: 44, color: "Azul", tipo: "calzado deportivo", genero: "Mujer", precio: 130000, stock: 13 },
        { id: 277, nombre: "Puma RS-X3", marca: "Puma", talle: 44, color: "Amarillo", tipo: "calzado deportivo", genero: "Mujer", precio: 110000, stock: 16 },
        { id: 278, nombre: "Converse Jack Purcell", marca: "Converse", talle: 44, color: "Gris", tipo: "calzado casual", genero: "Mujer", precio: 90000, stock: 19 },
        { id: 279, nombre: "Vans Authentic", marca: "Vans", talle: 44, color: "Blanco", tipo: "calzado casual", genero: "Mujer", precio: 80000, stock: 14 }

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
    //Base de datos talle
    const talledb = [
        { id: 1, talle: 38 },
        { id: 2, talle: 39 },
        { id: 3, talle: 40 },
        { id: 4, talle: 41 },
        { id: 5, talle: 42 },
        { id: 6, talle: 43 },
        { id: 7, talle: 44 }
    ]
    //Base de datos color
    const colordb = [
        { id: 1, nombre: "Negro" },
        { id: 2, nombre: "Rojo" },
        { id: 3, nombre: "Verde" },
        { id: 4, nombre: "Amarillo" },
        { id: 5, nombre: "Blanco" },
        { id: 6, nombre: "Azul" },
        { id: 7, nombre: "Gris" }
    ]
    //Base de datos genero
    const generodb = [
        { id: 1, nombre: "Hombre" },
        { id: 2, nombre: "Mujer" }
    ]
    ///////////////////////
    welcome()
    let name = login()
    let opcionElegida = menuPrincipal(name)
    let catPropiedad = categoriadb[opcionElegida - 1].nombre.toLowerCase()
    console.log(catPropiedad)
    let opcionSubmenu = menuSecundario(catPropiedad)

    function menuSecundario(opcionElegida) {
        console.log(opcionElegida)
        base={}
        if(opcionElegida=="marca"){
            base=marcadb
        }else if(opcionElegida=="género"){
            base=generodb
        }else if(opcionElegida=="color"){
            base=colordb
        }
        console.log(base)
        let opcion = Number(prompt("Elija una opción de búsqueda para su calzado\n" + opciones(base) + "9: Volver\n0: Salir\n"))

        if (opcion === 0) {
            exit(name)
        } else if (opcion === 9) {
            opcionElegida = menuPrincipal(name)
        } else if (opcion >= 1 || opcion <= base.length) {

        } else if (opcion > base.length || opcion < 0) {
            alert("Debe seleccionar una de las opciones disponibles")
        }

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
        let opcion = ""
        do {
            opcion = Number(prompt(`Bienvenido ${name}\nElija una opción de búsqueda para su calzado\n${opciones(categoriadb)}0: Salir\n`))
            if (opcion === 0) {
                exit(name)
            } else if (opcion < 1 || opcion > 3) {
                alert("Por favor, ingrese una opción válida")
            }
        } while (opcion !== 0 && (opcion < 1 || opcion > 3))
        return opcion
    }
    ///////////////////////////////
    function opciones(objeto) {
        let opciones = ""
        objeto.forEach(item => {
            opciones += `${item.id}: ${item.nombre}\n`
        })
        console.log(opciones)
        return opciones
    }
    ///////////////////////////////
    function submenu(objeto, propiedad) {
        let lista = ""
        objeto.forEach(item => {
            lista += `${item.id}: ${item[propiedad]}\n`
        })
        return lista
    }
    ///////////////////////////////















}