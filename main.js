/*1. Crea un script que pida al usuario un numero entero positivo N mayor a 0. Hay
que controlar que el número introducido sea correcto. Si no es así se volverá a
pedir.
A continuación debe realizar lo siguiente:
    a. Calcular los divisores del número N y mostrarlos. Un número y es divisor
    de otro x si el resultado de efectuar la operación de resto es igual a 0:
    x%y = 0 --> y es divisor de x
    
*/

//1A-------------------------------------------

// VARIABLES GLOBALES
var number;
var divs = [];
var suma = 0;


//valida que sea un valor numérico y que sea mayor de cero
function validaNum(n) {
    return !isNaN(n) && n > 0;
}

//devuelve true si n2 es divisor de n1
function esDiv(n1, n2) {
    if (n1 % n2 == 0) {
        return true;
    }
    else return false;
}
//devuelve un array con los divisores de n
function calculaDivs(n) {
    divs = [];
    for (i = 1; i <= n; i++) {
        if (esDiv(n, i)) {
            divs.push(i);
        }
    }
    return divs;
}
//devuelve un string construido con los divisores
function muestraDivs(array) {
    let divsString = "Los divisores son: ";
    array.forEach(it => {
        divsString += `${it}, `;
    });
    return divsString;
}
//función para el ejercicio 1a
function ejercicio1a() {
    number = prompt("Escribe un positivo mayor a 0:");
    let output = muestraDivs(calculaDivs(number));

    while (!validaNum(number)) {
        number = prompt("Error. Escribe un positivo mayor a 0:");
    }
    alert(output);
}

//1B
/*b. Calcular la suma de los cuadrados de los divisores obtenidos en el paso
    anterior y mostrarla.*/

//comprueba que se haya ejecutado el ejercicio 1a antes, ya que el array debe estar poblado
function validaArray() {
    if (!divs.length > 0) {
        alert("Ejecuta primero el Ejercicio 1 e introduce un valor correcto!");
        return false;
    }
    else {
        return true;
    }
}

//bloque para el ejercicio 1b
function ejercicio1b() {
    let resString = "Suma de cuadrados: ";
    suma = 0;
    if (validaArray()) {
        divs.forEach(it => {
            let potencia = it * it;
            suma += potencia;
            resString += `${potencia} + `
        });
        resString += `= ${suma}`;
        resString.replace("+ =", "=");
        alert(resString);
    }
}

/*
1C
c. Indicar si esa suma es un cuadrado o no con una frase por pantalla. Se
    dice que un número es un cuadrado si es el resultado de la multiplicación
    de un número por sí mismo.*/

    //valida si se ha ejecutado antes el 1b (que a su vez requiere el 1a)
function validaSuma() {
    if (suma == 0) {
        alert("Ejecuta los ejercicios en orden!");
        return false;
    }
    else {
        return true;
    }
}
//devuelve true si num es un cuadrado perfecto
function esCuadrado(num) {
    if (num < 0) {
        return false;
    }

    let aux = Math.sqrt(num);

    return Number.isInteger(aux);
}

//bloque para el ejercicio 1c
function ejercicio1c() {
    if (validaSuma()) {
        if (esCuadrado(suma)) {
            alert(`El número ${suma} es un cuadrado perfecto.`);
        }
        else alert(`El número ${suma} no es el cuadrado de nada.`);

    }
}

//-----------------------------------------------------
/*
2. Crear un programa JavaScript donde se introduzca un número de kilómetros que corre un Runner al día. Según los kilómetros recorridos a la semana se 
clasifica a los Runners en las siguientes categorías usando los siguientes intervalos. Suponemos que un Runner corre los 7 días de la semana 
los mismos kilómetros al día.

INTERVALO - CATEGORÍA
0 < KILOMETROS <= 10 → Corredor novato
10 < KILOMETROS <= 30 → Corredor iniciado
30 < KILOMETROS <= 40 → Corredor experto
KILOMETROS > 40 → Corredor nivel Élite
*/

