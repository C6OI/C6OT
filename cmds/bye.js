"use strict";
const { getRandomFromArray } = require('../helper/utils.js')
const responses = [ // ответы на "пока"
  "пока",
  "досведанее",
  "удачи"
]
const { Guild } = require('discord.js');

module.exports.run = async (client, msg, args) => {
    return msg.reply(getRandomFromArray(responses));
}

module.exports.help = {
    name: `пока`
}