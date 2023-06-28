const productos = [
    { nombre: "GT 1030", precio: 500, id: "1", img: "../img/gt 1030.jpg", idCat: "2" },
    { nombre: "RTX 3050", precio: 1300, id: "2", img: "../img/rtx 3050.jpg", idCat: "2" },
    { nombre: "SF 600", precio: 800, id: "3", img: "../img/fuente 600.jfif", idCat: "3" },
    { nombre: "Z 700", precio: 400, id: "4", img: "../img/fuente 700.jfif", idCat: "3" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}

//Creamos una nueva función similar a la anterior pero que nos retorne un solo item:

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

//Creamos una nueva función que retorna toda la categoría. 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 100)
    })
}