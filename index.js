const sender = require('./sender');
const receiver = require('./receiver');

const init = async () => {
  await receiver.initalize();
  await sender.initalize();
  setInterval(() => sender.send('Hello World'), 3000);
}


init();