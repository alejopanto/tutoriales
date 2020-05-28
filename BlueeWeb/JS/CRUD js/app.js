// Parametro globales

const formularioUI = document.querySelector('#formulario');
const listaDeActividadesUI = document.querySelector('#listaDeActividades');
var arrayActividades = [];


// funciones

const CrearItem = (actividad) => {

    let item = {
        actividad: actividad,
        estado: false
    };

    arrayActividades.push(item);

    return item
};

const GuardarDB = () => {
    localStorage.setItem('rutina', JSON.stringify(arrayActividades))

    PintarDB();
}

const PintarDB = () => {
    listaDeActividadesUI.innerHTML = '';

    arrayActividades = JSON.parse(localStorage.getItem('rutina'));
    
    if(arrayActividades === null){
        arrayActividades = []
    }else{
        arrayActividades.forEach(element => {

            if(element.estado){
                listaDeActividadesUI.innerHTML +=`<div class="alert alert-primary" role="alert"><i class="material-icons float-left mr-2">accessibility_new</i><b>${element.actividad}</b> - ${element.estado}<span class="float-right"><i class="material-icons">done</i><i class="material-icons">delete</i></span></div>`
            }else{
                listaDeActividadesUI.innerHTML +=`<div class="alert alert-warning" role="alert"><i class="material-icons float-left mr-2">accessibility_new</i><b>${element.actividad}</b> - ${element.estado}<span class="float-right"><i class="material-icons">done</i><i class="material-icons">delete</i></span></div>`
            }
        });
    }
}

const EliminarDB = (actividad) => {
    let indexArray;

    arrayActividades.forEach((element, index) => {

        if(element.actividad ===actividad){
            indexArray = index;
        }
    });

    arrayActividades.splice(indexArray, 1);
    GuardarDB()
}

const EditarDB = (actividad) => {

    let indexArray = arrayActividades.findIndex((element) => element.actividad === actividad);

    arrayActividades[indexArray].estado =true;

    GuardarDB();
}

// addEventListener

formularioUI.addEventListener('submit', (e) => {
    e.preventDefault();
    let actividadUI = document.querySelector('#actvidad').value;

    CrearItem(actividadUI) 

    GuardarDB();

    formularioUI.reset();

})

document.addEventListener('DOMContentLoaded', PintarDB);

listaDeActividadesUI.addEventListener('click', (e) => {
    e.preventDefault();

    if(e.target.innerHTML === 'done' || e.target.innerHTML === 'delete'){
        let texto = e.path[2].childNodes[1].innerHTML;

        if(e.target.innerHTML === 'delete'){
            EliminarDB(texto);
        };

        if(e.target.innerHTML === 'done'){
            EditarDB(texto);
        }
    }
})