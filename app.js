const express = require(express);
app = express();
app.get("/",(req,res)=>{
    console.log(_dirname);
    res.sendFile(_dirname+"/index.html")
})