let express      = require("express");
let bodyParser   = require("body-parser");
let cors         = require("cors");
let MongoClient  = require("mongodb").MongoClient;
let ObjectID     = require("mongodb").ObjectID;
let app = express();
let jwt          = require("jsonwebtoken");
let db;

MongoClient.connect("mongodb://localhost:27017", {useNewUrlParser: true}, function(err, client){
  db = client.db("simpleblog");
})




app.use(bodyParser.json({limit: '10mb'}))
app.use(bodyParser.urlencoded({extended: true, limit: '128kb'}))
app.use(cors())


app.post("/signup", function(req, res){
  console.log(req.body)
  let now = new Date();
  let data = {Username: req.body.Username, password: req.body.password, CreatedAt: now};
  db.collection("user").insertOne(data, function(err, InsertedOne){
    if(err) res.json({success: false})
    res.json({success: true})
  })
})

app.post("/login", function(req, res){
  console.log(req.body);
  db.collection("user").findOne({Username: req.body.Username}, function(err, foundOne){
    if(err) res.json({success: true});
    if(!foundOne) res.json({success: false})
    if(foundOne.password == req.body.password){
      let token = jwt.sign({
        Username: foundOne.Username,
        password: foundOne.password,
        _id: foundOne._id
      }, "thesecretkeytoencryptanddecrypt")
      res.json({success: true, data: token})
    } else res.json({success: true})
  })
})

app.listen(8080, function(){
  console.log("Server is running on http://localhost:8080")
})
