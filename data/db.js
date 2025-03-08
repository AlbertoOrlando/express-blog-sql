const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost', // inserisci l'host
    user: 'root', // inserisci l'utente
    password: 'corso139', // inserisci la password
    database: 'db_blog'    // inserisci il nome del database
});
connection.connect((err) => {
    if (err) {
        console.log('Errore di connessione al database');
    } else {
        console.log('Connessione al database riuscita');
    }
});
module.exports = connection;
