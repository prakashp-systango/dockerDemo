const express = require("express")
const app = express()

app.get("/user",(req,res)=>{
    res.send("welcome to jungle")
})

app.get("/hello",(req,res)=>{
    res.send("welcome to babas club")
})
app.listen(3000,()=>{
    console.log("server is running")
})