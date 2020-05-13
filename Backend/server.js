let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    cors = require('cors'),
    path = require('path');
    
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors);
app.use('/uploads',express.static(path.join(__dirname, 'uploads')));

let routes = require('./api/routes/routes');
routes(app);

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log('RESTful API server started on: ' + port);

