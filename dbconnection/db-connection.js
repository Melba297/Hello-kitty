let mysql= require('mysql');

let conninfo={
host:"localhost",
user:"root",
password: "melba",
database:"ready_assist"
}

let con=mysql.createConnection(conninfo);

con.connect(function(err) {
    if (err) throw err;
    //Select all customers and return the result object:
    con.query("SELECT * FROM customer", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
  


