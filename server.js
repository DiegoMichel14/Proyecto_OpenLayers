// server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Permite solicitudes de otros dominios
app.use(express.json()); // Middleware para parsear JSON

// Datos genéricos para el ejemplo
let mensaje = 'Hola, este es un mensaje genérico para mostrar en el mapa.';

// Endpoint GET para obtener el mensaje
app.get('/api/mensaje', (req, res) => {
    res.json({ mensaje });
});

// Endpoint POST para actualizar el mensaje con parámetros
app.post('/api/mensaje', (req, res) => {
    const { nuevoMensaje } = req.body; // Obtener el mensaje del cuerpo de la solicitud
    if (nuevoMensaje) {
        mensaje = nuevoMensaje;
        res.json({ mensaje });
    } else {
        res.status(400).json({ error: 'El campo nuevoMensaje es requerido' });
    }
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});