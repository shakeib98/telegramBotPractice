const TelegramBot = require('node-telegram-bot-api')
const token = '893235715:AAFHwINY2Ostw1eMtKixg8yUvS2Ypr3ZHrc'
const bot = new TelegramBot(token, {polling: true})

bot.onText(/\/start/, (msg, match) => {
    console.log(msg);
    const opts = {
        reply_to_message_id: msg.message_id,
        reply_markup: JSON.stringify({
            keyboard: [
                ['How are you?'],
                ['Add two random numbers'],
                ['What date is today?']
                //     ['price'],
                // ['height']
            ],
            'one_time_keyboard': true
        })
    };
    if(msg.chat.type=="private")
        bot.sendMessage(msg.chat.id, 'Hi. I am SSBot, I am a bot made by Shakeib just for fun and practice', opts);

})


bot.on('message',(msg)=>{
    let are = 'are'
    if(msg.toLowerCase().toString().includes(are)){
        bot.sendMessage(msg.chat.id,"I'm great")
    }
})


