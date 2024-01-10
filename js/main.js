//capturar los elementos del dom
const introMatricula = document.querySelector("#introMatricula");
const comprobar = document.querySelector("#comprobar");// este no lo quiero para nada
const tablaResultado = document.querySelector("#tablaResultado");
const formulario = document.querySelector("#formulario")
const parrafo = document.querySelector("#parrafo")



//genero los "Arrays" que en este caso viene a ser la base de datos.

const arrayCoches = [
    {
        matricula: "123-b",
        modelo: "Nissan",
        propietario: "Jose",

    },
    {
        matricula: "234-c",
        modelo: "Suzuki",
        propietario: "Carmen",

    },
    {
        matricula: "456-d",
        modelo: "Toyota",
        propietario: "Juan",

    },
    {
        matricula: "567-f",
        modelo: "Suzuki",
        propietario: "Camila",

    },
    {
        matricula: "777-a",
        modelo: "Honda",
        propietario: "Mary",

    },
    {
        matricula: "888-b",
        modelo: "Mercedez Benz",
        propietario: "Carlos",

    },
     {
        matricula: "111-a",
        modelo: "Toyota",
        propietario: "Pablo",

    },
];

const arrayMultas = [
    {
        multa: ["velocidad"],
        matricula: "567-f",
    },
    {
        multa: ["estacionamiento", "velocidad"],
        matricula: "456-d",
    },
    {
        multa: ["estacionamiento"],
        matricula: "123-b",
    },
    {
        multa: ["Atropello","estacionamiento"],
        matricula: "888-b",
    },
];


let matricula;
let multa;

//Genero las funciones y eventos

formulario.addEventListener('submit', (ev) => {
    ev.preventDefault()
    const input = introMatricula.value
    comprobarMatricula(input)
    pintarParrafo()
    limpiarTabla()
})


//En esta funcion trabajamos con promesas en la cual interactuamos entre 2 bases de datos arrayMultas y arrayCoches
const buscarMatricula = (reciboMatricula) => {

    const verMatricula = arrayCoches.find((item) => item.matricula == reciboMatricula)
    console.log(verMatricula)
    return new Promise((resolve, reject) => {
        if (verMatricula) {
            resolve(verMatricula);
        }
        else {
            reject(`el coche con matricula ${reciboMatricula} no existe`)
        }
    })
}

const buscarMultas = (reciboMatricula) => {
    //console.log("si entra",reciboMatricula)
    const verMulta = arrayMultas.find((item) => item.matricula == reciboMatricula)?.multa
    //console.log("dentro de multa", verMulta)
    return new Promise((resolve, reject) => {
        if (verMulta) { resolve(verMulta) }
        else { reject(`el coche con matricula ${reciboMatricula} no tiene multas`) }
    })

}


const comprobarMatricula = (input) => {
    // aca hare la validacion con RegExp

    const reciboMatricula = input//darle nombres concretos y no utilizar varios
    
    buscarMatricula(reciboMatricula)
        .then((respuesta) => {
            console.log("primer den",respuesta)
            matricula = respuesta// no almacenar en varios nombres
            return buscarMultas(reciboMatricula)
        }).then((respuesta) => {
            multa = respuesta
            pintarTabla(matricula,multa)
            console.log(`El coche con matricula ${matricula} tiene multas por ${multa}`)
        })
        .catch((error) => pintarParrafo(error))

}

// Esta funcion permite añadir un parrafo informado las diferentes situaciones que se presentan
const pintarParrafo = (error) => {
parrafo.innerHTML='';
    parrafo.textContent=error
}

// Esta funcion permite añadir los elementos extraidos dentro de una tabla
const pintarTabla = (coche,multa) => {

    

    const {matricula,modelo,propietario}=coche
 
    tablaResultado.innerHTML=`<td>${matricula}</td>
                                <td>${modelo}</td>
                             <td>${propietario}</td>
                             <td>${multa}</td>`
    
}

const limpiarTabla=()=>{
    tablaResultado.innerHTML=''
}












