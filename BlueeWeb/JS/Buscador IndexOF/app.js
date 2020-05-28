const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');

const productos = [
    {nombre: 'Platano', valor: 500},
    {nombre: 'Pera', valor: 100},
    {nombre: 'Manzana', valor: 300},
    {nombre: 'Naranja', valor: 200},
    {nombre: 'Uva', valor: 400}
];

const filtrar = () => {
    // console.log(texto)

    resultado.innerHTML = '';

    const texto = formulario.value.toLowerCase();

    for(let producto of productos){
        let nombre  = producto.nombre.toLowerCase()
        if(nombre.indexOf(texto) !== -1){
            resultado.innerHTML += `
            <li>${producto.nombre} - Valor: ${producto.valor}</li>
            `
        }
    }
    
    if(resultado.innerHTML === '' || texto === ''){
        resultado.innerHTML = `
        <li>No se encontro resultado</li>
        `
    }

};


boton.addEventListener('click', filtrar);

formulario.addEventListener('keyup', filtrar);

filtrar()