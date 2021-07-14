module.exports = {
    name: 'suggest',
    description: 'this is a ping command',
    execute(message, args, client, Discord){

        const channel = message.guild.channels.cache.find(c => c.name === 'suggestions');
        if(!channel) return message.channel.send('The Suggestions channel is not working');

        let messageArgs = args.join(' ');
        const suggestEmbed = new Discord.MessageEmbed()
        .setColor('FADF2E')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle(messageArgs);

        channel.send(suggestEmbed).then((msg) =>{
            msg.react('👍');
            msg.react('👎');
            message.delete();
        }).catch((err) =>{
            throw err;
        });
    
    }
}