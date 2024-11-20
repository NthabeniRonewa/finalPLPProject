const express = require('express');
const cors=require('cors');
const dotenv = require('dotenv');
const patientsRoutes = require('./patients');
const doctorsRoutes = require('./doctors');
const appointmentsRoutes = require('./appointments');
const adminRoutes = require('./admin');

dotenv.config();
const app = express();

app.use(express.json()); 
app.use(cors());
app.use('/patients', patientsRoutes);
app.use('/doctors', doctorsRoutes);
app.use('/appointments', appointmentsRoutes);
app.use('/admin', adminRoutes);

const mysql = require('mysql');

const pool = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
    waitForConnections : true,
    connectionLimit : 10,
    queueLimit :0
});

pool.connect((err) => {
    if(err){
        return console.log("Error connecting to the database" , err);
    } 
   console.log("Connected as ID:" , pool.threadId);
});

module.exports = pool;

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

