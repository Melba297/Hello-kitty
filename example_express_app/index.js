const express = require("express");

const app = express();

app.get("/hello",(req,res)=>{
    res.send("<h1>Hello</h1>");
})

app.listen(3000,()=>{
    console.log("Server started at port 3000");
})