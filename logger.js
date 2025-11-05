const EventEmitter = require('events');
const uuid = require('uuid');

// Create Logger class
class Logger extends EventEmitter {
    log(msg) {
        this.emit('message', { id: uuid.v4(), msg });
        this.emit('log', { msg, id: uuid.v4() });
    }
}

module.exports = Logger;