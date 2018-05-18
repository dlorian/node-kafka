const kafka = require('kafka-node');
const client = new kafka.Client();

const consumer = new kafka.Consumer(client, [
    {topic: 'platinum_emails', partition: 0},
]);

consumer.on('message', (orderConsumerTuple) => sendMail(orderConsumerTuple));
