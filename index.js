const venom = require('venom-bot');

venom.create().then((client) => start(client));

function start(client) {
  client.onMessage((message) => {
    if (message.body === 'Hi') {
      client.sendText(message.from, 'Welcome Venom 🕷');
    }
  });
}