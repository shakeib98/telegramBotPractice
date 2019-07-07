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


bot.onText(/how are you?/i,(msg,match)=>{
    bot.sendMessage(msg.chat.id,"I am Great!")
})

bot.onText(/add two random numbers/i,(msg,match)=>{
    let numberOne = Math.random() * (1000- 0) + 0
    let numberTwo = Math.random() * (1000- 0) + 0
    let result = numberOne + numberTwo
    bot.sendMessage(msg.chat.id,numberOne.toString()+ " " + "+" + " " +numberTwo.toString() + " =" + result.toString())
})

bot.onText(/What date is today?/i,(msg,match)=>{
    var datetime = new Date();
    console.log(datetime);
    bot.sendMessage(msg.chat.id,datetime.getDate().toString())
})

