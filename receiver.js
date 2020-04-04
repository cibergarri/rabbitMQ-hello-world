const amqp = require('amqplib');

const queue = 'hello'

const connect = () => amqp.connect('amqp://localhost').then(conn => conn.createChannel());
const test = async () => {
  const result = await channel.assertQueue(queue);
  console.log('Receiver connection to channel result', result);
};

const subscribe = () => {
  const onMessage = msg => console.log(" [x] Received %s", msg.content.toString());
  channel.consume(queue, onMessage, { noAck: true })
};

const initalize = async () => {
  channel = await connect();
  await test();
  subscribe();
};

module.exports = {
  initalize,
}

// amqp
//   .connect('amqp://localhost')
//   .then(conn => {
//     // console.log('conn -->', conn);
//     return conn.createChannel();
//   })
//   .then(channel => {
//     // console.log('channel -->', channel);
//     return channel
//       .assertQueue(queue, { durable: true })
//       .then((ok) => {
//         console.log('ok', ok);
//         const onMessage = msg => console.log(" [x] Received %s", msg.content.toString());
//         channel.consume(queue, onMessage, { noAck: true })
//       });
//     }).catch(console.warn);

