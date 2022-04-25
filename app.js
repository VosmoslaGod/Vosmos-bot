const { Client, Intents, Collection, Discord } = require("discord.js");
const fs = require("fs");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
const config = require("./config.json");
// We also need to make sure we're attaching the config to the CLIENT so it's accessible everywhere!
client.config = config;
client.commands = new Collection();

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}, monitering ${client.guilds.cache.size} servers!`)
    client.user.setActivity(`${client.guilds.cache.size} servers`, { type: "WATCHING"})
        });

        setInterval(function() {
/*           client.user.setActivity(`${client.guilds.cache.size} servers`, { type: "WATCHING"}) */
        }, 1000)
      
const events = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
for (const file of events) {
  const eventName = file.split(".")[0];
  const event = require(`./events/${file}`);
  client.on(eventName, event.bind(null, client));
}

const commands = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of commands) {
  const commandName = file.split(".")[0];
  const command = require(`./commands/${file}`);

  console.log(`Attempting to load command ${commandName}`);
  client.commands.set(commandName, command, require(`discord.js`));
}

client.on('guildCreate', guild => {
    var config = require(`./config.json`)
    const { MessageEmbed } = require('discord.js');
    const embed9 = new MessageEmbed()
    .setTitle("Say hello to Vosmobot!")
    .setColor(15921649)
    .setDescription(`Vosmobot is a simple discord utility bot based on discord.js. type ">help" for a list of all basic commands.`)
    .setFooter(`Vosmos is not responsible for any chaos or discord this bot create on your server. Use at your own risk`)
    .addFields(
        { name: 'Current servers', value: `${client.guilds.cache.size}`, inline: true },
        { name: 'Owner ID', value: `${config.allowed}`, inline: true },
        { name: 'Commands', value: `ping, help, eval, reload, info, kick, ban, img`, inline: true },
    )
    
    guild.systemChannel.send({embeds: [embed9]})
  });


client.login(config.token);