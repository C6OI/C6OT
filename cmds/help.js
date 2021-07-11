const { getRandomFromArray } = require('../helper/utils.js');

module.exports.run = async (client, msg, args) => {
    return msg.reply(`команды:\nку\nпока\nдосчитай до (ваше число)\nфокус\nлайк\nржать\nадовый фокус (внимание без шуток оно вас забанит за это я виноват не буду я вас предупредил)`);
}

module.exports.help = {
    name: `хлеп`
}