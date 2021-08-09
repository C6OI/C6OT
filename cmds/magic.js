"use strict";
const { getRandomFromArray } = require('../helper/utils.js');
const BlueBird = require('bluebird');

module.exports.run = async (client, msg, args) => {
    msg.reply("чекай мой статус");
    await new Promise(resolve => setTimeout(resolve, 2000));
    client.user.setPresence({ activity: { name: "хочу срать" } });
    await BlueBird.delay(60000)
    client.user.setPresence({ activity: { name: "Minecraft на серверах EEL Worlds" } })
}

module.exports.help = {
    name: `фокус`
}