//Estilizacion de la barra zona de pruebas en el DevTools en el navegador
console.log("%cEjercicio 03: Funciones ",style_console);

//Funciones  NOMBRADAS 
//1. Funciones procedurales, vacias, VOID, sin valor de retorno y sin parametros de entrada

function saludar()
{
    console.log("Bienvenid@ al Sistemas de Bienes Raíces");
}

console.warn("1. Funciones sin valor de retorno, sin parametros");
saludar();

//2. Funciones procedurales sin valor de retornom, pero si recibe parámetros es decir datos de entrada

function saludar_usuario(username, gender)
{
    if(gender=="H")
    console.log(`Bienvenido, ${username} al Sistema de Bienes`)

    else if(gender=="M")
    console.log(`Bienvenida, ${username} al Sistema de Bienes`)

    else
    console.log(`Bienvenid@, ${username} al Sistema de Bienes`)
}

console.warn("2. Funciones sin valor de retorno, con parametros de entrada");
saludar_usuario("Marco","H");
console.log("------------------------------------------------------");
saludar_usuario("Patricia","M");
console.log("------------------------------------------------------");
saludar_usuario("Guadalupe",null);

//3. Funciones que retornan un dato, pero que no reciben parámetros 
function fechaActual()
{
    const fecha = new Date();
    const dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

     const fecha_formatoMX = `${dias[fecha.getDay()]}, ${fecha.getDate()} de ${meses[fecha.getMonth()]} 
    de ${fecha.getFullYear()}`;
    return fecha_formatoMX;
}

console.warn("3. Funciones que retornan un valor, sin parametros de entrada");
let hoy = fechaActual();
console.log("Bienvenid@, al sitema de bienes raices, hoy es: " + hoy);

/* Imprimiendo el valor y que tipo de dato es*/
console.log(fechaActual);
console.log(typeof(fechaActual));

// 4. Funciones que retornan un valor y que reciben parametros de entrada

function login(username, password) {

    let userValidation = false;

    if (username === "admin" && password === "12345") {
        userValidation = true;
        console.log("Bienvenido usuario administrador");
    } else if (username === "admin" && password != "12345") {
        userValidation = false;
        console.log("Lo sentimos la contraseña es incorrecta");
    } else if (username != "admin" && password == "12345") {
        userValidation = false;
        console.log("Lo sentimos el nombre de usuario no existe");
    } else if (username != "admin" && password != "12345") {
        userValidation = false;
        console.log("Por favor verificar el nombre de usuario y contraseña");
    }
    return userValidation;
}

console.warn("4. Funciones que retornan un dato, pero tambien reciben parametros de entrada");

// Test 1 - Usuario y contraseña correctos
console.log("Test 1 - usuario: admin, password: 12345")
loginStatus = login("admin", "12345");
console.log(loginStatus ? `El usuario admin se ha logueado satisfactoriamente` : `Hubo un error en el login del usuario admin`);

// Test 2 - Usuario y contraseña correctos
console.log("Test 2 - usuario: administrador, password: 12345")
loginStatus = login("administrador", "12345");
console.log(loginStatus ? `El usuario admin se ha logueado satisfactoriamente` : `Hubo un error en el login del usuario admin`);

// Test 3 - Usuario y contraseña correctos
console.log("Test 3 - usuario: admin, password: 123456789")
loginStatus = login("admin", "123456789");
console.log(loginStatus ? `El usuario admin se ha logueado satisfactoriamente` : `Hubo un error en el login del usuario admin`);

// Test 4 - Usuario y contraseña correctos
console.log("Test 4 - usuario: Juan Pablo, password: mipassword")
loginStatus = login("Luis", "mipassword");
console.log(loginStatus ? `El usuario admin se ha logueado satisfactoriamente` : `Hubo un error en el login del usuario admin`);

// FUNCIONES ANÓNIMAS, FUNCIONES FLECHA (ARROW), FUNCIONES LAMDA
/*A diferencia de las funciones nombradas este tipo de funciones no suelen ser reutilizadas en el código
solo se ejecutan una sola vez, dando velocidad, individalidad y privacidad a los datos utilizados en el codigo en el proceso*/

// 5. Funcion anónima sin parámetros
isNewUser = function (){
    const hoy = new Date();
    
    return(
        lastLogin.getFullYear() === hoy.getFullYear() &&
        lastLogin.getMonth() === hoy.getMonth() &&
        lastLogin.getDate() === hoy.getDate()
    );
};

console.warn("5.Funciones Anónimas, sin parametros")

console.log("Test 1 - Fecha de ultimo acceso es igual a la fecha de hoy");
console.log(`La fecha del último acceso es: ${lastLogin}`);
console.log(`El usuario logeado es: ${isNewUser()? "Nuevo usuario":"Usuario Antiguo."}`);

console.log("------------------------------------------------")
lastLogin = new Date("2025/12/31");
console.log("Test 2 - Fecha de ultimo acceso es diferente a la fecha de hoy");
console.log(`La fecha del último acceso es: ${lastLogin}`);
console.log(`El usuario logeado es: ${isNewUser()? "Nuevo usuario":"Usuario Antiguo."}`);

// 6. Funciones anonimas con parametros (Version Arrow o lambda)

const sumar = (a, b) => {
    let resultado = a + b;
    return resultado;
}

console.warn("6. Funciones anonimas con parametros");
console.log(`El resultado de la suma (a + b) es: ${sumar(5, 10)}`);

/* Cuando la funcion anonima tiene solo una linea de operacion se puede usar una version simplificada que no usa ()
llaves, ni la palabra reservada (return) */

const multiplicar = (a, b) => a * b;

console.log(`El resultado de la suma de 15 * 125 es: ${multiplicar(15, 125)}`);
// 7. Funciones Callback (Regreso de llamada)

console.warn("7. Funciones Callback (Regreso de llamada)");
const recoveryPassword = function (email, callback) {

    // Generamos el código a enviar al usuario
    const recoveryCode = Math.floor(Math.random() * 90000) + 10000; 

    console.log(`--------------------------------------------------
        Correo del usuario solicitante: ${email}
        Generando código de recuperación...
        Código de recuperación generado: ${recoveryCode}
        Enviando el correo al usuario...
        Correo enviado a: ${email} con el código: ${recoveryCode}
    --------------------------------------------------`);

    // Definición de la respuesta del sistema
    const response = {
        status: "Ok",
        message: "Código de restauración enviado satisfactoriamente"
    };

    // INVOCACIÓN DEL CALLBACK: Se hace dentro de la función principal
    callback(response);
};

// Invocación de la función pasando el correo y la función anónima (callback)
recoveryPassword("240343@utxicotepec.edu.mx", function (res) {
    console.log("Respuesta recibida del sistema:", res.message);
    console.log("Estado:", res.status);
});

// Autor: Juan Pablo Reyes Cruz