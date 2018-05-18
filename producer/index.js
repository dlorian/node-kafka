
let kafka = require('kafka-node');

let Producer = kafka.Producer;
const KeyedMessage = kafka.KeyedMessage;

const client = new kafka.Client();

const producer = new Producer(client);
const km = new KeyedMessage('key', 'message');

const payloads = [
        {topic: 'test_topic', messages: 'hi', partition: 0},
        {topic: 'test_topic', messages: ['hello', 'world', km]},
    ];
producer.on('ready', () => {
    producer.send(payloads, (err, data) => console.log(data));
});

producer.on('error', (err) => console.log(err));
