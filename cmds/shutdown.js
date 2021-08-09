"use strict";
const owner = "789524259809525780" // bot owner id here
const BlueBird = require('bluebird');

module.exports.run = async (client, msg) => {
    if (msg.author.id !== owner) return;
        msg.reply("онет...")
        await BlueBird.delay(600)
        process.exit();
}

module.exports.help = {
    name: "shutdown"
}