const express =require('express');
const app= express();
const fs = require("fs");
const path = require("path");
const port = 8000;
app.use(express.urlencoded({extended:true}));
app.use( express.static(path.join(__dirname, 'public')));
app.use(express.json()); 

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'index.html'))
})


app.listen(port,()=>{
    console.log('server is working ');
})