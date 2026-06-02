//arreglo

const productos = [
    {nombre: "Base de maquillaje MAC", precio: 663, categoria: "Belleza" },
    {nombre: "Tenis Adidas", precio: 1300, categoria: "Deportes" },
    {nombre: "Consola PlayStation 5", precio: 8900, categoria: "Videojuegos" },
    {nombre: "Reloj TOUS", precio: 4500, categoria: "Joyería" },
    {nombre: "Bocina JBL", precio: 3700, categoria: "Audio" },
];

//filter
const menores = productos.filter(producto => producto.precio < 1000);
console.log(menores);