//multiplica kms * 7 para calcular los kms a la semana, y devuelve 1, 2, 3 o 4 que luego se interpretará como novato, iniciado, experto o élite
function clasificaRunner(kms) {
    kms *= 7;
    if (kms > 0 && kms <= 10) {
        return 1; //novato
    }
    if (kms > 10 && kms <= 30) {
        return 2; //iniciado
    }
    if (kms > 30 && kms <= 40) {
        return 3; //experto
    }
    if (kms > 40) {
        return 4; //élite
    }
}

function ejercicio2() {
    let kms = prompt("¿Cuántos KMs ha corrido el runner?");//pide los kms diarios
    let output = "El nivel del runner es: ";//string para el alert final

    //reutiliza la función del ejercicio 1
    while (!validaNum(kms)) {
        kms = prompt("Error. Escribe un positivo mayor a 0:");
    }
    //se añade la palabra con la categoría del runner
    switch (clasificaRunner(kms)) {
        case 1:
            output += "novato.";
            break;

        case 2:
            output += "iniciado.";
            break;

        case 3:
            output += "experto.";
            break;

        case 4:
            output += "élite.";
            break;
    }
    //muestra el resultado
    alert(output);
}

//------------------------------------------
/*
3. El presupuesto de una obra se distribuye en los siguientes conceptos:
• 50% de materiales.
• 20% mano de obras.
• 30% en licencias de obra.
Crear un programa JavaScript que pida mediante un prompt el presupuesto total de la
obra y que muestre mediante document.write una lista ordenada del coste de cada
concepto. Si el usuario introduce un presupuesto negativo mostrar un mensaje de error
dentro de un h1.
*/
//como document.writeln() muestra una página nueva, este botón la actualiza para poder volver a la pág principal
function botonVolver() {
    let output = `<button onclick="location.reload()" style="
        margin-top: 10px;
        padding: 5px 10px;
        border: none;
        border-radius: 5px;
        background-color: black;
        color: white;
        cursor: pointer;
        height: 50px;
        width: auto;
    ">Volver</button>`;

    document.writeln(output);
}

//devuelve un porcentaje
function porcent(total, porcent) {
    return (total / 100) * porcent;
}

//devuelve un array con los valores finales que se dedicarán a cada ámbito en el presupuesto
function presupuestoFinal(pasta) {
    let porcentMateriales = 50;
    let porcentManoObra = 20;
    let porcentLicencias = 30;

    let presupuesto = []; //pos 0 = materiales, pos 1 = manoObra, pos 2 = licencias

    presupuesto[0] = porcent(pasta, porcentMateriales);
    presupuesto[1] = porcent(pasta, porcentManoObra);
    presupuesto[2] = porcent(pasta, porcentLicencias);

    return presupuesto;
}

//bloque para el ejercicio 3
function ejercicio3() {
    let presupuesto = prompt("Introduce el presupuesto total de la obra:");
    let output = "";

    if (!validaNum(presupuesto)) {
        //presupuesto = prompt("Error. Introduce un importe válido:");
        output = `
            <h1>ERROR</h1>   
            <br>
    `;
        document.writeln(output);
        botonVolver();
    } else {
        let presupuestoFinalClasificado = presupuestoFinal(presupuesto);

        output = `
            <ul id="ej3lista" style="border: 2px solid black; 
            border-radius: 10px; 
            font-family: Arial, Helvetica, sans-serif;
            background-color: rgb(219, 83, 83);  
            transition: all 0.1s ease-in-out; width:auto">
                <li>Materiales: ${presupuestoFinalClasificado[0]}</li>
                <li>Mano de obras: ${presupuestoFinalClasificado[1]}</li>
                <li>Licencia de obras: ${presupuestoFinalClasificado[2]}</li>
            </ul>   
            <br>
        `;

        document.writeln(output);
        botonVolver();
    }
}
//--------------------------------------------
/*
4. Define un array con los siguientes colores: red, yellow, green, white, blue, brown,
pink y black. A continuación, crea un generador aleatorio de banderas:
• Se pide el número de franjas que va a tener la bandera (entre 1 y 5). Se
debe comprobar que el número introducido cumple las características pedidas.
• El programa obtiene de forma aleatoria 5 colores del array. Para obtener un
valor aleatorio se puede utilizar la función de Math random, junto con la función floor. Se utilizan 
de la siguiente manera:
    nombreArray[Math.floor(Math.random() * nombreArray.length)]
• Usando document.write, crea una tabla de una fila y tantas columnas como colores tenga la bandera 
generada. Usa el atributo style para rellenar el fondo de cada celda del color adecuado.*/

