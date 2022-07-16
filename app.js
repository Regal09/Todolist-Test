const express  = require('express');
const app      = express();
const port     = process.env.PORT || 8080;
var mysql = require('mysql');
const server   = require('http').Server(app);
 const bodyParser = require('body-parser');
 app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");

    next();
});

// Cette ligne indique le répertoire qui contient
// les fichiers statiques: html, css, js, images etc.
app.use(express.static(__dirname + '/public'));
// Lance le serveur avec express
server.listen(port);
console.log("Serveur lancé sur le port : " + port);



var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todolist"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


app.get('/', function(req, res) {
  
    res.sendFile(__dirname,'public/index.html');
});



app.get('/gettask', function(req, res) {
    let mystatus = req.query.status || '';

        con.query("SELECT * FROM tablelist WHERE status = " +mystatus , function (err, result, fields) {
          if (err) throw err;
          console.log(result);
          res.send(result);
        
        });
       


   
});

app.get('/addtask', function(req, res) {
    let tache = req.query.tache || '';
    let desctache = req.query.desctache || '';
    console.log(desctache+"1 record inserted"+tache);
    var sql = "INSERT INTO tablelist (tache, status,description) VALUES ? ";
    var values = [[tache,"todo",desctache]];
    con.query(sql,[values], function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
       


   
});


app.get('/updatetask', function(req, res) {
    let tache = req.query.tache || '';
   //tache = "gg"
    let statusupdate = req.query.statusupdate || '';
console.log("td"+tache)

    var sql = "UPDATE tablelist SET status ='"+ statusupdate +"' WHERE tache = '" + tache + "'";
  //  var sql = "UPDATE tablelist SET status = 'inprogress' WHERE tache = 'test 2'";
    con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
    console.log(tache);
    console.log(statusupdate);
  });
       


   
});


app.get('/deletetask', function(req, res) {
    let tache = req.query.tache || '';

    var sql = "DELETE FROM tablelist WHERE tache = '"+tache+"'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
    });
       


   
});


app.get('/', function(req, res) {
  
    res.sendFile(__dirname,'public/index.html');
});


