let express = require("express");
let app     = express();
let bodyParser = require("body-parser");
let cors = require("cors");
app.use(bodyParser.json({limit: '10mb'}))
app.use(bodyParser.urlencoded({extended: true, limit: '128kb'}))

app.use(cors())
app.post("/login", function(req, res){
  console.log(req.body);
  res.json({success: true})
})

app.listen(8080, function(){
  console.log("Hello World!")
})
