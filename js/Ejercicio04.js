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

    console.warn("2. Declaracion de un Objeto")
    property1= {
        id: 1,
        name: "Departamento en el Centro de Ciudad de Mexico",
        description: "Hermoso departamento de 3 recámaras, 1 baño y 1 cajón de estacionamiento ubicado en el Centro de ciudad de México, ubicado en un tercer piso.",
        type: "D",
        price: 7500.00,
        isRentable: true,
        isSaleable: false,
        includedServices: ["Agua", "Luz", "Gas"],
        lat: 19.428313,
        long: -99.1020177,
        status: "Good",
        token: Symbol("D-12558-CDMX-MX5"),
        ownerID: 32412
    }

//Impresion del objeto en formato tabla
console.table(property1) 

//3. Leyendo las propiedades de un objeto
/*Un objeto es un conjunto de variables que abstraen una entidad física o conceptual de la que es significativo
almacenar información para el sistema que estamos desarrollando.

Para acceder a las propiedades individuales basta con poner el nombre del objeto un "." y el nombre de la 
propiedad*/

console.warn("3. Lectura de propiedades de un Objeto")

console.warn("3. Lectura de propiedades de un objeto");
console.log(`El usuario con id ${property1.ownerID} está rentando un: ${property1.name} 
    el cual descibe cómo: ${property1.description} por un precio de: ${property1.price} con los servicios 
    incluidos de: ${property1.includedServices} ${property1.isSaleable?", actualmente está a la venta":
    "Que por el momento no está a la venta" }`);


//4. Modificacion de los valores de las propiedades de un objeto
/*Para modificar los datos de una variable basta con acceder a la propiedad deseada a
modificar y asignarle su nuevo a traves del signo = */

property1.price = 8200.00
property1.isSaleable = true;
property1.includeServices = ["Agua", "Luz", "Gas", "Internet", "Seguridad Privada"];

console.warn("4. Modificacion de propiedades de un Objeto");

console.log(`El usuario con id ${property1.ownerID} está rentando un: ${property1.name} 
    el cual descibe cómo: ${property1.description} por un precio de: ${property1.price} con los servicios 
    incluidos de: ${property1.includeServices} ${property1.isSaleable?", actualmente está a la venta":
    "Que por el momento no está a la venta" }`);

// 5. Destructuración de objetos (Object Destructuring)
/* Java Script es un lenguaje dinamico que permite que un pbjeto previamente definido puede ser compuesto en pequeñas nuevas 
partes (variables) para que estas puedan ser manipuladas según sea la necesidad*/

user1 = {
    userId: 32412,
    name: "Jonhy Ortiz",
    email: "cueritos.Ortiz@gmail.com",
    createAt: Date("2015/01/30 23:15:52"),
    lastLogin: Date("2026/01/20 08:00:05"),
    userRole: "Vendedor",
    totalProperties: 12,
    rating: 9.4
};

user2 = {
    userId: 240343,
    name: "Jonhy Mota",
    email: "mota@gmail.com",
    createAt: Date("2024/08/20 15:08:58"),
    lastLogin: Date("2023/01/19 23:15:35"),
    userRole: "Comprador",
    rating: 8.5,
    lastOperation: "Busca departamento en renta"
};

user3 = {
    userId: 478411,
    name: "Diana Martinez",
    email: "juanpablo@gmail.com",
    createAt: Date("2024/08/20 15:08:58"),
    lastLogin: Date("2023/01/19 23:15:35"),
    userRole: "Comprador",
    rating: 9.9,
    lastOperation: "Busca departamento en renta"
};

user4 = {
    userId: 798412,
    name: "Carlos Rene",
    email: "carlosrene@gmail.com",
    createAt: Date("2024/08/20 15:08:58"),
    lastLogin: Date("2023/01/19 23:15:35"),
    userRole: "Comprador",
    rating: 9.5,
    lastOperation: "Busca departamento en renta"
};

console.warn("5. Destructuración de objetos");

const buyerbid = (seller, buyer, property, price_bidded) => {
    const { userId: sellerid, email: selleremail } = seller;
    const { userId: buyerid, email: buyeremail } = buyer;
    const { price, id } = property;

    const fecha_oferta = new Date().toLocaleString();

    console.log(`El usuario ${buyerid} (${buyeremail}) esta realizando una oferta al usuario ${sellerid} (${selleremail}) por la cantidad de: ${price_bidded} por la propriedad ${id} con fecha: ${fecha_oferta}`);

    return {
        buyerid,
        sellerid,
        property: id,
        propertyPrice: price,
        date_bidded: fecha_oferta,
        bid_acurrance: (price_bidded / price * 100).toFixed(2) + "%"
    };
};

// Test 1. El usuario 2 realiza una oferta de 7500
let bid1 = buyerbid(user1, user2, property1, 7500);
console.log(`La oferta tiene una exactitud del: ${bid1.bid_acurrance}`);

// Test 2. El usuario 3 realiza una oferta de 8200
let bid2 = buyerbid(user1, user3, property1, 8200);
console.log(`La oferta tiene una exactitud del: ${bid2.bid_acurrance}`);

// Test 3. El usuario 4 realiza una oferta de 10000
let bid3 = buyerbid(user1, user4, property1, 10000);
console.log(`La oferta tiene una exactitud del: ${bid3.bid_acurrance}`);


// Autor: Juan Pablo Reyes Cruz