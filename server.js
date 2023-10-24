import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para servir archivos estáticos del cliente (Vite)
// app.use(express.static(path.join(__dirname)));

app.use(express.static(__dirname,'dist'));

// app.get('/', (req, res) => {
//     return res.send('Hello World!');
// });

// app.get('/public/hola', (req, res) => {
//     return res.send('Hola!');
// })
// Middleware para manejar rutas en el servidor
app.get('*', (req, res) => {
    console.log(path.join(__dirname, 'dist/index.html'));
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
