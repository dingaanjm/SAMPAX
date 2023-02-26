// Connection for the mysql user login database
var mysql = require("mysql");
var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"A123b321cd",
    database:"sampaxuserdb"
});

connection.connect((err)=>{
    if(err) throw err;
    console.log("Successfully Connected");
});
