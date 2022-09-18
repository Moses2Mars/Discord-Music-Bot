const fs = require('fs');

// events are basically commands but before they're executed.
// in /events/guild/message.js, we are specifying what the prefix should be, here it's "!"
// and then we are making it execute the command based on what they typed after the prefix

module.exports = (client, Discord) => {
    const load_dir = (dirs) => {
        // get all event files
        const event_files = fs.readdirSync(`./events/${dirs}`).filter(file => file.endsWith('.js'));

        for(const file of event_files){
            // read the event file
            const event = require(`../events/${dirs}/${file}`);

            // get the event name
            const event_name = file.split('.')[0];
            
            //binding events client-side
            client.on(event_name, event.bind(null, Discord, client));
        }

    }

    ['client', 'guild'].forEach(e => load_dir(e));
}