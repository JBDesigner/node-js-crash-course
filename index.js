// const person = require('./person');

// console.log(person.age);

// const Person = require('./person');

// const person1 = new Person('Jimmy Brand', 25);

// console.log(person1.greeting());

const Logger = require('./logger');

// Init logger
const logger = new Logger();

// Listen for log events
logger.on('message', (data) => console.log('Called listener:', data));

// Call log method
logger.log('Hello');
logger.log('Jimmy');
logger.log('How are you?');