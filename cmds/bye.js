const { getRandomFromArray } = require('../helper/utils.js')
const responses = [ // ответы на "пока"
  "пока",
  "досведанее",
  "удачи"
]

module.exports.run = async (client, msg, args) => {
    return msg.reply(getRandomFromArray(responses));
}

module.exports.help = {
    name: `пока`
}