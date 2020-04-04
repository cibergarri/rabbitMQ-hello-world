// const amqp = require('amqplib/callback_api');
const amqp = require('amqplib');

const queue = 'hello'
let channel;

const connect = () => amqp.connect('amqp://localhost').then(conn => conn.createChannel());

const test = async () => {
  const result = await channel.assertQueue(queue);
  console.log('Sender connection to channel result', result);
};

const initalize = async () => {
  channel = await connect();
  await test();
};

const send = async (msg) => {
  const sent = await channel.sendToQueue(queue, Buffer.from(msg))
  console.log('sent:', sent);
  return sent;
}

module.exports = {
  initalize,
  send,
}