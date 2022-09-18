const ytdl = require("ytdl-core");
const ytSearch = require("yt-search");
const { ReactionUserManager } = require("discord.js");

//Global queue for your bot. Every server will have a key and value pair in this map. { guild.id, queue_constructor{} }
const queue = new Map();

module.exports = {
  name: "All Genres",
  aliases: ["jazz", "rock", "rap", "leave", "skip", "play"],
  cooldown: 0,
  description: "DJ Robot",

  async execute(message, args, cmd, client, Discord) {

    //Checking for the voicechannel and permissions
    const voice_channel = message.member.voice.channel;

    // if person doesn't have enough permissions, don't continue with the execution
    if(!checkVoiceChannelPermissions(voice_channel, message)) return

    //This is our server queue. We are getting this server queue from the global queue.
    const server_queue = queue.get(message.guild.id);

    let video = ''

    //If the user has used the play command
    if (cmd === "jazz") {
      //If the first argument is a link.
      if (ytdl.validateURL(args[0])) {
        message.channel.send("Try using !play for that.");
        return;
      } else {

        // artists
        let artists = [
          "Abbey Lincoln",
          "Albert Ayler",
          "Art Blakey",
          "Art Tatum",
          "Artie Shaw",
          "Astrud Gilberto",
          "Bennie Golson",
          "Benny Goodman",
          "Betty Carter",
          "Bill Evans",
          "Billie Holiday",
          "Bobby Wellins",
          "Bud Powell",
          "Buddy Rich",
          "Cannonball Adderley",
          "Carla Bley",
          "Carmen Mcrae",
          "Cecil Taylor",
          "Charles Lloyd",
          "Charles Mingus",
          "Charlie Haden",
          "Charlie Parker",
          "Chet Baker",
          "Chick Corea",
          "Chick Webb",
          "Clifford Brown",
          "Coleman Hawkins",
          "Count Basie",
          "Dave Brubeck",
          "Dianne Reeves",
          "Dizzy Gillespie",
          "Django Reinhardt",
          "Donald Byrd",
          "Duke Ellington",
          "Ella Fitzgerald",
          "Elvin Jones",
          "Erroll Garner",
          "Esbjörn Svensson",
          "Evan Parker",
          "Fats Navarro",
          "Fats Waller",
          "Fletcher Henderson",
          "Frank Sinatra",
          "Gerry Mulligan",
          "Gil Evans",
          "Glenn Miller",
          "Hank Mobley",
          "Herbie Hancock",
          "Horace Silver",
          "Jack Teagarden",
          "Jackie McLean",
          "James Carter",
          "Jelly Roll Morton",
          "Jimmy Giuffre",
          "John Coltrane",
          "John McLaughlin",
          "Johnny Dodds",
          "Keith Jarrett",
          "Kokoroko",
          "Lee Morgan",
          "Lester Young",
          "Louis Armstrong",
          "Mary Lou Williams",
          "Max Roach",
          "Miles Davis",
          "Modern Jazz Quartet",
          "Nat King Cole",
          "Nina Simone",
          "Ornette Coleman",
          "Pat Metheny",
          "Rahsaan Roland Kirk",
          "Ron Carter",
          "Ron Carter",
          "Sarah Vaughan",
          "Sidney Bechet",
          "Sonny Rollins",
          "Stan Getz",
          "Stan Kenton",
          "Thelonious Monk",
          "Wayne Shorter",
          "Woody Herman",
          "Wynton Marsalis",
        ];

        // key words to search along with the artist name
        let key_words = ["song", "solo", "album", "live", "full"];

        // build a search query that consists of a random artist + a random keyword
        let query = getArtistAndWordSearchQuery(artists, key_words);
        console.log(query);

        // try to find the video with that search query
        video = await findVideo(query);
      }
    } else if (cmd === "rap") {
      //If the first argument is a link.
      if (ytdl.validateURL(args[0])) {
        message.channel.send("Try using !play for that.");
        return;
      } else {
        let artists = [
          "21 savage",
          "2pac",
          "070 shake",
          "Big Daddy Kane",
          "Biggie rapper",
          "Bun B",
          "Chuck D",
          "Common rapper",
          "Danny Brown",
          "Daveed Diggs",
          "Del Tha Funkee Homosapien",
          "Dizzee Rascal",
          "Drake",
          "El-P",
          "Eminem",
          "Eric Sermon",
          "Freddie Gibbs",
          "GZA",
          "Gangsta Boo",
          "Ice cube",
          "Juicy J",
          "KRS-One",
          "LL Cool J",
          "Lauryn Hill",
          "Lil B",
          "Lil Kim",
          "Lil wayne",
          "Lupe Fiasco",
          "MF DOOM",
          "JID",
          "Missy Elliott",
          "Mos Def",
          "ODB rapper",
          "Pharoahe Monch",
          "Pusha T",
          "Q-TIP",
          "Queen Latifah",
          "Raekwon",
          "Rakim",
          "Scarface rapper",
          "Slickrick rapper",
          "Wutang Clan",
          "Andre 3000",
          "Asap ferg",
          "Asap rocky",
          "Big boi rapper",
          "Billy woods",
          "Black thought",
          "Busta rhymes",
          "Chance the rapper",
          "Childish gambino",
          "Dababy rapper",
          "baby keem",
          "Denzel curry",
          "Future rapper",
          "freddie Dredd",
          "ghais guevara",
          "blade brown",
          "finn foxell",
          "ghostface killah",
          "gucci mane",
          "j cole",
          "jay-z",
          "joey badass",
          "joyner lucas",
          "kanye west",
          "kendrick lamar",
          "kid cudi",
          "lil baby",
          "lil dicky",
          "lil uzi vert",
          "logic rap",
          "mac miller",
          "meek mill",
          "mf doom",
          "migos",
          "nas rapper",
          "notorious BIG",
          "post malone",
          "rick ross",
          "tech n9ne",
          "the notorious big",
          "travis scott",
          "tupac shakur",
          "tyler the creator",
          "wiz khalifa",
          "xxxtentacion",
        ];

        let key_words = ["song", "new"];

        let query = getArtistAndWordSearchQuery(artists, key_words);
        console.log(query);

        // try to find the video with that search query
        video = await findVideo(query);

      }
    } else if (cmd === "rock") {

      //If the first argument is a link.
      if (ytdl.validateURL(args[0])) {
        message.channel.send("Try using !play for that.");
        return;
      } else {
        //If there was no link, we use keywords to search for a video. Set the song object to have two keys. Title and URl.

        let artists = [
          "666mrdoom Album",
          "acdc",
          "john mayer",
          "Aerosmith",
          "roger waters",
          "Alan Parsons Project",
          "diablo swing orchestra",
          "rodrigo y gabriella",
          "Alterbridge",
          "Amy Winehouse",
          "anathema",
          "andy timmons",
          "antimatter band",
          "apocalypse band",
          "aphrodite's child band",
          "arctic monkeys",
          "Athlete Band",
          "Avenged Sevenfold",
          "Black Sabbath",
          "blackfield",
          "Black Stone Cherry",
          "beardfish band",
          "bruce springsteen",
          "buckethead",
          "Camel band",
          "carlos santana",
          "caligula's horse",
          "Chris Cornell",
          "Chris Squire",
          "chuck berry",
          "Conception band",
          "Corpo-Mente",
          "david bowie",
          "david gilmour",
          "Deep purple",
          "Dream Theater",
          "dreaming madmen",
          "Emerson",
          "eddie hazel",
          "the flower kings",
          "radiohead",
          "Lake and Palmer",
          "eric clapton",
          "falling in reverse",
          "fleetwood mac",
          "Foo Fighters",
          "frank zappa",
          "Funkadelic",
          "gary moore",
          "Genesis",
          "Gentle Giant",
          "Ghost",
          "Godspeed You Black Emperor full album",
          "green day",
          "greta van fleet",
          "guns and roses",
          "HIM band",
          "Intwine Band",
          "jay wud",
          "jeff beck",
          "jeff buckley",
          "jeff healey",
          "Jethro Tull",
          "Jimi Hendrix",
          "Joe Bonamassa",
          "organ freeman",
          "justin johnson",
          "Johnny Cash",
          "Jonathan Davis",
          "Kasabian band",
          "Katatonia",
          "Kensington band",
          "klaatu band",
          "King Crimson",
          "Krobak band",
          "kwoon",
          "Kyuss",
          "led zeppelin",
          "Leonado Ortiz Album",
          "Leprous",
          "Linkin Park",
          "London Grammar Band",
          "Marc Bolan",
          "Mars Volta",
          "Mastodon",
          "megadeth",
          "Meshuggah",
          "Morphy Album",
          "Plini",
          "Muse",
          "Myles Kenedy",
          "Mystery band",
          "Neil Young",
          "Nick Johnson",
          "Nine Inch Nails",
          "Orphaned Land",
          "Ozzy Osbourne",
          "Paramore Band",
          "Pearl Jam",
          "Pendragon band",
          "Phil Collins",
          "pineapple thief",
          "pink floyd",
          "Plini",
          "porcupine tree",
          "Prog Kidd Album",
          "Prog On Album",
          "Queen Band",
          "Queens Of The Stone Age",
          "Radiohead",
          "riverside",
          "rock freaks albums",
          "Rory Gallagher",
          "Serj Tankian",
          "Seth Chapla",
          "Sigur Ros",
          "sixx:AM",
          "skillet",
          "Slash",
          "sleeping pulse",
          "slowdive band",
          "soundgarden",
          "Spock's Beard",
          "Steve Vai",
          "steven wilson",
          "Stratovarius",
          "SuperTramp",
          "stoned jesus band",
          "System of a down",
          "tash sultana",
          "Tears for Fears",
          "tenacious d",
          "TesseracT Band",
          "The Dear Hunter",
          "The Eagles",
          "the parlor mob band",
          "the strokes",
          "Thin Lizzy",
          "Thirty Seconds To Mars",
          "Thrice Band",
          "Tool",
          "Tracy Chapman",
          "Transatlantic",
          "Van Halen",
          "Victor Wooten",
          "Vola Band",
          "whoopie cat band",
          "Woods Of Ypres",
          "Yes",
          "Yogi Lang",
          "Younger Brother Band",
          "zakk wylde",
        ];

        let key_words = [
          "live",
          "HQ",
          "studio",
          "lyrics",
          "album",
          "song",
          "full",
          "video",
        ];

        let query = getArtistAndWordSearchQuery(artists, key_words);
        console.log(query);

        video = await findVideo(query);
      }
    } else if (cmd === "play") {
      if (!args.length)
        return message.channel.send("Please Specify What You Want To Play");

      let song = {}

      //If the first argument is a link. Set the song object to have two keys. Title and URl.
      if (ytdl.validateURL(args[0])) {
        const song_info = await ytdl.getInfo(args[0]);
        song = { title: song_info.videoDetails.title, url: song_info.videoDetails.video_url };
      } else {
        //If there was no link, we use keywords to search for a video. Set the song object to have two keys. Title and URl.
        const video_finder = async (query) => {
          const video_result = await ytSearch(query);
          return video_result.videos.length > 1 ? video_result.videos[0] : null;
        };

        video = await findVideo(args.join(" "), true);
      }
    } else if (cmd === "skip") skip_song(message, server_queue);
    else if (cmd === "leave") leaveVC(message, server_queue);

    // if we found a video, we define "song" and add it to the queue
    if (video) {
      let song = { title: video.title, url: video.url };
      console.log(song);
      await addSongToQueue(message, song, server_queue);
      return;
    } else {
      return message.channel.send("Couldn't find the video");
    }
    
    async function addSongToQueue(message, song, server_queue) {
      if (!server_queue) {
        const queue_constructor = {
          voice_channel: voice_channel,
          text_channel: message.channel,
          connection: null,
          songs: [],
        };

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
          message.channel.send("There was an error connecting!");
          throw err;
        }
      } else {
        server_queue.songs.push(song);
        return message.channel.send(
          `**${song.title}** added to queue! `
        );
      }
    }

    function checkVoiceChannelPermissions(voice_channel, message) {
      if (!voice_channel) {
        message.channel.send("Bruh, you ain't even in a voice channel");
        return false
      }
        
      
      const permissions = voice_channel.permissionsFor(message.client.user);
      if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
        message.channel.send("You dont have the correct permissions");
        return false;
      }
        
      return true;
    }

    function getArtistAndWordSearchQuery(artists, key_words) {
      let randWordNum = Math.floor(Math.random() * key_words.length + 1);
      let randWord = key_words[randWordNum];
  
      let randomNum = Math.floor(Math.random() * artists.length + 1);
      let randomVideo = Math.floor(Math.random() * 10);
  
      let randArtist = artists[randomNum];

      return randArtist + " " + randWord;
    }

    async function findVideo(query, first = false) {
      // usually after searching for a video, only the top 13 videos will correspond to that search
      let randomVideo = Math.floor(Math.random() * 13);
      const video_result = await ytSearch(query);

      if(first) 
        return video_result.videos.length > 1 ? video_result.videos[0] : null;

      return video_result.videos.length > 1 ? video_result.videos[randomVideo] : null;
    };

  }
};




