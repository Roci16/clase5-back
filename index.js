// Importar el módulo Express
const express = require('express');

// Crear una instancia de la aplicación Express
const app = express()

// Definir el puerto en el que se ejecutará el servidor,
// utilizando una variable de entorno si está disponible, o el puerto 3001 por defecto
const PORT = process.env.PORT || 3001;

// Definir una ruta para el endpoint '/' que devuelve "Home" como respuesta
app.get('/', (req, res) => {
    res.send("Home")
})

// Definir una ruta para el endpoint '/cursos' que devuelve "Cursos" como respuesta
app.get('/cursos', (req, res) => {
    res.send("Cursos")
})

// Definir una ruta para el endpoint '/contacto' que devuelve "Contacto" como respuesta
app.get('/contacto', (req, res) => {
    res.send("Contacto")
})

// Middleware para manejar solicitudes a rutas no definidas,
// devuelve un mensaje de error 404
app.use((req, res) => {
    res.status(404).send("Lo siento, la páginna que buscas no esta disponible")
})

// Escuchar en el puerto especificado y mostrar un mensaje en la consola
app.listen(PORT, () => {
    console.log(`El servidor está funcionando en el puerto localhost:${PORT}`);
});