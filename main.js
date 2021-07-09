const Discord = require('discord.js');
const client = new Discord.Client();
const child_process = require("child_process");
const { sensitiveHeaders } = require('http2');

// я думаю сделать полноценный rich presence будет сложновато да?
// я сделал cmd по умолчанию

const owner = "789524259809525780" // bot owner id here
const logChannel = "863113977844596746"; // console log channel id here

const responses = [
  "ку",
  "привет",
  "доброго ранку"
]

const responses2 = [
  "пока",
  "досведанее",
  "удачи"
]

function restartBot() {
  child_process.spawn("node", ["main.js"], {detached: true});
  process.exit();
}

function log(something) {
  client.channels.resolve(logChannel).send(require("util").inspect(something));
}

client.on('ready', () => {
  log(`я загрузился`);

  client.user.setPresence({ activity: { name: "Minecraft на серверах EEL Worlds" } })
});

client.on("message", async msg => {

  if (msg.author.bot) return; // игнорим ботов

  function getRandomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  let x = msg.content.toLowerCase( );
  
  switch (x) {

    case 'ку':
      msg.reply(getRandomFromArray(responses));

      break

    case 'пока':
      msg.reply(getRandomFromArray(responses2));

      break

    case 'досчитай до 3':
      for (let i = 1; i <= 3; i++)
        msg.reply(`${i}`);

      break

    case 'фокус':
      msg.reply('посмотри в мой статус')
      await new Promise(resolve => setTimeout(resolve, 1000));
      client.user.setPresence({ activity: { name: "бам" } })
      break

    case 'хлеп':
      msg.reply(`команды:\nку\nпока\nдосчитай до 3\nфокус\nлайк\nржать\nадовый фокус (внимание без шуток оно вас забанит за это я виноват не буду я вас предупредил)`);

      break

    case 'restart':
      if (msg.author.id !== owner) return;
      restartBot();

      break

    case 'лайк':
      msg.react('👍')

      break

    case 'ржать':
      msg.react('<:XD:710457045689827328>');
      msg.channel.send('<:XD:710457045689827328>').then(sentMessage => {
        sentMessage.react('<:XD:710457045689827328>');
      })

      break

      case "адовый фокус":
  msg.channel.send("АДОВЫЙ ФОКУС")
  msg.member.ban().catch(()=>{msg.channel.send("БЛЯ ФОКУС НЕ УДАЛСЯ")})

  break

    default:
      isCommand = false; // если никуда не попали то это типа не команда
      break;
  }
});
client.login('ODU5NzEyNjQ1MjUxMDcyMDAw.YNwryw.L2aWsQ1aP4DGmUuE3KhHNR8CrWc');