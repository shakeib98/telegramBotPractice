const TelegramBot = require('node-telegram-bot-api')
const token = '893235715:AAFHwINY2Ostw1eMtKixg8yUvS2Ypr3ZHrc'
const bot = new TelegramBot(token, {polling: true})

bot.on('message', (msg) => {

    var Hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
        bot.sendMessage(msg.chat.id,"Hello dear " +msg.chat.first_name);
        bot.sendMessage(msg.chat.id,"How are you?")

        bot.on('message',(msg)=>{
            if((msg.text.toString().toLowerCase().indexOf("I am fine") ===0) || (msg.text.toString().toLowerCase().indexOf("I'm fine") ===0) || (msg.text.toString().toLowerCase().indexOf("fine") ===0) || (msg.text.toString().toLowerCase().indexOf("great") ===0) || (msg.text.toString().toLowerCase().indexOf("Okay") ===0) ){
                bot.sendMessage(msg.chat.id,"Great, What can I do for you?")
            }
        })
    }

});
