//Estilización de la barra zona de pruebas en el Devtools en el navegador 
console.log ("%cEjercicio 04 Objetos", style_console);

console.warn("1. Propiedades de un Objeto")

let propertyID = 1; 
let propertyName = "Departamento en el Centro de Ciudad de México";
let propertyDescription = "Hermoso departamento de 3 recámaras, 1 baño y 1 cajón de estacionamiento ubicado en el Centro de ciudad de México, ubicado en un tercer piso."
let propertyType = "D";     //H: House D: Departament T: Terrain L: Locale W: Warehouse C: Cabain
let propertyIsSaleable = false; //Se vende?
let propertyIsRentable = true; //Se renta?

let propertyPrice = 7500.00;
let propertyLat = 19.428313;
let propertyLong = -99.1020177;
let propertyToken = Symbol("D-12558-CDMX-MX5");
let propertyIncludedServices = ["Agua","Luz","Gas"];
let propertyImage = null
let propertyOwnerID = 32412
let propertyStatus = "Good"

console.log (`Datos de la propiedad en RENTA:
    Nombre: ${propertyName}
    Descripción: ${propertyDescription}
    Precio: ${propertyPrice}
    Ubicación:  Latitud: ${propertyLat}    Longitud: ${propertyLong}
    Servicios incluidos: ${propertyIncludedServices}
    En Renta: ${propertyIsRentable}
    En Venta: ${propertyIsSaleable}
    Token: ${propertyToken.description}
    Dueño: ${propertyOwnerID}
    Imagen: ${propertyImage}`);

//2. Declaracion de un objeto 
    /*Para Declarar un Objeto en JS es necesario asignarle un nombre y todas sus propiedades 
    irán entre {} y separadas por coma en el orden clave : valor*/

    property1= {
        id: 1,
        name: "Departamento en el Centro de Ciudad de Mexico",
        description: "Hermoso departamento de 3 recámaras, 1 baño y 1 cajón de estacionamiento ubicado en el Centro de ciudad de México, ubicado en un tercer piso.",
        type: "D",
        price: 7500.00,
        isRentable: true,
        isSaleable: false,
        IncludedServices: ["Agua", "Luz", "Gas"],
        lat: 19.428313,
        long: -99.1020177,
        status: "Good",
        token: Symbol("D-12558-CDMX-MX5"),
        ownerID: 32412
    }

//Impresion del objeto en formato tabla
console.table(property1) 