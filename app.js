const express = require("express")
const app = express()
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Update this as needed
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
app.get("/user",(req,res)=>{
    res.send("welcome to jungle")
})

app.get("/hello",(req,res)=>{
    res.send("welcome to babas club")
})
app.listen(3000,()=>{
    console.log("server is running")
})