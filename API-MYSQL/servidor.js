const express = require('express');
const mysql = require('mysql2');
const myconn = require('express-myconnection');
const cors = require('cors');

const app = express();

app.set('port', process.env.PORT || 4000);

const dbOptions ={
    host: 'localhost', 
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'sisinf'
}

//middlewares
app.use(myconn(mysql, dbOptions, 'single'));
app.use(express.json());
app.use(cors());

//routes
app.get('/', (req,res)=>{
    res.send('corriendo en el puerto 4000');
})

app.get('/coctel', (req, res)=>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err);
        conn.query('select * from coctel', (err, rows) => {
            if(err) return res.send(err)
            res.json(rows);
        })
    })
})

//////

app.listen(app.get('port'), ()=> {
    console.log('estoy en el puerto ' , app.get('port')); 
});
