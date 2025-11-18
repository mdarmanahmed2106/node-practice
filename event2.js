const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');

const counterFile = path.join(__dirname, 'counter.json');

// Function to get current counter value
function getCounter() {
    if (fs.existsSync(counterFile)) {
        const data = fs.readFileSync(counterFile, 'utf8');
        return JSON.parse(data).count || 0;
    } else {
        return 0;
    }
}

// Function to set counter value
function setCounter(count) {
    fs.writeFileSync(counterFile, JSON.stringify({ count }, null, 2));
}

// Create EventEmitter instance
const emitter = new EventEmitter();

// Define 4 events with listeners that increment counter
emitter.on('event1', () => {
    let count = getCounter() + 1;
    setCounter(count);
    console.log(`Event1 executed, current count: ${count}`);
});

emitter.on('event2', () => {
    let count = getCounter() + 1;
    setCounter(count);
    console.log(`Event2 executed, current count: ${count}`);
});

emitter.on('event3', () => {
    let count = getCounter() + 1;
    setCounter(count);
    console.log(`Event3 executed, current count: ${count}`);
});

emitter.on('event4', () => {
    let count = getCounter() + 1;
    setCounter(count);
    console.log(`Event4 executed, current count: ${count}`);
});

// Emit each event multiple times to demonstrate incrementing
console.log('Emitting events...');
emitter.emit('event1');
emitter.emit('event2');
emitter.emit('event1');
emitter.emit('event3');
emitter.emit('event4');
emitter.emit('event2');
emitter.emit('event3');
emitter.emit('event4');

console.log('All events emitted. Check counter.json for the final count.');
