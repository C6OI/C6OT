"use strict";
const owner = "789524259809525780" // bot owner id here
const child_process = require("child_process");

function restartBot() {
    child_process.spawn("node", ["main.js"], {detached: true});
    process.exit();
  }

module.exports.run = async (client, msg, args) => {
    if (msg.author.id !== owner) return;
      msg.reply(`перезагружаюсь...`);
      await new Promise(resolve => setTimeout(resolve, 1000));
      restartBot();
}

module.exports.help = {
    name: `restart`
}