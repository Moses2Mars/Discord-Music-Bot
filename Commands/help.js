module.exports = {
    name: 'help',
    description: "Here are all my commands!",
    execute(message,args, cmd, client, Discord){        
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#EC3CE6')
        .setTitle('Whadup Bitches, Here Are My Commands!')
        .setAuthor('Peppa The MotherFucking Pig')
        .setDescription("You can either choose a song or i can play a random one for you.")
        .setThumbnail('https://i.imgur.com/jTdQKVL.jpg')
        .addFields(

            { name: '\u200B', value: '\u200B' },
            { name: '!ping', value: "Check to see if i'm alive.", },
            { name: '!jazz', value:'shuffle a jazz song (90% success rate) ', inline: false },
            { name: '!rock', value:'shuffle a rock song (90% success rate) ', inline: false },
            { name: '!rap', value:'shuffle a rap song (90% success rate) ', inline: false },
            { name: '!play', value: "Give me a song name or a youtube link and i'll'play it for you.", inline: false },
            { name: '!skip', value: "Skips a song.", inline: false },
            { name: '!leave', value: "I'll leave the voice chat.", inline: false }
            
        );
        
        message.channel.send(newEmbed);
    }

}