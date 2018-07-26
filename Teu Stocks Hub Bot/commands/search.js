const Discord = require("discord.js");
const snekfetch = require("snekfetch");
 
module.exports.run = async (client, message, args) => {
  if(!args[0])
  return message.channel.send("Please specify an item to search, please be exact.");
  let aru = args.slice(0).join(" ");
  let searchQuery = args.slice(0).join("%20");
  let api = `https://teustockshub.ga/info.php?item=${searchQuery}`;
 
  await snekfetch.get(api).then(r => {
    const body = r.body;
    let exist = body.exists;
   
    if(exist === false) {
      message.reply(`The item **'${aru}'** does not exist, try again get the name of the items via "t.matches <itemname>"!`);
      return;
      }
     
      let itemname = body.item;
      let prefix = body.prefix;
      let rate = body.rate;
      let ret = body.return;
      let status = body.status;
      let trend = body.trend;
      let editor = body.editor;
      let image = body.icon;
 
      const itemEmbed = new Discord.RichEmbed()
      .setTitle(itemname)
      .setColor("#4286f4")
      .setThumbnail(`${image}`)
      .addField(`Profit:`, `${ret} WLs`)
      .addField(`Rate:`, `${prefix}${rate}%`)
      .addField("Status:", `${status}`)
      .addField("Trend Status:", `${trend}`)
      .addField("Editor:", `Last edited by **${editor}**`)
      .addField("Links:", `[Guide](https://www.growtopiagame.com/forums/showthread.php?504879-Teu-Stocks-Hub-How-to-use-it)\n[Website Page](https://teustockshub.ga/items.php?name=${searchQuery})\n[Price](https://www.growconomy.net/history.php?item=${searchQuery})`)
      .setTimestamp();
      message.channel.send(itemEmbed);
    });
 
 
     
}
 
module.exports.help = {
  name: "search"
}