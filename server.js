const mysql = require('mysql2');
require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Test the Express.js connection (below)
/*
app.get('/', (req, res) => {
    res.json({
      message: 'Hello World'
    });
  });
  */

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: process.env.DB_USER,
      // Your MySQL password
      password: process.env.DB_PW,
      database: 'election'
    },
    console.log('Connected to the election database.')
  );

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

// the function to start the Express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });