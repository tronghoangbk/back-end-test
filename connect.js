var mysql = require('mysql')

var conn = mysql.createConnection({
    host: "us-cdbr-east-06.cleardb.net",
    user: "b31dd452c4bb27",
    password: "fb488890",
    database: "heroku_6965ea3352c823d"
});
conn.connect(function(err) {
    if (err) throw err;
    console.log("connected")
})

module.exports = conn