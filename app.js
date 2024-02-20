const express=require('express');
const port=5000;
const path = require('path');

const app=express();

app.use('/public',express.static('public'));
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true})); 

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/profile',(req,res)=>{
    res.render('profile');
})
app.get('/log',(req,res)=>{
    res.render('log');
})

app.listen(port,async(res,req)=>{
    console.log(`The server is running on ${port}`);
})
