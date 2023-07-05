const express = require('express')
const nodemon = require('nodemon')
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const bcrypt = require('bcrypt')
const saltRounds = 10

const app = express()

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = 9001

const database = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'selefi_database'
})

app.post('/register', (req, res)=> {
    const sqlPost = 'INSERT INTO users_table (username, password) VALUES (?,?);'
    const username = req.body.username
    const password = req.body.password

    bcrypt.hash(password, saltRounds, (err, hash) => {
        database.query(sqlPost, [username, hash], (err, result)=> {
            console.log(err)
        })
    }) 
})

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    database.query(
      "SELECT * FROM users_table WHERE username = ?;",
      username,
      (err, result) => {
        if (err) {
          res.send({ err: err });
        }
  
        if (result.length > 0) {
          bcrypt.compare(password, result[0].password, (error, response) => {
            if (response) {
              res.send(result);
              console.log(response)
            } else if(error){
                
            } 
            else {
              res.send({ message: "Wrong username/password combination!" });
              console.log("Wrong username/password!");
            }
          });
        } else {
          res.send({ message: "User doesn't exist" });
          console.log("User doesnt't exist")
        }
      }
    );
  });

app.listen(port, () => {
    console.log('Server started at http://localhost:9001')
})