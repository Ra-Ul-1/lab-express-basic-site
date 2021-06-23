// Set up express
const express = require('express');
const app = express();

// this is needed to register the public folders
// containing all the assets so that it is accessible in your browser
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    // console.log('the home page')
    res.sendFile(__dirname + '/views/home-page.html');
});

app.get('/ethereum', function (req, res) {
    res.sendFile(__dirname + '/views/ethereum.html');
})

app.listen(3000, function () {
    console.log('Server listening');
})