//Array de colores - GLOBAL Constante
var COLORES = ["red", "yellow", "green", "white", "blue", "brown", "pink", "black"];

//a. En el paso 2 se pueden repetir colores en la bandera.-------------------

//valida que el número de franjas introducido es un valor numérico y además está entre 1 y 5 (ambos incluidos)
function validaNumFranjas(n) {
    return !isNaN(n) && (n > 0 && n <= 5);
}

//devuelve un color cualquera del array COLORES
function returnColores() {
    let elegidos = [];

    for (i = 0; i < 5; i++) {
        elegidos.push(COLORES[Math.floor(Math.random() * COLORES.length)]);
    }
    return elegidos;
}
//bloque para el ejercicio 4
function ejercicio4a() {
    let franjas = prompt("Introduce el número de franjas de tu bandera:");//recoge el número de franjas deseadas

    let output = "error franjas";//en caso de algo vaya mal



    if (!validaNumFranjas(franjas)) {
        franjas = prompt("Error. De 1 a 5 franjas:");
        document.writeln(output);
    } else {//la chicha

        output = `<table style=" width:100%; height:500px"; margin:0; border: 2px solid black;><tr>`;//empieza a construir la tabla

        for (let i = 0; i < franjas; i++) {//cada iteración es una franja con un color (repetido o no)
            let coloresElegidos = returnColores();

            output += `<td style="background-color: ${coloresElegidos[i]}; border: none; width:${100 / franjas}%; height:auto; margin:0;"></td>`;
        }
        //cierra las etiquetas
        output += `</tr></table>
        <br> 
        `;
        document.writeln(output);//escribe en el doc
        botonVolver();
    }
}
//-----------------------------

//b. En el paso 2 NO se pueden repetir colores en la bandera.

//devuelve un array con n(franjas) colores no repetidos
function returnColoresNoRepeat(franjas) {

    let elegidos = [];//se almacenan los colores
    let elegido = "";//el color en cada iter

    let copiaColores = [...COLORES].sort(() => Math.random() - 0.5);//aprovechando que no hay repetidos en el array, es más sencillo ...
    //...desordenar el array original y devolver los n(franjas) primeros colores.

    for (i = 0; i < franjas; i++) {
        elegidos[i] = copiaColores[i];//se van almacenando
    }

    return elegidos;
}

//bloque para el 4b
function ejercicio4b() {
    let franjas = prompt("Introduce el número de franjas de tu bandera:");//recoge el número de franjas

    let output = "error franjas";//por si acaso



    if (!validaNumFranjas(franjas)) {
        franjas = prompt("Error. De 1 a 5 franjas:");
        document.writeln(output);
    } else {//lo que se mostrará si los valores son correctos

        output = `<table style=" width:100%; height:500px; margin:0; border: 2px solid black;"><tr>`;//construye la tabla
        let coloresElegidos = returnColoresNoRepeat(franjas);//los colores

        for (let i = 0; i < franjas; i++) {//las franjas
            output += `<td style="background-color: ${coloresElegidos[i]}; border: none; width:${100 / franjas}%; height:auto; margin:0;"></td>`;
        }
        output += `</tr></table>
        <br> 
        `;
        document.writeln(output);//escribe en el doc
        botonVolver();
    }
}

//------------------------------------
/*
c. En el paso 2 se pueden repetir colores mientras no sean consecutivos (es
    decir, no puede haber dos franjas juntas con el mismo color).
*/

//devuelve un array con colores no consecutivos
function returnColoresNoConsecutivos(franjas) {
    let elegidos = [];

    for (let i = 0; i < franjas; i++) {
        let color;
        do {
            color = COLORES[Math.floor(Math.random() * COLORES.length)];//guarda un color cualquiera
        } while (i >= 1 && color === elegidos[i - 1]); //mientras la pos sea 1 o más y comprueba que el color no sea el mosmo que en la pos anterior
        elegidos.push(color);//guarda en el array
    }

    return elegidos;//devuelve
}

