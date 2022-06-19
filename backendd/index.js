const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ouM@M!",
    database:"addtocart" 
    })
    

app.post('/create',(req,res) =>{
    const productName = req.body.productName
    const price = req.body.price
    const quantity = req.body.quantity
    const total = req.body.total

    db.query('INSERT INTO order(productName, price,quantity,total) VALUES (?,?,?,?)',[productName, price, quantity, total], (err,result) => {
         if(err) {
             console.log(err)
         }else{
             res.send("Values Inserted");
         }
    }
    );
});


const  PORT = 3001;














app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})