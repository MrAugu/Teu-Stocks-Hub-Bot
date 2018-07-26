const Discord = require("discord.js");
const snekfetch = require("snekfetch");
 
module.exports.run = async (client, message, args) => {
  if(!args[0])
  return message.channel.send("Please specify an item to search, please be exact.");
  let searchQuery = args.slice(0).join("%20");
  let api = `https://teustockshub.ga/match.php?item=${searchQuery}`;
 
  await snekfetch.get(api).then(r => {
    const body = r.body;
    let results = body.results;
    let exists = body.exists
   
    if(exists === false) {
      message.reply(`No item matched to your search!`);
      return;
    }

    if(results > 20) {
        message.channel.send("Oops, **20+** items were found, please be more exact.");
        return;
    }

    const theitems = body.items;
    const items = theitems.join("\n");

    const matchesEmbed = new Discord.RichEmbed()
    .setTitle(`${results} matches found:`)
    .setDescription(`${items}`)
    .setTimestamp();
    message.channel.send(matchesEmbed);
    });
 
 
     
}
 
module.exports.help = {
  name: "matches"
}