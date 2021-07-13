"use strict";
const { getRandomFromArray } = require('../helper/utils.js');

module.exports.run = async (client, msg, args) => {
    msg.reply("чекай мой статус");
    await new Promise(resolve => setTimeout(resolve, 2000));
    client.user.setPresence({ activity: { name: "бам" } });
}

module.exports.help = {
    name: `фокус`
}