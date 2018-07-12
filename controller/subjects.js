var subjectModel = require('../models/getSubjectDetails');

var subjectsController = {
    getResponse: function(){
        return {
            status: 'success',
            msg:'',
            body: {

            },
            token:''
        }
    },
    getSubjectsInfo: function(req, res){
        var response = subjectsController.getResponse();
        var callback = function(row){
            if (!row.length) {
                response.status = 'info';
                response.msg = 'No data received';
                res.json(response);
                return;
            }
            res.json(row)
        }
        subjectModel.getSubjectDetails(callback)
    }
}

module.exports = subjectsController