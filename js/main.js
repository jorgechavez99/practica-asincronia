//capturar los elementos del dom
const introMatricula = document.querySelector("#introMatricula");
const comprobar = document.querySelector("#comprobar");
const tablaResultado = document.querySelector("#tablaResultado");
const formulario = document.querySelector("#formulario")
const parrafo = document.querySelector("#parrafo")
//genero los "Arrays" que en este caso viene a ser la base de datos.

const arrayCoches = [
    {
        matricula: "123-b",
        modelo: "Nissan",
        propiedad: "Jose",

    },
    {
        matricula: "234-c",
        modelo: "Suzuki",
        propiedad: "Carmen",

    },
    {
        matricula: "456-d",
        modelo: "Toyota",
        propiedad: "Juan",

    },
    {
        matricula: "567-f",
        modelo: "Suzuki",
        propiedad: "Camila",

    },
];

const arrayMultas = [
    {
        multa: ["velocidad"],
        matricula: "567-f"
    },
    {
        multa: ["estacionamiento", "velocidad"],
        matricula: "456-d"
    },
    {
        multa: ["estacionamiento"],
        matricula: "123-b"
    }
];



//Genero las funciones y eventos

formulario.addEventListener('submit', (ev) => {
ev.preventDefault()
    const input=introMatricula.value
    comprobarMatricula(input)

})

const comprobarMatricula = (input) => {
// aca hare la validacion con RegeX y me mostrara si es todo correcto


const reciboMatricula = input

    buscarMatricula(reciboMatricula)
    .then((resp) => {
     console.log(`la matricula ${resp} si esta en sistema `)
     })
     .catch((error) => console.log(error))

    
}

const buscarMatricula = (reciboMatricula) => {

    const verMatricula = arrayCoches.find((item) => item.matricula == reciboMatricula)?.matricula
    return new Promise((resolve, reject) => {
        if (verMatricula) {
            resolve(verMatricula)

        }
        else {
            reject(`La matricula ${reciboMatricula} no esta en sistema`)

        }

    })

}

const buscarMultas = (reciboMatricula) => {


}



const pintarParrafo = () => {



}



const validarMultas = () => {



}




const pintarTabla = () => { }

comprobarMatricula()










