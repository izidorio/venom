const venom = require('venom-bot');

const options = {    
    devtools: false, // Open devtools by default
    useChrome: false, // If false will use Chromium instance
    debug: false, // Opens a debug session
    logQR: true, // Logs QR automatically in terminal    
    refreshQR: 15000, // Will refresh QR every 15 seconds, 0 will load QR once. Default is 30 seconds
    autoClose: 60000, // Will auto close automatically if not synced, 'false' won't auto close. Default is 60 seconds (#Important!!! Will automatically set 'refreshQR' to 1000#)
    disableSpins: true, // Will disable Spinnies animation, useful for containers (docker) for a better log
}

venom.create(undefined, undefined, undefined).then((client) => start(client));

function start(client) {
  client.onMessage((message) => {
    if (message.body === 'Hi') {
      client.sendText(message.from, 'Welcome Venom 🕷');
    }
  });
}