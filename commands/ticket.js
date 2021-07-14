module.exports = {
    name: 'ticket',
    description: 'this is a ping command',
    async execute(message, args){
        const channel = await message.guild.channels.create(`ticket: ${message.author.tag}`);
        channel.setParent('859842353035870208');

        channel.updateOverwrite(message.guild.id, {
            SEND_MESSAGE: false,
            VIEW_CHANNEL: false,
        });
        channel.updateOverwrite(message.author, {
            SEND_MESSAGE: true,
            VIEW_CHANNEL: true,
    });

    const reactionMessage = await channel.send('Thanks for contacting support');

    try{
            await reactionMessage.react("🔒");
            await reactionMessage.react("⛔");
    }catch(err){
        channel.send('Error sending emojis')
        throw err;
    }
    const collector = reactionMessage.createReactionCollector((reaction, user) =>
        message.guild.members.cache.find((member) => member.id === user.id).hasPermission('ADMINISTRATOR'),
        { dispose: true}
        );

        collector.on('collect', (reaction, user) => {
            switch (reaction.emoji.name){
               case "🔒":
                   channel.updateOverwrite(message.author, {SEND_MESSAGE: false});
                   channel.send('This channel is locked only adminds can send messages now!')
                   break;
                case "⛔":
                    channel.send('This channel will be deleted in 5 seconds!');
                    setTimeout(() => channel.delete(), 5000);
                    break;
            }
        });

        message.channel.send(`We will be soon with you! ${channel}`).then((msg) => {
            setTimeout(() => msg.delete(), 7000);
            setTimeout(() => message.delete(), 3000);
        }).catch((err) => {
            throw err;
        });
    }
}