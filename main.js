
const Discord = require('discord.js');
const client = new Discord.Client();
const fs= require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['CommandHandler', 'EventHandler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})


client.login('ODcyMTMwNzczNTczMDc1MDA1.YQlZEw.397bAo5eB0jN2PRjiVTr4Ec7blc');
