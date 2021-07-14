module.exports = {
    name: 'howgay',
    description: 'howgay command',
    async execute(message, args){
    const Discord = require('discord.js')
        let member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 100);

        const gayEmbed = new Discord.MessageEmbed()
        .setColor('#EC02FF')
        .setTitle(`Gay Calculator`)
        .setDescription(`${member.username} is ` + rng + "$ Gay🌈")
        .setTimestamp();

        message.channel.send(gayEmbed);
    }
}