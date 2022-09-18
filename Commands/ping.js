module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message,args, cmd, client, Discord){
        // when user types !ping, it's to check if peppa is online or lagging
        // so we just send a kind "i'm online" message
        message.channel.send("I'M ONLLIINEEEE!!");
    }

}