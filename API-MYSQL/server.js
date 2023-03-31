const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors()); 

const db = mysql.createConnection({
  host: 'containers-us-west-193.railway.app',
  port: '7933',
  user: 'root',
  password: 'dSgMSZD5QNxJV0HALZxh',
  database: 'railway'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado a la base de datos MySQL');
});

app.post('/cocteles', (req, res) => {
    const name = req.body.name;
    const sql2 = 'SELECT * FROM Coctel WHERE nombre = ?';
    db.query(sql2, [name], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error al agregar el coctel' });
      }
      if (result.length > 0) {
        return res.json({ message: 'El coctel ya existe' });
      }
      const sql = 'INSERT INTO Coctel (nombre) VALUES (?)';
      db.query(sql, [name], (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Error al agregar el coctel' });
        }
        console.log(`Se ha agregado el coctel ${name}`);
        return res.json({ message: 'Coctel agregado con éxito' });
      });
    });
  });  

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});