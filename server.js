const express = require("express");
const app = express();
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user:'root',
    password:'mysqlRoot25',
    database: 'sys'
});

app.get("/", (req,res) => {
    const sqlInsert = "INSERT INTO studenentform (Name,Register Number,Date of Birth,Email-Id,Gender,Phone number,Year of Passing,Degree,Branch) VALUES('Viji',910717205025,'2000-07-25','muthu@gmail.com','male',9876543210,2021,'B.Tech','IT');"
    db.query(sqlInsert, (err,result)=>{
        res.send("hello ");
    });
    
});

app.listen(3001, () => {
    console.log("running on port 3001");

});

