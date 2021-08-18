/*

const commandFiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./Commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
console.log('Peppa is Online!');
});

client.on('message', message =>{
    //if the message sent doesn't start with the prefix, do nothing.
if(!message.content.startsWith(prefix) || message.author.bot)
return;
// this splices (takes away empty space) the message
const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();

if(command == 'poke'){
    client.commands.get('ping').execute(message, args);
}else if(command == 'embed'){
        client.commands.get('embed').execute(message, args, Discord);
}else if(command == 'help'){
    client.commands.get('help').execute(message, args, Discord);
}else if(command == 'play'){
    client.commands.get('play').execute(message, args);
}else{
    message.channel.send("Damn baby, something ain't right");
}

}); */
