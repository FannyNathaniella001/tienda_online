//fecha
// crea un nuevo objeto `Date`
var today = new Date();
 
// obtener la fecha y la hora
var now = today.toLocaleString();
console.log(now);
document.getElementById("demo").innerHTML = now;


// Datos
var datos = [ { nombre: "bicicleta de Ruta", id: 1, genero: "masculino", categoria: "bicicletas", precio: 1590000, stock: 5, img: "./img/BicicletaAdulto.png" }, { nombre: "zapatillas ciclismo", id: 2, genero: "unisex", categoria: "indumentaria", precio: 90000, stock: 8, img: "./img/ZapatillasCiclismo.jpeg" }, { nombre: "casco adulto", id: 3, genero: "masculino", categoria: "seguridad", precio: 79990, stock: 3, img: "./img/CascoAdulto.png" }, { nombre: "casco niño/a", id: 4, genero: "unisex", categoria: "seguridad", precio: 39990, stock: 13, img: "./img/CascoNinio.png" }, { nombre: "bicicleta mujer", id: 5, genero: "femenino", categoria: "bicicletas", precio: 100000, stock: 12, img: "./img/bicicletaMujer.webp" }, { nombre: "bicicleta niño/a", id: 6, genero: "unisex", categoria: "bicicletas", precio: 530900, stock: 10, img: "./img/BiciNinio.jpeg" }, { nombre: "guantes ciclismo", id: 7, genero: "unisex", categoria: "indumentaria", precio: 12000, stock: 20, img: "./img/Guanteciclismo.webp" }, { nombre: "scooter eléctrico", id: 8, genero: "unisex", categoria: "e-move", precio: 149900, stock: 4, img: "./img/ScooterElectrico.png" }, { nombre: "foco Led Blanco", id: 9, genero: "unisex", categoria: "accesorios", precio: 20000, stock: 9, img: "./img/LuzBicicleta.jpeg" }, { nombre: "conjunto Ciclismo", id: 10, genero: "unisex", categoria: "indumentaria", precio: 11900, stock: 11, img: "./img/ConjuntoCiclismo.jpeg" } ]