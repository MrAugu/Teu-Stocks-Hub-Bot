const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    const helpEmbed = new Discord.RichEmbed()
    .setTitle("There are valid commands:")
    .setDescription("• t.help → Gives a list of valid commands.\n• t.tsh → Defines Teu Stocks Hub\n• t.search → Searches for item you want from TSH's database and gives you informations.\n• t.matches → Not sure on exactly item name? Try search it with t.matches <item>, first.\n• t.ping → Ping the bot.")
    .setTimestamp();
    message.channel.send(helpEmbed);
}

module.exports.help = {
  name: "help"
}