//bloque para el ej 4c
function ejercicio4c() {
    let franjas = prompt("Introduce el número de franjas de tu bandera:");//recoge valores

    let output = "error franjas";//en caso de error



    if (!validaNumFranjas(franjas)) {
        franjas = prompt("Error. De 1 a 5 franjas:");
        document.writeln(output);
    } else {

        output = `<table style=" width:100%; height:500px; margin:0; border: 2px solid black;"><tr>`;//construye tabla
        let coloresElegidos = returnColoresNoConsecutivos(franjas);//aquí están ya los colores de la bandera

        //dibuja la bandera deseada
        for (let i = 0; i < franjas; i++) {
            output += `<td style="background-color: ${coloresElegidos[i]}; border: none; width:${100 / franjas}%; height:auto; margin:0;"></td>`;
        }
        output += `</tr></table>
        <br> 
        `;
        document.writeln(output);//la muestra
        botonVolver();
    }
}

//---------------------------------------------------

/*5. Usando el array de colores del ejercicio anterior, crea un script que solicite 8 palabras
al usuario y las almacene en otro array. Ordena ese array (el del usuario) de forma
que, si aparecen colores del array de colores, estos queden al principio del array y el
resto de palabras al final. Muéstralo por consola.

Ejemplo:
Array de palabras del usuario:
    casa blue green orden brown bombilla bici pink
Array resultante:
    blue green brown pink casa orden bombilla bici
*/

var palabrasUsuario = [];//aquí se van guardando las palabras del user

//comprueba si la palabra introducida por el ususario están en COLORES[]
function palabraEnColores(palabra) {
    return COLORES.includes(palabra);
}

function inputPalabras() {
    let numPalabras = 8;//el total de palabras que se van a pedir
    let cont = 1;//aux para display

    while (numPalabras > 0) {
        let palabra = "";
        while (palabra.length == 0) {
            palabra = prompt(`Palabra ${cont}/8:`);
        }
        if (!palabraEnColores(palabra)) {
            palabrasUsuario.push(palabra);
        }
        else {
            palabrasUsuario.unshift(palabra);
        }

        cont++;
        numPalabras--;
    }
}
//ej05 bloque
function ejercicio5() {
    inputPalabras();
    console.log("EJERCICIO 5");
    console.log("Array resultante: " + palabrasUsuario);
}
//-----------------------------------------------------
/*
6.
Escriba un script que, dados dos arrays cualesquiera, devuelva un nuevo array
con los elementos que solo aparecen una vez en total (ya sea en el primer o en el
segundo array). El orden debe ser: primero los que están en el primer array y luego
los que están en el segundo.
Ejemplos:  
    a. [1, 2, 3, 3] y [3, 2, 1, 4, 5]) ==> [4, 5]  
    b. ["Ray", "Jose", "Dani"] y ["Dani", "Jose", "Ivan"]) ==> ["Ray","Ivan"]
    c. [77, "ciao"] y [78, 42, "ciao"]) ==> [77, 78, 42]
    d. [1, 2, 3, 3] y [3, 2, 1, 4, 5, 4]) ==> [4,5] //está mal el enunciado, 4 se repite
*/

