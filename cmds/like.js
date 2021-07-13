"use strict";
const { getRandomFromArray } = require('../helper/utils.js');

module.exports.run = async (client, msg, args) => {
    return msg.react('👍');
}

module.exports.help = {
    name: `лайк`
}