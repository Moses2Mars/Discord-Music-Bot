
const Discord = require('discord.js');
const client = new Discord.Client();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['CommandHandler', 'EventHandler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

/* login token required here */
client.login('');
