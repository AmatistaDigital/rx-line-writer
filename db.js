const MongoClient = require('mongodb').MongoClient;
const saveBatch = ({mongoURL, collectionName, list}) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(mongoURL, (err, db) => {
      if (err) {
        db.close();
        reject(err);
      }
      const collection = db.collection(collectionName);
      collection.insertMany(list, (errInsert, result) => {
        if (errInsert) {
          reject(errInsert);
        }
        resolve(result);
        db.close();
      });
    });
  });
};

module.exports = {
  saveBatch,
};