//devuelve un array con los elementos únicos que hay en ambos arrays que recibe
function deleteRepetidos(arr1, arr2) {
    let arr12 = arr1.concat(arr2);//arary con los elementos del 1 y el 2
    //filtra en el array12 los valores cuyo índice en su primera aparición sea igual...
    // que el índice en su última aparición, asegurándose así de que es único.
    let unicos = arr12.filter(it => arr12.indexOf(it) === arr12.lastIndexOf(it));

    return unicos;
}
//bloques para cada punto, con los arrays de los ejemplos
function ejercicio6a() {
    let arr1 = [1, 2, 3, 3];
    let arr2 = [3, 2, 1, 4, 5];
    let res = deleteRepetidos(arr1, arr2);
    console.log("Array sin repes:", res);
}
function ejercicio6b() {
    let arr1 = ["Ray", "Jose", "Dani"];
    let arr2 = ["Dani", "Jose", "Ivan"];
    let res = deleteRepetidos(arr1, arr2);
    console.log("Array sin repes:", res);
}
function ejercicio6c() {
    let arr1 = [77, "ciao"];
    let arr2 = [78, 42, "ciao"];
    let res = deleteRepetidos(arr1, arr2);
    console.log("Array sin repes:", res);
}
function ejercicio6d() {
    let arr1 = [1, 2, 3, 3];
    let arr2 = [3, 2, 1, 4, 5, 4];
    let res = deleteRepetidos(arr1, arr2);
    console.log("Array sin repes:", res);
}

//----------------------------------------------------
/*
7.
Realiza un script que pida 10 números por teclado y que los almacene en un
array. A continuación, muestra el contenido de ese array junto al índice de cada
número (mira el dibujo).
Seguidamente el script pedirá dos posiciones a las que llamaremos inicial y final.
Debes comprobar que inicial es menor que final y que ambos números están entre 0 y 9. Si no es así, vuelve a pedirlos.
A continuación, coloca el número de la posición inicial en la posición final, desplazando el resto de números en el array para que no se pierda ninguno.
Al final se debe mostrar el array resultante.
*/

//Global
var ArrayNums = [];

//recoge los valores y los devuelve en un array
function inputNums() {
    let numsTotales = 10;
    let cont = 1;

    while (numsTotales > 0) {
        let n;
        while (!validaNum(n)) {
            n = prompt(`Número ${cont}/10:`);
        }
        ArrayNums.push(n);

        cont++;
        numsTotales--;
    }
    return ArrayNums;
}


