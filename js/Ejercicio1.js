//Comentario de una sola línea

/*Comentarios
    ...
    multilínea
*/

// Personalizacion de salida a consola

const bg = "linear-gradient(45deg, rgba(52,152,219,1) 0%, rgba(26, 188, 156, 1) 50%)";

const style_console = `background: ${bg}; color: white; border-radius: 6px; padding:4px; font-size:1.0rem; font-weight:bold;`;

//EJERCICIO 01: Declaracion de variables en JavaScrip
//1. Utilizando la palabra reservada var

//Utilizaremos el método WARN para estilizar las respuestas de las pruebas realizadas a nuestro codigo y facilitar su revision

console.warn("-- Declaracion de variables utilizando el prefijo VAR--")

var miNombre = "JuanPa";
console.log("El valor almecenado en la variable miNombre es: ", miNombre);

//Modificar el valor de la variable
miNombre = "Juan Pablo";
console.log("El nuevo valor de la variable miNombre es: ", miNombre);

var misApellidos;
console.log("El valor almecenado en la variable misApellidos es: ", misApellidos);//Undefined
//Una variable puede cambiar su valor durante la ejecucion del programa

console.warn("--Declaracion de una Constante utilizando el prefijo Const--")
//2. Utilizando la palabra reservada CONST
//Una constante a diferencia de una variable es que su valor no cambiara durante toda la ejecucion del programa,
// y al momento de ser declarada esta debera estar inicializada obligatoriamente

const miMatricula = "240148";
console.log("El valor de la constante miMatricula es: ", miMatricula);

//Intentando modificar el valor de la constante

/*miMatricula = "25XXXX";
console.log("El valor de la constante miMatricula es: ", miMatricula);*/


//3. Utilizando la palabra reservada LET
/*LET es el prefijo utilizado muy similar a VAR con la diferencia en su alcance (SCOPE),
    aquellas declaradas con VAR tienen un alcance global en el codigo no importando bloques o secciones,
    mientras que las variables declaradas con let existiran dentro del bloque o función.
*/

var fechaNacimiento = new Date("2006-07-30");
var miEdad = calcularEdad(fechaNacimiento);
console.log("Tu edad es de: ",miEdad, "años.");

//Verificamos si es mayor de edad
if(miEdad >=18)
{
    var esMayorDeEdad = true
    let esMenorDeEdad = false;
}

if(esMayorDeEdad)
    console.log("Erees mayor de Edad.");
else
    console.log("Eres menor de miEdad.");

/*console.log("El valor de esMenorDeEdad es :", esMenorDeEdad);*/
function calcularEdad(fechaNacimiento)
{
    //Para calcular la edad requerimientos de la fecha del día de hoy
    var fechaHoy = new Date();

    /*Dado que los datos de fecha son almacenados en milisegundos por default en JS, nesecitamos una variable
        que nos permita saber el numero de milisegundos por dia
    */
    let milisegundosPorDia = 24*60*60*1000;
    
    //ya que tenemos los milisegundos por dia tenemos que restar a la fecha de hoy, la fecha en que nacimos para calcular los milisegundos que hemos vivido
    let diasVividos = (fechaHoy - fechaNacimiento)/milisegundosPorDia;

    //invocamos el metodo matematico de 
    diasVividos = Math.floor(diasVividos)
    var edad = diasVividos/365.25
    edad = Math.floor(edad);

    return edad;
}

//Interpolacion de datos

// ${} `
misApellidos="Reyes Cruz"
console.log(`Hola, ${miNombre} ${misApellidos} actualmente tienes ${miEdad} años.`);


//Autor: Juan Pablo Reyes Cruz