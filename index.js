const TelegramBot = require('node-telegram-bot-api')
const token = '893235715:AAFHwINY2Ostw1eMtKixg8yUvS2Ypr3ZHrc'
const bot = new TelegramBot(token, {polling: true})

bot.on('message', (msg) => {

    var Hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
        bot.sendMessage(msg.chat.id,"Hello dear" +msg.chat.first_name);
    }

});
