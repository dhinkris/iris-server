var winston = require('winston')


var winstonPapertrail = new winston.transports.Papertrail({
	host: 'logs4.papertrailapp.com',
	port: 38928
})
winstonPapertrail.on('error', function(msg, obj) {
	logger.log('error',msg);
});
winstonPapertrail.on('info', function(msg, obj) {
	logger.log('info',msg);
});
winstonPapertrail.on('warn', function(msg, obj) {
	logger.log('warn',msg);
});

var logger = new winston.Logger({
	transports: [winstonPapertrail]
});
module.exports.logger = {
	getLogger: function(){
		return logger;
	}
}