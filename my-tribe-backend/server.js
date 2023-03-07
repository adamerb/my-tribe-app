import { authenticateUser } from './authenticate.js';
import { createNewUser } from './createNewUser.js';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mysql from 'mysql';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'public'
});

db.connect();

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

// Authenticate User
app.use('/login', (req, res) => {
  authenticateUser(req,res,db)
});

// Create New User
app.use('/newuser', (req, res) => {
  createNewUser(req,res,db)
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));