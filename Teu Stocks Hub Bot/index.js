const Discord = require ("discord.js");
const fs = require("fs");
const client = new Discord.Client({disableEveryone: true});
client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
      console.log("No commands has been detected!");
      return;
    }

    jsfile.forEach((f,) => {
      let props = require(`./commands/${f}`);
      console.log(`${f} has been loaded!`);
      client.commands.set(props.help.name, props);
    });

  });

  client.on("ready", async () => {
      await client.user.setActivity(`t.help | Now in ${client.guilds.size} servers`, { type: "PLAYING" });
      await client.user.setStatus("online");
      console.log("CONECTED!");
  });

  client.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = "t.";

   if(!message.content.startsWith(prefix)) return;

   let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message,args);
    console.log("Command Trigerred.");

  });

client.login("TOKEN");
