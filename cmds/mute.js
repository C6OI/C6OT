"use strict";

const Discord = require("discord.js");
/**
 * @param {Discord.Client} client
 * @param {Discord.Message} msg
 * @param {string[]} args 
 */
module.exports.run = async (client, msg, args) => {
    /** @type {Discord.Role} */
    let muteRole;
    // ищем роль мута ака шаг 1
    for (let role of msg.guild.roles.cache.values()) {
        if (role.name === "мут") {
            muteRole = role;
            break;
        }
    }
    await msg.channel.send(muteRole?.toString() ?? "ты идиот или да мут роли тут нет!!!!!!");

    // создаем новую ака шаг 2
    if (!muteRole) {
        try {
            await msg.guild.roles.create({name: "мут"}); // мут роль создается хреново если что
            await msg.channel.send("ок я создал")
        }
        catch (e) {
            await msg.channel.send("и как тебе я ее блять создам")
        }
    }

    /* TODO: 1 чекаем есть ли роль мута
    2 создаем роль мута если нету
    3 смотрим есть ли право управления участниками у человека который хочет замутить или же если это овнер бота
    4 если есть право - мутим человека */
}

module.exports.help = {
    name: "мут"
}