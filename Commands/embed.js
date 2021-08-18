module.exports = {
    name: 'embed',
    description: "this is an embed",
    execute(message,args, cmd, client, Discord){
        //this is where you put all the command things
        
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#fc9f8a')
        .setTitle('Oink Oink')
        .setURL('https://www.youtube.com/channel/UCAVI_ctLToTelUJLtIy6ZJg')
        .setAuthor('Daily Reminder: ')
        .setDescription("Subscribe to FJL or i'll pop a cap in yo ass")
        .setThumbnail('https://i.imgur.com/E2I6U40.png')
        .addFields(
            { name: 'sabacascribe to FJL', value: 'Press "Oink Oink" ', },
            { name: '\u200B', value: '\u200B' }, //this could be space
            { name: 'Slap like on ALL videos', value:'requiered ', inline: true },
            { name: 'Comment your favorite moments', inline: false },
            { name: '\u200B', value: '\u200B' }
        )
        .setTimestamp();


        message.channel.send(newEmbed);
    }

}