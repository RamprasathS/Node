



exports.findById = function (req, res, next) {
    var id = req.params.id;
    // Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/expansedb", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});
    
};

exports.saveExpanse = function (req, res, next) {
    var id = req.body.id;
    var expanseHeader = req.body.expanseHeader;
    var expanseType = req.body.expanseType;
    var expanseDescription = req.body.description;
    var expanseAmount = req.body.expanseAmount;
    var expanseDate = req.body.expanseDate;
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect("mongodb://localhost:27017/expansedb", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }

    var collection = db.collection('expanse');
    console.log(id);
    console.log(expanseHeader);
    console.log(expanseType);
    console.log(expanseDescription);
    var doc ={"id":id,"expanseHeader":expanseHeader,"expanseType":expanseType,"expanseDescription":expanseDescription,
             "expanseAmount":expanseAmount,"expanseDate":expanseDate}
    collection.insert(doc, {w:1}, function(err, result) {
        if(!err)  
        res.end("inserted successfully");
        else
            console.log(err);
    });
  
    // Retrieve

    
})
};



