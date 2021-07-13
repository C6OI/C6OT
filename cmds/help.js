"use strict";
const { getRandomFromArray } = require('../helper/utils.js');

module.exports.run = async (client, msg, args) => {
    return msg.reply("команды:\n" + client.commands.map(x => x.help.name).join("\n")); // оно не будет нормально выводить команду "адовый фокус" и "досчитай до" потому что они сделаны на костылях
}

module.exports.help = {
    name: `хлеп`
}