const express = require('express');
const app = express();
const path = require('path');

app.set('views',path.join(__dirname, 'views'));
app.set('views engine','ejs');
app.use(express.static(path.join(__dirname,'public' )));

app.use(express.json());

//peticion get -post -patch -delete
//get pedir informacion

app.get('/',(req,res)=>{
          res.render('index.ejs')
});

app.get('/contacto',(req,res)=>{
    res.render('.pages/contacto')
});

app.listen(3000,()=>{
    console.log("escuchando puerto 3000")
});