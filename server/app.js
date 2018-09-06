import express from 'express';
import bodyParser from 'body-parser';
import api from './routes';
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api/stations', api.stations);
app.use('/api/parkings', api.parking);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});