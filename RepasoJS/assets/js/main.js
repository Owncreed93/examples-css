alert('Hellow world!');

let nombre = 'Christian Gerson Tarifeño Ramírez';

let altura = 172;

let concatenacion = `${nombre} y mido ${altura} centímetros`;

let datos = document.getElementById('datos')

// datos.innerHTML = `
//     <h1>Soy la caja de datos</h1>
//     <h2>Mi nombre es: ${nombre}</h2>
//     <h3>Mido: ${altura} cm</h3>
// `;

// if (altura >= 172) {
//     datos.innerHTML += `<span>Eres una persona de talla promedio.</span>`;
// } else if (altura >= 190) {
//     datos.innerHTML += `<span>Eres una persona de talla alta.</span>`;
// } else {
//     datos.innerHTML += `<span>Eres una persona de talla baja.</span>`;
// }

// for (let i = 0; i <= 2020; i++) {
//     datos.innerHTML += `<p>Estamos en el año: <strong>${i}</strong></p>`
// }

function MuestraMiNombre(nombre, altura) {

    let datos = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura} cm</h3>
    `;

    return datos

}

function imprimir() {

    let datos = document.getElementById("datos");

    datos.innerHTML = MuestraMiNombre('Audra Miller', 152);

}

imprimir();

let nombres = ['Audra', 'Chrissy', 'Daniela'];

// * FOR FORM
// for (let i = 0; i < nombres.length; i++) {

//     datos.innerHTML += `<p>${i+1} - ${nombres[i]}</p>`
//     datos.i
// }

//  * FOREACH FORM
nombres.forEach(nombre => {

    datos.innerHTML += `<p>${nombre}</p>`

});