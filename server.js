// importiamo i moduli
const express = require('express');
// inizializzazione del modulo express
const app = express();
// definiamo la porta
const port = 3000;
// importiamo cors
const cors = require('cors');

// importiamo i routers
const postsRouter = require('./routers/postsRouter');

// usiamo express.json
app.use(express.json());
// usiamo cors
app.use(cors());
// consentiamo alla cartella public di essere accessibile
app.use(express.static('public'));

// rotta home
app.get("/", (req, res) => {
    res.send("Home del mio Blog")
})

// usiamo i routers
app.use('/posts', postsRouter);

// avviamo il server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});