function muestraArrays(arr, tag = "") {
    let output = `<h1>${tag}</h1><table style="width:100%; border-collapse: collapse; border: 2px solid black;">`;

    //fila de índices
    output += `<tr>`;
    output += `<td style="border: 2px solid black; text-align:center; padding:5px; font-weight:bold;">Índice</td>`;
    for (let i = 0; i < arr.length; i++) {
        output += `<td style="border: 2px solid black; text-align:center; padding:5px; font-weight:bold;">${i}</td>`;
    }
    output += `</tr>`;

    //fila de valores
    output += `<tr>`;
    output += `<td style="border: 2px solid black; text-align:center; padding:5px; font-weight:bold;">Valor</td>`;
    for (let i = 0; i < arr.length; i++) {
        output += `<td style="border: 2px solid black; text-align:center; padding:5px;">${arr[i]}</td>`;
    }
    output += `</tr>`;

    output += `</table><br>`;

    document.writeln(output);
}
//comprueba que los valores introducidos sean: el 1º menor que el 2º, y que ambos estén entre 0 y 9, incluídos.
function compruebaMenorInicial(ini, fin) {
    return ((ini < fin) && ((ini >= 0 && ini <= 9) && (fin >= 0 && fin <= 9)));
}
//recoge los valores y los transforma a int. Los devuelve en un array
function pidePos() {
    let res = [];
    res[0] = 0;
    res[1] = 0;
    while (!compruebaMenorInicial(res[0], res[1])) {
        res[0] = parseInt(prompt("Posición inicial:"));
        res[1] = parseInt(prompt("Posición final:"));
    }
    return res;
}
//la chicha
function reordenaArr(nums, iniFin) {//iniFin es un array con las posiciones elegidas por el usuario-> [0]=ini, [1]=fin

    //troceo el array nums[] en varias partes omitiendo el valor del primer índice
    let ini = nums[iniFin[0]];//primer valor de acuerdo al primer index que metió el user
    let part1 = nums.slice(0, iniFin[0]);//valores desde nums[0] hasta el primer index que metió el user, NO incluído
    let part2 = nums.slice(iniFin[0] + 1, iniFin[1]);//valores desde el siguiente al primer index que metió el user al último index
    let part3 = nums.slice(iniFin[1], nums.length);//valores desde el útimo index al final del array

    //básicamente aquí se guardan los trozos concatenados en el orden deseado
    let nums2 = [];
    nums2 = part1.concat(part2).concat(ini).concat(part3);

    let ultimo = nums2.pop();//borra el último
    nums2.unshift(ultimo);//lo pone al principio

    return nums2;
}
//bloque para el ej7
function ejercicio7() {
    let nums = inputNums();
    //array comentado con valores predefinidos (el ejemplo del enunciado) para facilitar 
    //let nums = [20, 5, 7, 4, 32, 9, 2, 14, 11, 6];
    let iniFin = pidePos();
    muestraArrays(nums, "Array Inicial");
    console.log(nums);
    console.log("Posiciones introducidas (ini/fin): ", iniFin);
    nums = reordenaArr(nums, iniFin);
    muestraArrays(nums, "Array Final");
    botonVolver();
}
//------------------------------------------------------------------
/*
8. 
Un restaurante nos ha encargado una aplicación para colocar a los clientes en sus mesas.
En una mesa se pueden sentar de 0 (mesa vacía) a 4 comensales (mesa llena).
El funcionamiento es el siguiente:
Cuando llega un cliente se le pregunta cuántos son. Como el programa no está preparado
para colocar a grupos mayores a 4, si un cliente solicita una mesa con más comensales (por
ejemplo, 6), el programa dará el mensaje “Lo siento, no admitimos grupos de 6, haga grupos
de 4 personas como máximo e intente de nuevo” y volverá a preguntar.
Para cada grupo nuevo que llega, se busca siempre la primera mesa libre (con 0 personas).
Si no quedan mesas libres, se busca una donde haya hueco para todo el grupo (por ejemplo,
si el grupo es de dos personas, se podrá colocar en mesas donde haya una o dos personas).
Cada vez que se sientan nuevos clientes se debe mostrar el estado de las mesas. Los grupos
no se pueden romper, aunque haya huecos sueltos suficientes.
A tener en cuenta:
    -El programa comienza pidiendo el número de mesas que tiene el restaurante.
    -Inicialmente, las mesas se cargan con valores aleatorios entre 0 y 4 y mostrará por pantalla como quedan las mesas inicialmente.
    -El programa seguirá pidiendo comensales hasta que se introduzca un valor negativo.
*/
//global
var comedor = [];//se guardarán los objetos Mesa
var numCli = 0;
let plazasLibresTotales = 0;

//clase Mesa con atributos de plazasLibres y su número identificador
class Mesa {
    constructor(num, plazasLibres) {
        this.num = num;
        this.plazasLibres = plazasLibres;
    }
}
//función que reutilizo para validar el input de número de clientes y el número de mesas
function validaNumCosas(n, opc) {
    switch (opc) {
        case 1://pide número de clientes
            return !isNaN(n) && (n <= 4);
        case 2://pide número de mesas
            return !isNaN(n) && (n > 0);
        default:
            break;
    }

}
//función que reutilizo para el input de número de clientes y el número de mesas
function pideNumCosas(opc) {//opc == 1 para pedir clientes, opc == 2 para pedir número de mesas
    switch (opc) {
        case 1://clientes
            let numCli = parseInt(prompt("Grupo de clientes: "));
            while (!validaNumCosas(numCli, 1) || numCli < 0) {
                if (numCli < 0) {
                    alert("Ya no hay más clientes.");
                    return -1;
                }
                alert(`Lo siento, no admitimos grupos de ${numCli}, haga grupos de 4 personas como máximo e intente de nuevo`);
                numCli = parseInt(prompt("Grupo de clientes: "));
            }
            return numCli;

        case 2://mesas
            let numMesas = parseInt(prompt("Número de mesas del restaurante: "));
            while (!validaNumCosas(numMesas, 2)) {
                alert("Sólo valores númericos positivos, por favor.");
                numMesas = parseInt(prompt("Número de mesas: "));
            }
            return numMesas;
    }

}

