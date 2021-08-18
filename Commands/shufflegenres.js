const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

//Global queue for your bot. Every server will have a key and value pair in this map. { guild.id, queue_constructor{} }
const queue = new Map();

module.exports = {
    name: 'All Genres',
    aliases: ['jazz','rock','rap','leave','skip'], 
    cooldown: 0,
    description: 'DJ Peppa Pig',
    async execute(message,args, cmd, client, Discord){


        //Checking for the voicechannel and permissions

        const voice_channel = message.member.voice.channel;
        if (!voice_channel) return message.channel.send("Bruh, you ain't even in a voice channel");
    
        const permissions = voice_channel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) 
        return message.channel.send('You dont have the correct permissions');
        if (!permissions.has('SPEAK')) 
        return message.channel.send('You dont have the correct permissions');

        //This is our server queue. We are getting this server queue from the global queue.
        const server_queue = queue.get(message.guild.id);

        //If the user has used the play command
        if (cmd === 'jazz'){

            let song = {};
            
            //If the first argument is a link. 
            if (ytdl.validateURL(args[0])) {
                message.channel.send("Try using !play for that.");
                return;
            } else {
                //If there was no link, we use keywords to search for a video. Set the song object to have two keys. Title and URl.
               
                const artists = ["Abbey Lincoln","Albert Ayler","Art Blakey","Art Tatum","Artie Shaw", "Astrud Gilberto","Bennie Golson",
                "Benny Goodman","Betty Carter","Bill Evans","Billie Holiday","Bobby Wellins","Bud Powell","Buddy Rich",
                "Cannonball Adderley","Carla Bley","Carmen Mcrae","Cecil Taylor","Charles Lloyd","Charles Mingus","Charlie Haden",
                "Charlie Parker","Chet Baker","Chick Corea","Chick Webb","Clifford Brown","Coleman Hawkins","Count Basie",
                "Dave Brubeck","Dianne Reeves","Dizzy Gillespie","Django Reinhardt","Donald Byrd","Duke Ellington","Ella Fitzgerald",
                "Elvin Jones","Erroll Garner","Esbjörn Svensson","Evan Parker","Fats Navarro","Fats Waller","Fletcher Henderson",
                "Frank Sinatra","Gerry Mulligan","Gil Evans","Glenn Miller","Hank Mobley","Herbie Hancock","Horace Silver",
                "Jack Teagarden","Jackie McLean","James Carter","Jelly Roll Morton","Jimmy Giuffre","John Coltrane","John McLaughlin",
                "Johnny Dodds","Keith Jarrett","Kokoroko","Lee Morgan","Lester Young","Louis Armstrong","Mary Lou Williams","Max Roach",
                "Miles Davis","Modern Jazz Quartet","Nat King Cole","Nina Simone","Ornette Coleman","Pat Metheny","Rahsaan Roland Kirk",
                "Ron Carter","Ron Carter","Sarah Vaughan","Sidney Bechet","Sonny Rollins","Stan Getz","Stan Kenton","Thelonious Monk",
                "Wayne Shorter","Woody Herman","Wynton Marsalis"];

                const words = ["song", "solo", "album", "live", "full"];

                const randWordNum = Math.floor(Math.random() * words.length+1);
                const randWord = words[randWordNum];


                const randomNum = Math.floor(Math.random() * artists.length+1);
                const randomVideo = Math.floor(Math.random() * 10);
                
                const randArtist = artists[randomNum];

                    const video_finder = async (query) =>{
                    const video_result = await ytSearch(query);
                    return (video_result.videos.length > 1) ? video_result.videos[randomVideo] : null;
                }

                const video = await video_finder(randArtist+' '+randWord);
                console.log(randArtist+" "+randWord+" "+randomVideo);
                
                if (video){
                    song = { title: video.title, url: video.url }
                    console.log(song);
                } else {
                     message.channel.send("Couldn't find the video m8");
                }
            }

            //If the server queue does not exist (which doesn't for the first video queued) then create a constructor to be added to our global queue.
            if (!server_queue){

                const queue_constructor = {
                    voice_channel: voice_channel,
                    text_channel: message.channel,
                    connection: null,
                    songs: []
                }
                
                //Add our key and value pair into the global queue. We then use this to get our server queue.
                queue.set(message.guild.id, queue_constructor);
                queue_constructor.songs.push(song);
    
                //Establish a connection and play the song with the vide_player function.
                try {
                    const connection = await voice_channel.join();
                    queue_constructor.connection = connection;
                    video_player(message.guild, queue_constructor.songs[0]);
                } catch (err) {
                    queue.delete(message.guild.id);
                    message.channel.send('There was an error connecting!');
                    throw err;
                }
            } else{
                server_queue.songs.push(song);
                return message.channel.send(` :pig: **${song.title}** added to queue! :pig: `);
            }
        }
        else if (cmd === 'rock'){

            let song = {};
            
            //If the first argument is a link. 
            if (ytdl.validateURL(args[0])) {
                message.channel.send("Try using !play for that.");
                return;
            } else {
                //If there was no link, we use keywords to search for a video. Set the song object to have two keys. Title and URl.
               
                const artists = ["666mrdoom Album","acdc","Aerosmith","Alan Parsons Project","Alterbridge","Amy Winehouse","anathema","andy timmons",
                "antimatter band","apocalypse band","arctic monkeys","Athlete Band","Avenged Sevenfold","Black Sabbath","blackfield","Black Stone Cherry",
                "bruce springsteen","buckethead","Camel band","carlos santana","Chris Cornell","Chris Squire","chuck berry","Conception band","Corpo-Mente","david bowie",
                "david gilmour","Deep purple","Dream Theater","dreaming madmen","Emerson", "Lake and Palmer","eric clapton","falling in reverse",
                "fleetwood mac","Foo Fighters","frank zappa","Funkadelic","Genesis","Gentle Giant","Ghost","Godspeed You Black Emperor full album",
                "green day","greta van fleet","guns and roses","HIM band","Intwine Band","jay wud","jeff beck","jeff buckley","jeff healey","Jethro Tull",
                "Jimi Hendrix","Joe Bonamassa","Johnny Cash","Jonathan Davis","Kasabian band","Katatonia","Kensington band","King Crimson","Krobak band","kwoon",
                "Kyuss","led zeppelin","Leonado Ortiz Album","Leprous","Linkin Park","London Grammar Band","Marc Bolan","Mars Volta","Mastodon",
                "megadeth","Meshuggah","Morphy Album","Muse","Myles Kenedy","Mystery band","Neil Young","Nick Johnson","Nine Inch Nails",
                "Orphaned Land","Ozzy Osbourne","Paramore Band","Pearl Jam","Pendragon band","Phil Collins","pineapple thief","pink floyd","Plini","porcupine tree",
                "Prog Kidd Album","Prog On Album","Queen Band","Queens Of The Stone Age","Radiohead","riverside","rock freaks albums","Rory Gallagher","Serj Tankian",
                "Seth Chapla","Sigur Ros","sixx:AM","skillet","Slash","sleeping pulse","slowdive band","soundgarden","Spock's Beard","Steve Vai",
                "steven wilson","Stratovarius","SuperTramp","System of a down","tash sultana","Tears for Fears","tenacious d","TesseracT Band",
                "The Dear Hunter","The Eagles","the parlor mob band","the strokes","Thin Lizzy","Thirty Seconds To Mars","Thrice Band","Tool",
                "Tracy Chapman","Transatlantic","Van Halen","Victor Wooten","Vola Band","whoopie cat band","Woods Of Ypres","Yes",
                "Yogi Lang","Younger Brother Band"];

                const words = ["live","HQ","studio","lyrics","album", "song", "full", "video"];

                const randWordNum = Math.floor(Math.random() * words.length);
                const randWord = words[randWordNum];


                const randomNum = Math.floor(Math.random() * artists.length);
                const randomVideo = Math.floor(Math.random() * 13);
                
                const randArtist = artists[randomNum];

                const video_finder = async (query) =>{
                    const video_result = await ytSearch(query);
                    return (video_result.videos.length > 1) ? video_result.videos[randomVideo] : null;
                }

                const video = await video_finder(randArtist+' '+randWord);
                console.log(randArtist+" "+randWord+" "+randomVideo);
                
                if (video){
                    song = { title: video.title, url: video.url }
                    console.log(song);
                } else {
                     message.channel.send("Couldn't find the video m8");
                }
            }

            //If the server queue does not exist (which doesn't for the first video queued) then create a constructor to be added to our global queue.
            if (!server_queue){

                const queue_constructor = {
                    voice_channel: voice_channel,
                    text_channel: message.channel,
                    connection: null,
                    songs: []
                }
                
                //Add our key and value pair into the global queue. We then use this to get our server queue.
                queue.set(message.guild.id, queue_constructor);
                queue_constructor.songs.push(song);
    
                //Establish a connection and play the song with the vide_player function.
                try {
                    const connection = await voice_channel.join();
                    queue_constructor.connection = connection;
                    video_player(message.guild, queue_constructor.songs[0]);
                } catch (err) {
                    queue.delete(message.guild.id);
                    message.channel.send('There was an error connecting!');
                    throw err;
                }
            } else{
                server_queue.songs.push(song);
                return message.channel.send(` :pig: **${song.title}** added to queue! :pig: `);
            }
        }else if (cmd === 'rap'){

            let song = {};
            
            //If the first argument is a link. 
            if (ytdl.validateURL(args[0])) {
                message.channel.send("Try using !play for that.");
                return;
            } else {
                //If there was no link, we use keywords to search for a video. Set the song object to have two keys. Title and URl.
               
                const artists = [""];

                const words = ["Full song","live","HQ","studio","lyrics","album", "song", "full", "video"];

                const randWordNum = Math.floor(Math.random() * words.length);
                const randWord = words[randWordNum];


                const randomNum = Math.floor(Math.random() * artists.length);
                const randomVideo = Math.floor(Math.random() * 13);
                
                const randArtist = artists[randomNum];

                    const video_finder = async (query) =>{
                    const video_result = await ytSearch(query);
                    return (video_result.videos.length > 1) ? video_result.videos[randomVideo] : null;
                }
                console.log(randArtist+" "+randWord);
                const video = await video_finder(randArtist+' '+randWord);

                if (video){
                    song = { title: video.title, url: video.url }
                    console.log(song);
                } else {
                     message.channel.send("Couldn't find the video m8");
                }
            }

            //If the server queue does not exist (which doesn't for the first video queued) then create a constructor to be added to our global queue.
            if (!server_queue){

                const queue_constructor = {
                    voice_channel: voice_channel,
                    text_channel: message.channel,
                    connection: null,
                    songs: []
                }
                
                //Add our key and value pair into the global queue. We then use this to get our server queue.
                queue.set(message.guild.id, queue_constructor);
                queue_constructor.songs.push(song);
    
                //Establish a connection and play the song with the vide_player function.
                try {
                    const connection = await voice_channel.join();
                    queue_constructor.connection = connection;
                    video_player(message.guild, queue_constructor.songs[0]);
                } catch (err) {
                    queue.delete(message.guild.id);
                    message.channel.send('There was an error connecting!');
                    throw err;
                }
            } else{
                server_queue.songs.push(song);
                return message.channel.send(` :pig: **${song.title}** added to queue! :pig: `);
            }
        }

        else if(cmd === 'skip') skip_song(message, server_queue);
        else if(cmd === 'leave') leaveVC(message, server_queue);
    }
    
}

const video_player = async (guild, song) => {
    const song_queue = queue.get(guild.id);

    //If no song is left in the server queue. Leave the voice channel and delete the key and value pair from the global queue.
    if (!song) {
        song_queue.voice_channel.leave();
        queue.delete(guild.id);
        return;
    }
    const stream = ytdl(song.url, { filter: 'audioonly' });
    song_queue.connection.play(stream, { seek: 0, volume: 0.5 })
    .on('finish', () => {
        song_queue.songs.shift();
        video_player(guild, song_queue.songs[0]);
    });
    await song_queue.text_channel.send(`:notes: Now playing **${song.title}** :notes:`)
}

const skip_song = (message, server_queue) => {
    if (!message.member.voice.channel) 
    return message.channel.send('m8, you have to be in the voice channel to skip that song.');
    if(!server_queue){
        return message.channel.send(`There are no songs in queue`);
    }
    server_queue.connection.dispatcher.end();
}

const leaveVC = (message, server_queue) => {
    if (!message.member.voice.channel) return message.channel.send("BRUH YOU'RE NOT EVEN IN THE FUCKING VOICE CHANNEL");
    server_queue.songs = [];
    server_queue.connection.dispatcher.end();
}