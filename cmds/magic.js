const { getRandomFromArray } = require('../helper/utils.js');

module.exports.run = async (client, msg, args) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return client.user.setPresence({ activity: { name: "бам" } });
}

module.exports.help = {
    name: `фокус`
}