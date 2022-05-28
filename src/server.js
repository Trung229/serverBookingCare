import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine'
import initWebRoute from './routes/web'
require('dotenv').config();

let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


viewEngine(app);
initWebRoute(app);

let port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log('BackEnd nodejs is running on port', port);
})