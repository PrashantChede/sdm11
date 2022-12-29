var express=require("express");
const app=express();
var path=require("path");
var bodyparser=require("body-parser");
 app.use(express.static(path.join(__dirname,"public")));
app.get("/",function(req,resp){
    resp.write("welcome");
    resp.end();
});
app.get("/see",function(req,resp){
   resp.sendFile((path.join(__dirname,"index.html")));
});
app.listen(5000);
console.log("server is listening on port 5000");