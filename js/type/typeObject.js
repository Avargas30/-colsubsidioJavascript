//Object
//Dos formas de escribir objetos
// Objeto es una colección de propiedades
//Primera Forma
var persona = new Object();
persona.nombre = 'Gustavo';
persona.apellido = 'Garcia';
persona.edad = 32;

//segunda Forma
var personaDos = {
    nombre: 'Gustavo',
    apellido: 'Garcia',
    edad: 32
};

//Hay dos formas de pedir una valor de una propiedad
//Primera forma
//objeto['propiedad']
//console.log(persona['nombre']);
//console.log(personaDos['nombre']);

//Segunda Forma
//objeto.propiedad
//console.log(persona.edad);
//console.log(personaDos.edad);

//Cuando invoco propiedades inexistentes
//console.log(persona['celular']);
//console.log(persona.email);

//Quiero agregar propiedades una vez ya se creo el objeto
//Si yo creo el objeto con la segunda forma, una forma de
//agregar propiedades es con la sintaxis objeto['nuevaPropiedad']
personaDos['celular'] = 3016710956;

//Si yo creo el objeto con la primera forma, una forma de
//agregar propiedades es con la sintaxis objeto['nuevaPropiedad']
//o la sintaxis objeto.nuevaPropiedad
persona['email'] = 'gustavogblanco@live.com';
persona.celular = 3016710956;

//console.log(persona['celular']);
//console.log(persona.email, persona.celular);

//Un objeto puede tener cualquier tipo de dato
var informacion = {
    perfil: {
        name: "Gustavo",
        apellido: "Garcia",
        edad: 32
    },
    estudio: {
        primaria: {
            colegio: "Liceo Colombia"
        },
        secundaria: {
            colegio: "Liceo Santa Barbara"
        }
    }
};

//console.log(informacion.estudio.primaria.colegio);
//console.log(informacion['estudio']['secundaria']['colegio']);

//Eliminar propiedad de un objeto
//Sintaxis -> delete objeto.propiedad
//console.log(informacion.perfil.edad);
//delete informacion.perfil['edad'];
//console.log(informacion['perfil']['edad']);

//Comparar Objetos
//Dos objetos nunca son inguales, incluso si tienen las mismas
//propiedad.
var vehiculo = {
    modelo: 2014
};

var vehiculoDos = {
    modelo: 2014
};

//console.log(vehiculo == vehiculoDos);
//console.log(vehiculo === vehiculoDos);

//La unica manera de comparar objetos es que tengan la misma referencia
var camion = {
    marca: 'BMW'
};

var camionDos = camion;

//console.log(camion == camionDos);
//console.log(camion === camionDos);

//Utilizar los console.log 
//console.log(variable+ variable2);
//console.log(variable, variable2);
/*console.log("objeto: "+ persona);
console.log("objeto: ", persona);

console.log("numero: "+ 8);
console.log("numero: ", 8);

console.log("vector: "+ [1,2,3,4,5]);
console.log("vector: ", [1,2,3,4,5]);*/

//Como iteramos sobre objetos
//Sintaxis -> for(const <propiedadTemporal> in <objeto>) {code}
for(const propiedad in informacion) {
    //console.log(`${propiedad} su valor es ${informacion[propiedad]}`);
}

//Como obtengo las propiedades de un Objeto
//Sintaxis -> Object.keys(<objeto>)
//Retorna un array con todas las propiedades.
//console.log(Object.keys(informacion));

function funcionRecursiva(objeto){
    const arreglo = Object.keys(objeto);
    for(let posicionTemporal in arreglo) {
        console.log(arreglo[posicionTemporal]);
        if(typeof objeto[arreglo[posicionTemporal]] === 'object') {
            funcionRecursiva(objeto[arreglo[posicionTemporal]]);
        }
    }
}

funcionRecursiva(informacion);
console.log("ejercicio terminado");