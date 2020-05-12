const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
 
// parse application/json
app.use(bodyParser.json());
 
//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'melba',
  database: 'ready_assist'
});
 
//connect to database
conn.connect((err) =>{
    if(err) throw err;
    console.log('Mysql Connected...');
  });
   
  //show all candidates
  app.get('/api/customer',(req, res) => {
    let sql = "SELECT * FROM customer";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
      });
    });
    //show single candidates
    app.get('/api/customer/:employee_id',(req, res) => {
      let sql = "SELECT * FROM customer WHERE employee_id="+req.params.employee_id;
    
      let query = conn.query(sql, (err, results) => {
        if(err)console.log(err) 
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
      });
    });
    //Server listening
    app.listen(3000,() =>{
    
        console.log('Server started on port 3000...');
      });

      










    
    

























































































