// Express API scaffold for MySQL and MongoDB
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// --- MySQL Example ---
// const mysql = require('mysql2');
// const mysqlConn = mysql.createConnection({
//   host: 'localhost', user: 'root', password: '', database: 'churchdb'
// });
// mysqlConn.connect();
// app.get('/api/mysql/members', (req, res) => {
//   mysqlConn.query('SELECT * FROM members', (err, results) => {
//     if (err) return res.status(500).json({ error: err });
//     res.json(results);
//   });
// });

// --- MongoDB Example ---
// const { MongoClient } = require('mongodb');
// const mongoClient = new MongoClient('mongodb://localhost:27017');
// mongoClient.connect().then(() => {
//   const db = mongoClient.db('churchdb');
//   app.get('/api/mongo/members', async (req, res) => {
//     const members = await db.collection('members').find().toArray();
//     res.json(members);
//   });
// });

app.get('/', (req, res) => res.send('Church Management API Running'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API server running on port ${PORT}`));
