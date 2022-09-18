const fs = require('fs');

module.exports = (client, Discord) => {
    //get all command files (making sure they went with .js)
    const command_files = fs.readdirSync(`./Commands/`).filter(file => file.endsWith('.js'));

    // for each command file
    for(const file of command_files){

        // get the file
        const command = require(`../Commands/${file}`);

        // if the file has a name ( let's take "ping" as an example )
        if(command.name){

            // create a command on the client-side called "ping" ( as per the example above )
            client.commands.set(command.name, command);

        }
    }

} 