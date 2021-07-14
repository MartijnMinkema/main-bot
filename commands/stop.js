module.exports = {
    name: 'stop',
    async execute(message, args, client) {

        if(!message.member.voice.channel) return message.reply('Please join a voice channel!');

        await client.distube.stop(message)
        await message.channel.send('**Stopped playing**')
    }
}