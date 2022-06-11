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
    const title = req.body.title
    const price = req.body.price
    const img = req.body.img

    db.query('INSERT INTO cart (title, price, img) VALUES (?,?,?)',[title, price, img], (err,result) => {
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