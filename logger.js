const EventEmitter = require('events');
const uuid = require('uuid');

// Create Logger class
class Logger extends EventEmitter {
    log(msg) {
        this.emit('message', { id: uuid.v4(), msg });
        this.emit('log', { msg, id: uuid.v4() });
    }
}

// module.exports = Logger;

// Init logger
const logger = new Logger();

// Listen for log events
logger.on('message', (data) => console.log('Called listener:', data));

// Call log method
logger.log('Hello');
logger.log('Jimmy');
logger.log('How are you?');