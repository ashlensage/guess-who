const express = require('express');

const app = express();
const port = 5000;

app.use(express.static('server/public'));

const people = require('./modules/people');

app.listen(port, () => {
    console.log('listening on port, ', port);
});

app.get('/people', function(req, res) {
    console.log('request for /people was made');
    res.send(people);
});





// control + c closes the server

// C - post
// R - get
// U - put
// D - delete