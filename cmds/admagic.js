"use strict";
// эта команда очень костыльная
module.exports.run = async (client, msg, args) => {
  if(args[0] != 'фокус') return;
  msg.channel.send("АДOВЫЙ ФОКУС")
  try {
    await msg.member.ban()
  }
  catch (e) {
    await msg.channel.send("БЛЯ ФОКУС НЕ УДАЛСЯ")
    throw e;
  }
  return
}

module.exports.help = {
  name: `адовый`
}

