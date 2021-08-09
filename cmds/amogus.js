"use strict";
const BlueBird = require('bluebird');

module.exports.run = async (client, msg, args) => {
    msg.channel.send("команда отключена навсегда потому что бобр дибил!!!")
}

module.exports.help = {
    name: "амогус"
}