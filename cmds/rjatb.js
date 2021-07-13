"use strict";
module.exports.run = async (client, msg, args) => {
    await msg.react(':XD:710457045689827328')
    let sentMessage = await msg.channel.send('<:XD:710457045689827328>')
    await sentMessage.react(':XD:710457045689827328')
}
module.exports.help = {
    name: `ржать`
}