var db = require('../db');

var subjectModel = {
    getSubjectDetails: function(callback){
        var subjectlist={
        }
        db.getMongoDBConnection( function (err, connection) {
            try{
                console.log(connection)
                var con = connection.collection('subjects');
                subjectlist = con.find({}).toArray(function(err, result) {
                    if (err) throw err;
                    callback(result);
                })
            }catch (e){
                callback(e)
            }
        })
    }
}

module.exports = subjectModel;