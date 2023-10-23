const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para servir archivos estáticos del cliente (Vite)
app.use(express.static(path.join(__dirname, 'dist/client')));

// Middleware para manejar rutas en el servidor
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/client/index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
