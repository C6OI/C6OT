const Discord = require('discord.js');
const BlueBird = require('bluebird');
const client = new Discord.Client();
const fs = require('fs-extra');
const child_process = require("child_process");
const { sensitiveHeaders } = require('http2');

client.commands = new Discord.Collection();
//ниже мы пиздим файлы из папки
fs.readdir('./cmds', (err, files) => {
  const js = files.filter(f => f.split('.').pop() == 'js');//короче берем в папке с коммандами только файлы js
  js.forEach((f, i) => {
    let cmd = require(`./cmds/${f}`); 
    client.commands.set(cmd.help.name, cmd);
    //сука на солнце нихуя не видно мне бы сесть в теньке
    // развернись на 180 градусов
    //лол так не удобно но солнца меньше стало
    // я умний
  });
});


const owner = "789524259809525780" // bot owner id here
const logChannel = "863113977844596746"; // console log channel id here



//function restartBot() {
//  child_process.spawn("node", ["main.js"], {detached: true});
//  process.exit();
//}


function log(something) { // вот эта хуета у меня в канал воспроизводит только 'я загрузился'
  client.channels.resolve(logChannel).send(require("util").inspect(something));
}

client.on('ready', () => {
  log(`я родился`);

  client.user.setPresence({ activity: { name: "Minecraft на серверах EEL Worlds" } })
});

client.on('message', async msg => { // так оно же снизу есть врде
  const array = msg.content.split(" ");
  const command = array[0].toLowerCase();
  const args = array.slice(1);
  const cmdfile = client.commands.get(command);
  if(cmdfile) return cmdfile.run(client, msg, args);
});

client.on("message", async msg => {

  if (msg.author.bot) return; // игнорим ботов

  function getRandomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  let x = msg.content.toLowerCase( );
  
  switch (x) {

    case 'ку':
      //msg.reply(getRandomFromArray(responses));

      break

    case 'пока':
      //msg.reply(getRandomFromArray(responses2));

      break

    case 'досчитай до 3':
      for (let i = 1; i <= 3; i++)
        //msg.reply(`${i}`);

      break

    case 'фокус':
      
      break

    case 'хлеп': // тут помощь
      

      break

    case 'restart':
    //  if (msg.author.id !== owner) return;
    //  restartBot();

      break

    case 'лайк': // я еще тут
      // msg.react('👍')

      break

    case 'ржать':
      

      break

      case "адовый фокус":

  break

    default:
      isCommand = false; // если никуда не попали то это типа не команда
      break;
  }
});
client.login('ODU5NzEyNjQ1MjUxMDcyMDAw.YNwryw.DviJk-6QBvOZtg8wRNgjvNoQCP4');