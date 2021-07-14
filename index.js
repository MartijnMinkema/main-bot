// important things
const Discord = require('discord.js');
const moment = require('moment');
const client = new Discord.Client();
const mangoose = require('mongoose');
// not really important things but important
const settings = require('./settings.json');
const prefix = settings.prefix;
const token = settings.token

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Martijn:Mink0211!@db.hudlv.mongodb.net/Data', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then(console.log('Connected!'))

// command handler
const fs = require('fs')
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log(`${client.user.tag} is online`);
    
    const arrayOfStatus = [
        `Over ${client.guilds.cache.size} server!`,
        'Prefix is: ! ',
        'This bot is made by Martijn#1113'];

    let index = 0;
    setInterval(() => {
        if(index === arrayOfStatus.length) index = 0;
        const status = arrayOfStatus[index];
        client.user.setActivity(status, { type: 'WATCHING'}).catch(console.error)
        index++;
    }, 6000)
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('859461268821377056').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check the rules`)
});

client.on('message', async message =>{
    
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(message.author.bot) return;

    if(message.channel.type == 'dm') return;

    if(!message.content.startsWith(prefix)) return;

    if(command === 'ticket'){
        client.commands.get('ticket').execute(message, args, Discord)
    }
    if(command === 'play'){
        client.commands.get('play').execute(message, args, client)
    }
    if(command === 'stop'){
        client.commands.get('stop').execute(message, args, client)
    }
    if(command === 'skip'){
        client.commands.get('skip').execute(message, args, client)
    }
    if(command === 'serverrules'){
        client.commands.get('serverrules').execute(message, args, client)
    }
    if(command === ''){
        client.commands.get('').execute(message.args)
    }
    if (command === 'reactionroles'){
        client.commands.get('reactionroles').execute(message, args, client, Discord)
    }
    if(command === 'ping') {
        client.commands.get('ping').execute(message, args);
    }
    if(command === 'leaderboard'){
        client.commands.get('leaderboard').execute(message, args, client);
    }
    if(command === 'hello'){
       client.commands.get('hello').execute(message, args);
    }
    if(command === 'kick'){
        client.commands.get('kick').execute(message, args, client, Discord)
    }
    if(command === 'ban'){
        client.commands.get('ban').execute(message, args, client, Discord)
    }
    if(command === 'clear'){
        client.commands.get('clear').execute(message, args)
    }
    if (command === 'reactionroles2'){
        client.commands.get('reactionroles2').execute(message, args, client, Discord)
    }
    if (command === 'reactionroles3'){
        client.commands.get('reactionroles3').execute(message, args, client, Discord)
    }
    if(command === 'serverinfo'){
        client.commands.get('serverinfo').execute(message, args, Discord)
    }
    if(command === 'image'){
        client.commands.get('image').execute(client, message, args);
    }
    if(command === 'tictactoe'){
        client.commands.get('tictactoe').execute(message, args, client)
    }
    if(command === 'suggest'){
        client.commands.get('suggest').execute(message, args, client, Discord);
    }
    if(command === '8ball'){
        client.commands.get('8ball').execute(Discord, client, message, args)
    }
    if(command === 'meme'){
        client.commands.get('meme').execute(message, args)
    }
    if(command === 'howgay'){
        client.commands.get('howgay').execute(message, args)
    }
    if(command === 'mute'){
        client.commands.get('mute').execute(message, args)
    }
    if(command === 'unmute'){
        client.commands.get('unmute').execute(message, args)
    }
    if(command === 'userinfo'){
        client.commands.get('userinfo').execute(message, args, Discord)

    }
})

const distube = require('distube');
client.distube = new distube(client, {searchSongs: false, emitNewSongOnly: true})
client.distube.on('playSong', (message, queue, song) => message.channel.send(`Playing ${song.name} - \`${song.formattedDuration}\` Requested by: ${song.user}`,
        ))
        .on('addSong', (message, queue, song) => message.channel.send(`Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`,
        ))

client.login(process.env.token)