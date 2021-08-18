module.exports = {
    name: 'help',
    description: "Here are all my commands!",
    execute(message,args, cmd, client, Discord){
        //this is where you put all the command things
        
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#EC3CE6')
        .setTitle('Oink Oink, Here Are My Commands!')
        .setAuthor('Peppa The MotherFucking Pig')
        .setDescription("You can either choose a song or i can play a random one for you.")
        .setThumbnail('https://i.imgur.com/jTdQKVL.jpg')
        .addFields(

            { name: '\u200B', value: '\u200B' },
            { name: '!ping', value: "Check to see if i'm ok.", },
            { name: '!genres', value:'Check what genres i offer. ', inline: false },
            { name: '!play', value: "Give me a song name/link and i can play it for you.", inline: false },
            { name: '!skip', value: "Skips a song.", inline: false },
            { name: '!leave', value: "I'll leave the voice chat.", inline: false }
            
        );
        
        message.channel.send(newEmbed);
    }

}