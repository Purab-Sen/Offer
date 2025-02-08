import companyRoutes from './routes/company.route.js'
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const { db } = require('./config/dbConnect');

const app = express();
const router = express.Router()

const dbConnection = require(db);
dbConnection();

app.use("/v1/company", companyRoutes)

app.listen(9005);