const express = require('express');
const path = require('path');

const app = express();

// Middleware para servir archivos estáticos del cliente
app.use(express.static(path.join(__dirname, 'build')));

// // Configurar rutas para la API (si es necesario)
// app.use('/api', require('./apiRoutes'));

// Middleware para manejar rutas en el servidor
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
