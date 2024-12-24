const express=require('express');
const app=express();

app.use("/home",(req,res)=>{
    res.send("Home Page of Server");
});

app.use("/get",(req,res)=>{
    res.send("Get Request");
});

app.listen(3000,()=>{
    console.log("Server listening on port 3000");
})