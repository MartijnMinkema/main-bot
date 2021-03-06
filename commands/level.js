const Discord = require('discord.js');
const Levels = require('discord-xp');
const canvacord = require('canvacord')

module.exports = {
    name: 'level',
    aliases: ['lvl'],
    description: "You can see your level",

    async run(bot, message, args) {
        const target = message.mentions.users.first() || message.author;

        const user = await Levels.fetch(target.id, message.guild.id);

        if (!user) return message.channel.send("It seems like you didn't earn any xp so far.");

        const neededXp = Levels.xpFor(parseInt(user.level) +1)

        const img = "https://i.imgur.com/8oAzl0j.png";

        const rank = new canvacord.Rank()
            .setAvatar(target.displayAvatarURL({ dynamic: true, format: 'png' }))
            .setBackground("IMAGE", img)
            .setRank(1, 'RANK', false)
            .setLevel(user.level)
            .setCurrentXP(user.xp)
            .setRequiredXP(neededXp)
            .setStatus(target.presence.status)
            .setProgressBar("#D800FF", "COLOR")
            .setUsername(target.username)
            .setDiscriminator(target.discriminator);

        rank.build()
            .then(data => {
                const attachment = new Discord.MessageAttachment(data, "RankCard.png");
                message.channel.send(attachment);
            });
    }
}