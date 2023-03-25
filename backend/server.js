// on va importer le package http de node pour créer un serveur
const http = require('http');
// à chaque envoie au serveur, on va appeler
const server = http.createServer((req, res) => {
    res.end('Voila la réponse du serveur bientot disponible  ! ');
});

server.listen(process.env.PORT || 3000);