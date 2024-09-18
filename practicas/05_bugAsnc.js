/*
Tenemos otro error que nuestro cliente nos pide arreglar. El cliente está pidiendo un usuario
y nos dice que está usando el id correcto el 1. Pero que siempre le da undefined. Nos ha
pasado el código que tenemos que revisar y arreglar. Para este problema crear un archivo
llamado bugAsync.js con la solución. 
Este programa simula una llamada asincrónica para obtener un usuario
*/
// Este programa simula una llamada asincrónica para obtener un usuario
/*

/*
function obtenerUsuario(id) {
    let usuario;
    setTimeout(() => {
    if (id === 1) {
    usuario = { id: 1, nombre: 'John Doe' };
    }
    }, 2000);
    return usuario;
}
    */

const obtenerUsuario = (id) => {
    if (id === 1) {
    usuario = {id: 1, nombre: 'john Doe'}
}
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve(usuario)
        })
    },2000)
};
obtenerUsuario(1)
    .then(usuario => console.log(usuario))// Si añado el .nombre ,Obtengo solo el nombre del usuario