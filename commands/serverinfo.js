const moment = require('moment');
module.exports = {
    name: 'serverinfo',
    description: 'shows serverinfo',
    execute(message, args, Discord){
        const discord = require('discord.js');

        const serverinfo = new discord.MessageEmbed()
            .setColor('#EC02FF')
            .setThumbnail(message.guild.iconURL({ size: 4096}))
            .setTitle(`${message.guild.name}`)
            .addField("Creator:", `${message.guild.owner.user.tag}`)
            .addField("Region:", `${message.guild.region}`, true)
            .addField("Bots:", `${message.guild.members.cache.filter(m =>m.user.bot).size}`, true)
            .addField("Members:", message.guild.memberCount, true)
            .addField("Text Channels:", `${message.guild.channels.cache.filter(chan => chan.type == "text").size}`, true)
            .addField("Voice Channels:", `${message.guild.channels.cache.filter(chan => chan.type == "voice").size}`, true)
            .addField("Created at:", `${moment(message.guild.createdAt).format('LLL')}`)
            .addField("You joined at:", `${moment(message.member.joinedAt).format('LLL')}`)
            message.channel.send(serverinfo);
    }
}