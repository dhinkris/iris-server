var tool = require('cloneextend'),
    conf = {};
    conf.development = {
        db: {
            mongodb: {
                host: 'localhost',
                port: '27017',
                user: '',
                password: '',

            }
        },
        application: {
            errorHandler: {dumpExceptions: true, showStack: true}
        },
        server: {
            host: 'localhost',
            port: 3005
        }
    };

    conf.defaults = {
        db: {
            mongodb: {
                host: 'localhost',
                port: '27017',
                database: 'sample'
            }
        },
        application: {
            errorHandler: {dumpExceptions: true, showStack: true}
        },
        server: {
            host: 'localhost',
            port: 3005
        }
    };

exports.get = function get(env, obj){
    var settings = tool.cloneextend(conf.defaults, conf[env]);
    return ('object' === typeof obj) ? tool.cloneextend(settings, obj) : settings;
}