//random entre 0 y max para las sillas ocupadas de cada mesa
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
//la utilizo en cada input para devolver el número de plazas TOTALES que quedan en el restaurante
function cuentaPlazasVacias(comedor) {//recibe el array comedor
    let totalVacias = 0;
    comedor.forEach(it => {
        totalVacias += it.plazasLibres;
    });
    return totalVacias;
}
//lo que se mostrará en la consola cada vez que un grupo de clientes llegue
function muestraEstado(comedor, plazasLibresTotales, numCli, numMesas) {
    console.log("----------------------------------");
    console.log(`Plazas libres totales: ${plazasLibresTotales}`);
    console.log(`Clientes sin mesa: ${numCli}`);
    console.log(`Número total de mesas: ${numMesas}`);
    console.log("----- Estado de las mesas -----");

    comedor.forEach(mesa => {
        console.log(`Mesa ${mesa.num}: ${mesa.plazasLibres} plazas libres`);//muestra el estado de cada mesa
    });

    console.log("----------------------------------");
}
//cada vez que un grupo de clientes llegue, esto les busca mesa con sillas libres suficientes en el array comedor[]
function buscaMesa(grupoClientes, comedor) {
    console.log(`Grupo de ${grupoClientes} clientes...`);

    for (let i = 0; i < comedor.length; i++) {//recorre comedor[]
        let mesa = comedor[i];
        if (mesa.plazasLibres >= grupoClientes) {//comprueba si el grupo cabe en alguna mesa
            console.log(
                `Grupo sentado en la mesa ${mesa.num}. (Antes: ${mesa.plazasLibres} sillas libreas, después: ${mesa.plazasLibres - grupoClientes})`//display actualizado
            );
            mesa.plazasLibres -= grupoClientes;//actualiza el objeto mesa con las sillas libres acuales
            numCli -= grupoClientes;//actualiza el número de clientes sin mesa
            return true;//se ha ubicado el grupo en una mesa
        }
    }

    console.log("No hay mesas con espacio suficiente para este grupo.");//no se ha encontrado mesa para un grupo tan grande y esperan (para siempre XD)
    return false;
}
//bloque para el ej08
function ejercicio8() {
    let numMesas = pideNumCosas(2); // pedir mesas, opc 2

    //puebla el comedor con el num de mesas deseado, ya con sus sillas llenas y vacías
    for (let i = 0; i < numMesas; i++) {
        let mesa = new Mesa(i + 1, getRandomInt(5));
        comedor.push(mesa);
    }

    //cuántas sillas libres hay
    plazasLibresTotales = cuentaPlazasVacias(comedor);

    //mientras hayan sillas vacías, segirá pidiendo grupos de clientes
    while (plazasLibresTotales > 0) {
        let inputActual = pideNumCosas(1); // pedir grupo opc 1
        if (inputActual < 0) break;//puedes parar el input con un número negativo aunque queden sillas vacías

        if (plazasLibresTotales == 0) {//stop
            alert("El restaurante está lleno.");
            break;
        } else {
            numCli += inputActual;//acumula clientes totales sin ubicar
            console.clear();//limpia la consola en cada input

            //muestraEstado(comedor, plazasLibresTotales, numCli, numMesas);

            buscaMesa(inputActual, comedor);//ubica (si caben) los grupos de clientes

            plazasLibresTotales = cuentaPlazasVacias(comedor);//reclacula libres

            muestraEstado(comedor, plazasLibresTotales, numCli, numMesas);//display
        }
    }
}
//---------------------------------------------------------------------------
//EL JUEGO DE LA VIDA

//global
var tablero = [];

function crearMatriz(n) {
    return Array.from({ length: n }, () => Array(n).fill(0));
}
//ejemplo creación
//tablero = crearMatriz(3, 5);

//---------------------------------------------------------------------------
//1

//1A
function validaSizeRejilla(n) {
    return Number.isInteger(n) && n >= 3 && n <= 30;
}

function pideSizeRejilla() {
    let size;
    while (true) {
        const entrada = prompt("Tamaño de la rejilla: ");
        size = parseInt(entrada, 10);
        if (validaSizeRejilla(size)) return size;
        alert("Tamaño inválido. Introduce un entero entre 3 y 30.");
    }
}

