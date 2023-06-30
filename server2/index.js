const express = require('express')
const nodemon = require('nodemon')
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = 9001

const database2 = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'selefi_database'
})

app.post('/post', (req, res)=> {
    const sqlPost = 'INSERT INTO users_table (username, email, password) VALUES (?,?,?);'
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    database2.query(sqlPost, [username, email, password], (error, result)=> {
        console.log(result);
    })
})

app.get('/get', (req, res)=> {
    const sqlGet = 'SELECT * FROM users_table;'
    database2.query(sqlGet, (error, result)=> {
        console.log(error);
        console.log(result);
        res.send(result)
    })
})

app.listen(port, () => {
    console.log('Server started at http://localhost:9001')
})