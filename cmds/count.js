const { getRandomFromArray } = require('../helper/utils.js')


module.exports.run = async (client, msg, args) => {
    let i;
    if(args[0] != 'до') return;
    for(let i = 1; i <= args[1]; i++) 
    await Bluebird.delay(1000)
    msg.reply(`${i}`);
}

module.exports.help = {
    name: `досчитай`
}