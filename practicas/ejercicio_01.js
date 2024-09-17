/*
Crea un archivo ejercicio1.js que tenga un objeto llamado usuario con los siguientes
campos:
- Nombre (el tuyo o inventado)
- Apellidos (el tuyo o inventado)
- Una lista con los temas del bootcamp Node.js, Git y react con sus nombres y fechas
de inicio de cada módulo. Fecha en formato “YYYY-MM-DD”
- Si estás en búsqueda activa con un valor de verdadero o false
En este archivo queremos mostrar por pantalla la fecha de inicio del módulo de react del
objeto que hemos creado anteriormente.
*/

const usuario = {
    nombre: 'Jonatahan',
    apellido: 'Enriquez',
    temasBootcamps:{
        nodeJs: '2024-10-21',
        git: '2025-01-29',
        react: '2024-12-17'
    },
    busquedaActiva:{
        activa:true,
        noActva:false
    }
};
console.log(`La fecha de inicio del curso de react es:${usuario.temasBootcamps.react}`)
console.log(`Busqueda activa: ${usuario.busquedaActiva.activa}`)