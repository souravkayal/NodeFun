var express = require('express');
var router = express.Router();
var mongoClient = require("mongodb").MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {

  try
  {

    var insertDocument = function(db, callback) {
      db.collection('families').insertOne( {
              "id": "AndersenFamily",
              "lastName": "Andersen",
              "parents": [
                  { "firstName": "Thomas" },
                  { "firstName": "Mary Kay" }
              ],
              "children": [
                  { "firstName": "John", "gender": "male", "grade": 7 }
              ],
              "pets": [
                  { "givenName": "Fluffy" }
              ],
              "address": { "country": "USA", "state": "WA", "city": "Seattle" }
          }, function(err, result) {
          assert.equal(err, null);
          console.log("Inserted a document into the families collection.");
          callback();
      });
      };
      
      var findFamilies = function(db, callback) {
      var cursor =db.collection('families').find( );
      cursor.each(function(err, doc) {
          assert.equal(err, null);
          if (doc != null) {
              console.dir(doc);
          } else {
              callback();
          }
      });
      };
      
      var updateFamilies = function(db, callback) {
      db.collection('families').updateOne(
          { "lastName" : "Andersen" },
          {
              $set: { "pets": [
                  { "givenName": "Fluffy" },
                  { "givenName": "Rocky"}
              ] },
              $currentDate: { "lastModified": true }
          }, function(err, results) {
          console.log(results);
          callback();
      });
      };
      
      var removeFamilies = function(db, callback) {
      db.collection('families').deleteMany(
          { "lastName": "Andersen" },
          function(err, results) {
              console.log(results);
              callback();
          }
      );
      };

     const mongoClient = require("mongodb").MongoClient;
     
     let database = null;
     
     
     new mongoClient('mongodb://cosmosfun.documents.azure.com:10255/?ssl=true', {
         auth: {
            user: 'cosmosfun',
            password: '4PJFclRN4pbzueaEZcqEPNKtt71CfPZrZQCi2J5ormUDQExXgrtUJ3emLi1gCO3D3Q2IiffalPGRuFEbUfDbSw==',
         }
     }).connect(
         (err, db) => {
           if (err) return console.error(err);
           console.log('Database connected');
           database = db.db('cosmosfun'); 
           const collection = database.collection('Persons');
           collection.find({}).toArray(function(err, docs) {
            console.log("Found the following records");
            console.log(docs)
          });

     });




    }
  catch(ex)
  {

    console.error(ex);
  }

  res.render('easindex', { title: 'Express' , user:'Sourav' });
});


module.exports = router;
