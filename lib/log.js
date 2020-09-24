const winston = require('winston');
const loggable = function(filename) {
    return winston.createLogger({
        level: 'info',
        format: winston.format.simple(),
        transports: [
          new winston.transports.File({ filename: "./log/" + filename})
        ]
      });
}

module.exports.create_log = loggable;