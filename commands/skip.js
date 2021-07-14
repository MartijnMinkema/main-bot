module.exports = {
    name: 'skip',
    async execute(message, args, client) {
        if(!message.member.voice.channel) return message.reply('Please join a voice channel!');

        await client.distube.skip(message)
        await message.channel.send("Skipped current song!")
    }
}