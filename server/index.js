const express = require('express')
const nodemon = require('nodemon')
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = 9000

const database = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'selefi_org_database'
})

app.post('/post', (req, res)=> {
    const sqlPost = 'INSERT INTO test_table (title, content) VALUES (?,?);'
    const title = req.body.title
    const content = req.body.content

    database.query(sqlPost, [title, content], (error, result)=> {
        console.log(result);
    })
})

app.get('/get', (req, res)=> {
    const sqlGet = 'SELECT * FROM test_table;'
    database.query(sqlGet, (error, result)=> {
        res.send(result)
    })
})

app.listen(port, () => {
    console.log('Server started at http://localhost:9000')
})