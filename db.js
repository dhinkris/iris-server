//import the mongodb native drivers.
var mongodb = require('mongodb');
var conf = require('./config/config').get(process.env.NODE_ENV);

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = "mongodb://";
var options = {};
if(process.env.NODE_ENV == 'UAT'){
    url+= conf.db.mongodb.user
        +':'+conf.db.mongodb.password+'@';
    options = {db: {authSource: 'admin'}};
}

url+= conf.db.mongodb.host
    +':'+conf.db.mongodb.port
    +'/'+ conf.db.mongodb.database;

if(process.env.NODE_ENV == 'production'){
    url = "mongodb://";
    url+= conf.db.mongodb.host;

    options = {
        authSource: 'admin',
        ssl: false,
        // replicaSet: conf.db.mongodb.replica,
        auth: {
            user: conf.db.mongodb.user,
            password: conf.db.mongodb.password
        }
    };
}

exports.getMongoDBConnection = function(callback) {
    // Use connect method to connect to the Server
    MongoClient.connect(url, options, function (err, db) {
        if (err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
            callback(err, db);
        } else {
            console.log(conf.db.mongodb.database)
            callback(err,  db.db(conf.db.mongodb.database));
            // db.close();
        }
    });
};

exports.getMongoDBObjectId = function() {
    return mongodb.ObjectID
}