//1B
function validaProb(n){
    return Number.isInteger(n) && n >=0  && n <= 100;
}
function pideProb(){
    let entrada = prompt("Probabilidad de vida inicial (30 por defecto):");
    if (entrada === null || entrada.trim() === "") return 30;
    const val = Number(entrada);
    if (validaProb(val)) return val;
    alert("Error. Se usará el valor por defecto 30%.");
    return 30;
}

//1C
function validaGens(n){
    return !isNaN(n) && (n > 0); //mayor a 1
}
function pideGens(){
    let gens = parseInt(prompt("Número de generaciones: "));
    while (!validaProb(gens)) {
        alert("Error. Valor por defecto: 1");
        gens = 1;
    }
    return gens;
}
//----------------------------------------------------------
//2
function viveOmuereInit(prob) {
    return Math.random() * 100 < prob ? 1 : 0;
}

//----------------------------------------------------------
//3

//aplica las reglas a cada célula que recibe
function reglasVecinos(celula, posX, posY, tablero) {
    let vecinosVivos = 0;
    let n = tablero.length;

    //arriba
    if (posX > 0 && tablero[posX-1][posY] === 1) vecinosVivos++;
    //abajo
    if (posX < n - 1 && tablero[posX+1][posY] === 1) vecinosVivos++;
    //izq
    if (posY > 0 && tablero[posX][posY-1] === 1) vecinosVivos++;
    //derecha
    if (posY < n - 1 && tablero[posX][posY+1] === 1) vecinosVivos++;

    //diagonal
    if (posX > 0 && posY > 0 && tablero[posX-1][posY-1] === 1) vecinosVivos++;
    if (posX > 0 && posY < n - 1 && tablero[posX-1][posY+1] === 1) vecinosVivos++;
    if (posX < n - 1 && posY > 0 && tablero[posX+1][posY-1] === 1) vecinosVivos++;
    if (posX < n - 1 && posY < n - 1 && tablero[posX+1][posY+1] === 1) vecinosVivos++;

    if (celula === 1) {
        if (vecinosVivos < 2) return 0;
        if (vecinosVivos === 2 || vecinosVivos === 3) return 1;
        if (vecinosVivos > 3) return 0;
    } else {
        if (vecinosVivos === 3) return 1;
    }

    return 0;
}
//--------------------------------------------------
//4
function siguienteGeneracion(tablero) {
    let n = tablero.length;
    let nueva = crearMatriz(n);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            nueva[i][j] = reglasVecinos(tablero[i][j], i, j, tablero);
        }
    }
    return nueva;
}

//compara dos matrices
function iguales(a, b) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (a[i][j] !== b[i][j]) return false;//en cuanto encuentra una diferencia devuelve false
        }
    }
    return true;
}
//recorre el tablero y cuenta los unos
function contarVivos(tablero) {
    let vivos = 0;
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            if (tablero[i][j] === 1) vivos++;
        }
    }
    return vivos;
}

//muestra un tablero
function imprimieTablero(tablero, tag) {
    console.log(tag);
    for (let row of tablero) {
        console.log("   ", row.join(" "));
    }
}
//bloque del ejercicio
function ejercicio9() {
    let size = pideSizeRejilla();
    let prob = pideProb();
    let gens = pideGens();

    // generar rejilla inicial
    tablero = crearMatriz(size);
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            tablero[i][j] = viveOmuereInit(prob);
        }
    }

    // muestra la rejilla en gen 0
    imprimieTablero(tablero, "Generación 0");

    // siguiente gen
    let anterior = tablero.map(fila => [...fila]);
    let estabilizado = false;

    for (let gen = 1; gen <= gens; gen++) {
        let siguiente = siguienteGeneracion(anterior);
        imprimieTablero(siguiente, `Generación ${gen}:`);

        if (iguales(siguiente, anterior)) {
            console.log(`Estabilización en la generación ${gen}.`);
            estabilizado = true;
            break;
        }
        anterior = siguiente.map(fila => [...fila]); // mantener copias independientes
    }

    //resumen
    console.log(`Células vivas en la última generación: ${contarVivos(anterior)}`);
    if (!estabilizado) {
        console.log("Sin estabilización.");
    }
}