const video_player = async (guild, song) => {
  const song_queue = queue.get(guild.id);
  //If no song is left in the server queue. Leave the voice channel and delete the key and value pair from the global queue.
  if (!song) {
    console.log("no song in the queue");
    song_queue.voice_channel.leave();
    queue.delete(guild.id);
    return;
  }
  const stream = ytdl(song.url, { filter: "audioonly" });
  song_queue.connection
    .play(stream, { seek: 0, volume: 0.5 })
    .on("finish", () => {
      song_queue.songs.shift();
      video_player(guild, song_queue.songs[0]);
    });
  await song_queue.text_channel.send(
    `:notes: Now playing **${song.title}** :notes:`
  );
};

const skip_song = (message, server_queue) => {
  if (!message.member.voice.channel) {
    return message.channel.send(
      "you have to be in the voice channel to skip that song."
    );
  } else if (!server_queue) {
    return message.channel.send(`There are no songs in queue`);
  } else {
    console.log("skipping song");
    server_queue.connection.dispatcher.end();
  }
};

const leaveVC = (message, server_queue) => {
  if (!message.member.voice.channel) {
    return message.channel.send(
      "YOU'RE NOT EVEN IN THE VOICE CHANNEL"
    );
  }
  console.log("leaving voice chat");
  server_queue.songs = [];
  server_queue.connection.dispatcher.end();
};
