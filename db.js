const MongoClient = require('mongodb').MongoClient;
const saveBatch = ({mongoURL, collectionName, list}) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(mongoURL, function(err, db) {
      if (err) {
        db.close();
        reject(err);
      }
      var collection = db.collection(collectionName);
      collection.insertMany(list, function(err, result) {
        if (err) {
          reject(err);
        }
        resolve(result);
        db.close();
      });
    });
  })
}

module.exports = {
  saveBatch,
}
