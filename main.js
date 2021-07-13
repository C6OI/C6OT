"use strict";

const Discord = require('discord.js');
const fs = require('fs-extra');
const client = new Discord.Client();
const config = require('./helper/config.json');
const token = config.token;

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
}

client.on('ready', () => {
  log(`я родился`);

  client.user.setPresence({ activity: { name: "Minecraft на серверах EEL Worlds" } })
});

client.on('message', async msg => {
  const array = msg.content.split(" ");
  const command = array[0].toLowerCase();
  const args = array.slice(1);
  const cmdfile = client.commands.get(command);

  if (!cmdfile) return;
  try {
    await cmdfile.run(client, msg, args);
  }
  catch (e) {
    log(`<@${msg.author.id}> чепушила: ${e.stack}`);
  }
});

client.login(token);