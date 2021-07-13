"use strict";
const { getRandomFromArray } = require('../helper/utils.js')
const responses = [ // ответы на "ку"
  "ку",
  "привет",
  "доброго ранку"
]

module.exports.run = async (client, msg, args) => {
    return msg.reply(getRandomFromArray(responses));
}

module.exports.help = {
    name: `ку`
}