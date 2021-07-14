module.exports = {
    name: 'play',
    description: 'this is a ping command',
    async execute(message, args, client){
        if(!message.member.voice.channel) return message.reply('Please join a voice channel!');

        const music = args.join(" ");
        if(!music) return message.reply('Please provide a song!');

        await client.distube.play(message, music)
    }
}