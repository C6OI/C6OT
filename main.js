"use strict";

const Discord = require('discord.js');
const fs = require('fs-extra');
const { connect } = require('http2');
const client = new Discord.Client();
const config = require('./helper/config.json');
const token = config.token;
const { getRandomFromArray } = require('./helper/utils.js')
const okResponses = require("./helper/responses.js").ok;

client.commands = new Discord.Collection();
// ниже мы пиздим файлы из папки
fs.readdir('./cmds', (err, files) => {
  const js = files.filter(f => f.split('.').pop() == 'js'); // короче берем в папке с коммандами только файлы js
  js.forEach((f, i) => {
    let cmd = require(`./cmds/${f}`);
    client.commands.set(cmd.help.name, cmd);
  });
});
const logChannel = "863113977844596746"; // console log channel id here

// эта хуета и будет выводить если что
// log(/* сюда текст */);
function log(something) {
  client.channels.resolve(logChannel).send(require("util").inspect(something));
  console.log(something);
}

client.on('ready', () => {
  log(`я родился`);
  client.user.setPresence({ activity: { name: "Minecraft на серверах EEL Worlds" } })
});

client.on('message', async msg => {
  if (msg.author.bot) return;
  const array = msg.content.split(" ");
  const command = array[0].toLowerCase();
  const args = array.slice(1);
  const cmdfile = client.commands.get(command);

  if (msg.content.endsWith("ок")) {
    await msg.channel.send(getRandomFromArray(okResponses)) 
    }

  if (!cmdfile) return;
  try {
    await cmdfile.run(client, msg, args);
  }
  catch (e) {
    log(`${msg.author} чепушила: ${e.stack}`);
  }
});

client.login(token);