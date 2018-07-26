const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    message.channel.send(" **The Online Stocks Market**\nOver the past months we've been continuing to develop the concept of the project, and now we've reached our golden point. TSH is an Online Stock Market for Growtopia with widgets to help you in your investments. ARIs (Average Return on Investments) are implemented in the graphs to show what the return value is, he will be your companion in every investment you make here. That's just the glimpse of the whole thing! LET's GO and INVEST!");
}

module.exports.help = {
  name: "tsh"
}