const express = require('express');
const route = require('./controller');
const cors = require('cors');
const port = parseInt(process.env.PORT) || 4000;
const app = express();
const bodyParser = require('body-parser')
const {errorHandling} = require('./middleware/ErrorHandling');
const cookieParser = require('cookie-parser');
const path = require('path');
const db = require('./config');
const jwt = require('jsonwebtoken');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});



app.use(
    cors(),
    cookieParser(),
    route,
    express.json,
    express.urlencoded({extended: false})
);
// app.use(route);

route.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'));
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});

app.use(errorHandling);