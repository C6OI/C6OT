"use strict";
const BlueBird = require('bluebird');
// эта команда еще костыльнее
// TODO: сделать так что бы можно было писать только число и только меньше 25 или же очибка
module.exports.run = async (client, msg, args) => {
    if (msg.channel == 857922581268267018)
        return msg.channel.send("пошел нахуй я не хочу что бы любимый курайсик выдал мне опять мут из за тебя мудила конченная")
    else if (args[0] != 'до')
        return;

    // вставить проверку тутъ
    
    for (let i = 1; i <= args[1]; i++) {
        await BlueBird.delay(1250)
        msg.reply(`${i}`);
    }
}


module.exports.help = {
    name: `досчитай`
}