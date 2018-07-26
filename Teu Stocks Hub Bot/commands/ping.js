const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    const m = await message.channel.send("Checking...");
    const pingEmbed = new Discord.RichEmbed()
    .setTitle("Pinged!")
    .setDescription(`:ping_pong:\nTime Taked: **${m.createdTimestamp - message.createdTimestamp}**MS\nLatency: **${Math.round(client.ping)}**Ms`);
    m.edit(pingEmbed);
}

module.exports.help = {
  name: "ping"
}