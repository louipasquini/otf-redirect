const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes/routes.js');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(morgan('dev'));
app.use(cors());
app.use(router);
app.use(express.json());

app.listen(process.env.API_PORT,() => console.log(`Running on port ${process.env.API_PORT}`));