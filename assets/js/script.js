//fecha
// crea un nuevo objeto `Date`
var today = new Date();
 
// obtener la fecha y la hora
var now = today.toLocaleString();
console.log(now);
document.getElementById("demo").innerHTML = now;


// Datos
var datos = [{
    nombre: "BICICLETA DE RUTA",
    id: 1,
    genero: "Masculino",
    categoria: "Bicicletas",
    precio: 1590000,
    stock: 5,
    img: "./img/bici.jpg"
},
    {
        nombre: "ZAPATILLAS CICLISMO",
        id: 2,
        genero: "Unisex",
        categoria: "Indumentaria",
        precio: 90000,
        stock: 8,
        img: "./img/ZapatillasCiclismo.jpg"
    },
    {
        nombre: "CASCO PARA ADULTO",
        id: 3,
        genero: "Masculino",
        categoria: "Seguridad",
        precio: 79990,
        stock: 3,
        img: "./img/CascoAdulto.jpg"
    },
    {
        nombre: "CASCO PARA NIÑO/A",
        id: 4, genero: "Unisex",
        categoria: "Seguridad",
        precio: 39990,
        stock: 13,
        img: "./img/CascoNinio.jpg"
    },
    {
        nombre: "BICICLETA PARA MUJER",
        id: 5,
        genero: "Femenino",
        categoria: "Bicicletas",
        precio: 100000,
        stock: 12,
        img: "./img/bicicletaMujer.jpg"
    },
    {
        nombre: "BICICLETA PARA NIÑO/A",
        id: 6,
        genero: "Unisex",
        categoria: "Bicicletas",
        precio: 530900,
        stock: 10,
        img: "./img/BiciNinio.jpg"
    },
    {
        nombre: "GUANTES CICLISMO",
        id: 7,
        genero: "Unisex",
        categoria: "Indumentaria",
        precio: 12000,
        stock: 20,
        img: "./img/Guanteciclismo.jpg"
    },
    {
        nombre: "SCOOTER ELÉCTRICO",
        id: 8,
        genero: "Unisex",
        categoria: "E-move",
        precio: 149900,
        stock: 4,
        img: "./img/ScooterElectrico.jpg"
    },
    {
        nombre: "FOCO LUZ LED BLANCO",
        id: 9,
        genero: "Unisex",
        categoria: "Accesorios",
        precio: 20000,
        stock: 9,
        img: "./img/LuzBicicleta.jpg"
    },
    {
        nombre: "CONJUNTO DE CICLISMO",
        id: 10,
        genero: "Unisex",
        categoria: "indumentaria",
        precio: 11900,
        stock: 11,
        img: "./img/ConjuntoCiclismo.jpg"
    }]

    //funcion que carga la estructura html de la vista de inicio
function renderTarjetas() { 
    var contenidoPrincipal = document.querySelector('#contenidoPrincipal'); //main
    contenidoPrincipal.setAttribute('class','container');
    var contenedorPrincipal = document.querySelector('div');
    contenedorPrincipal.setAttribute('class','row');
    
    //seteo los datos a las tarjetas
    datos.forEach(function(producto){
/*construyendo la card*/
    var contenedorTarjeta = document.createElement('div');
    var imagen = document.createElement('img');
    
    /*construimos el cuerpo de la tarjeta*/
    var contenedorCuerpoTarjeta = document.createElement('div');
    var tituloTarjeta = document.createElement('h5');
    var parrafoTarjeta = document.createElement('p');
    /*Construyendo los detalles de la tarjeta los ul y li*/
    var listaTarjeta = document.createElement('ul');
    var listaItemUno = document.createElement('li');
    var listaItemDos = document.createElement('li');
    var listaItemTres = document.createElement('li');
    /*boton agregar*/
    var btnAgregar = document.createElement('button');
        
    /*aplicando estilos*/
    contenedorTarjeta.setAttribute('class', 'card col-3 mx-3 my-3 border-info ');
    contenedorTarjeta.setAttribute('style', 'width:18rem;');
    
    imagen.setAttribute('class', 'card-img-fluid');
        imagen.setAttribute('alt', producto.nombre);
        imagen.setAttribute('style', 'max-width: 100%; height: 180px;');
    imagen.setAttribute('src', `assets/${producto.img}`);//comillas invertidas ``
       
    contenedorCuerpoTarjeta.setAttribute('class', 'card-body ');
    
    tituloTarjeta.setAttribute('class', 'card-title text-center text-primary');
    tituloTarjeta.innerHTML = producto.nombre;

    parrafoTarjeta.setAttribute('class', 'card-text text-center text-secondary');
    parrafoTarjeta.innerHTML = producto.categoria;

    listaTarjeta.setAttribute('class', 'list-group list-group-flush');

    listaItemUno.setAttribute('class', 'list-group-item text-center text-muted');
    listaItemUno.innerHTML = producto.genero;
    listaItemDos.setAttribute('class', 'list-group-item text-center');
    listaItemDos.innerHTML = producto.precio;
    listaItemTres.setAttribute('class', 'list-group-item text-center ');
    listaItemTres.innerHTML = producto.stock;
        
    btnAgregar.setAttribute('class', 'btn btn-primary mb-3');
    btnAgregar.innerHTML = 'Agregar al carrito';
        btnAgregar.addEventListener('click', function () { 
            agregarCarrito(producto);
        });

    contenedorCuerpoTarjeta.append(tituloTarjeta, parrafoTarjeta);
    listaTarjeta.append(listaItemUno, listaItemDos, listaItemTres);
    contenedorTarjeta.append(imagen, contenedorCuerpoTarjeta, listaTarjeta, btnAgregar);
    contenedorPrincipal.append(contenedorTarjeta);


    });//fin foreach
    
     contenidoPrincipal.append(contenedorPrincipal);

    
}

//llamado a la funcion
renderTarjetas();

//funcion agregar al carrito
function agregarCarrito(elemento) { 
    var contador = contador + 1;//cuenta los elemtos seleccionados.
     console.log("nombre: ",nombreProducto);

    
   
}

