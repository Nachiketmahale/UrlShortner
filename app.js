const express=require('express');
const app=express();
const ejs=require('ejs');
const path=require('path');
const config=require('./config');

app.set('view engine','ejs');
app.set('views','views');

app.use(express.static(path.join(__dirname,'/public')));
app.get('/',(req,res)=>{
    res.render('home',{config});
})
const port=process.env.PORT||3000;
app.listen(port,console.log('server started'));