// Tipos de datos en Java Script 

// Personalizacion de salida a consola

//const bg = "linear-gradiant(45deg, rgba(52,152,219,1) 0%, rgba(26, 188, 156, 1) 50%)";

//const style_console = `background: ${bg}; color: white; border-radius: 6px; padding:4px; font-size:1.0rem; font-weight:bold;`;

console.log("%c1.- Ejercicio 02: Tipo de datos", style_console);

/* 1. Undefined - valor por defecto asignado a variables declaradas pero no inicializadas,
 no es igual a null */

console.warn("1.- UNDEFINED (No definido")
let usuarioLogueado;
var rolUsuario;
const ultimoAcceso = undefined;

console.log("Valor actuales de las variables: ");
console.log(`usuarioLogueado:" = $(usuarioLogueado)`);
console.log(`rolUsuario:" = $(rolUsuario)`);
console.log(`ultimoAcceso:" = $(ultimoAcceso)`);

/* En java script existe el metodo typeof() que nos devuelve el tipo de dato de una variable
preficamente declarada.*/

console.log("Valor actuales de las variables: ");
console.log(`usuarioLogueado:" = ${typeof(usuarioLogueado)}`);
console.log(`rolUsuario:" = ${typeof(rolUsuario)}`);
console.log(`ultimoAcceso:" = ${typeof(ultimoAcceso)}`);

//Supongamos que un usuario denominado MarcoRamirez99 se ha logueado exitosamente, el valor de la variable debera actualizarce a su username

usuarioLogueado = "JuanPablo3006";

// pero no solo cambiara su valor, tambien cambiara su tipo

console.log(`El valor de la variable usuarioLogueado es: ${usuarioLogueado} y su nuevo tipo de dato es: ${typeof(usuarioLogueado)}`);

//2. BOOLEAN (True/False) - verdadero o Falso

console.warn("2.- BOOLEAN (TRUE/FALSE)")
var hayUsuarioLogueado = false

/* Supongamos que nuestra app tendra un menu específico para los usuarios registrados, en el podran visualizar sus mensajes o estado
de sus publicaciones de renta o venta de propiedades, a diferencia de un usuario que entra de manera incognito a visusalizar las propiedades. */
function validacionUsuarioLogeado(){
    console.log(`El valor de la variable hayUsuarioLogueado es: ${hayUsuarioLogueado}, que es de tipo: ${typeof(hayUsuarioLogueado)}`);

    if(hayUsuarioLogueado === true)
    {
        console.log("Dado que se ha logueado un usuario la app mostrara el menú de usuario")
    }
    else if(!hayUsuarioLogueado)
    {
        console.log("Dado que no hay un usuario logueao la app no  mostrara el menú de usuario")
    }
    else{
        console.log("No puedo procesar este tipo de dato, requiere de un BOOLEAN ")
    }
}

// test1 : usuario logeado = true
hayUsuarioLogueado = true;
console.log("Test 1")
validacionUsuarioLogeado();

// test2 : usuario logeado = false
hayUsuarioLogueado = false;
console.log("Test 2")
validacionUsuarioLogeado();

// test3 : usuario logeado = a cualquier otra cosa
hayUsuarioLogueado = 52.5;
console.log("Test 3")
validacionUsuarioLogeado();

// 3. NUMBER (Numéricos)
console.warn("3. NUMBER (Numericos)")
/* Es iimportante saber que Java Script a diferencia de otros lenguajes, no diferencia los datos de tipo numerico, 
lo que para otro lenguajes de programacion lo que un ENTERO (Int), Flotante (Float), DECIMAL, DOBLE (Double) pera el
solo son numeros */

let userID_Owner = 225
let priceProperty = 125000.50
let latGPS = 20.240508
let longGPS = -97.952881
let altGPS = 1180

console.log(`Los valores de las variables declaradas para los datos de la propiedad son: 
    ID del Usuario = ${userID_Owner},
    Precio de la propiedad = ${priceProperty},
    Latitud (GPS) = ${latGPS},
    Longitud (GPS) = ${longGGPS}, 
    Altitud (GPS) = ${altGPS}`);

console.log(`Los tipos de datos de las variables declaradas para los datos de la propiedad son: 
    ID del Usuario = ${typeof(userID_Owner)},
    Precio de la propiedad = ${typeof(priceProperty)},
    Latitud (GPS) = ${typeof(latGPS)},
    Longitud (GPS) = ${typeof(longGGPS)}, 
    Altitud (GPS) = ${typeof(altGPS)}`);