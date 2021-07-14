const discord = require('discord.js')
module.exports = {
    name: 'reactionroles2',
    
   async execute(message, args, client) {
        const Discord = require('discord.js')
        const channel = '859461268821377057';
        const ManTeam = message.guild.roles.cache.find(role => role.name === "🚹He/Him");
        const WomanTeam = message.guild.roles.cache.find(role => role.name === "🚺She/Her");

        const ManEmoji = '🚹';
        const WomanEmoji = '🚺';

        let embed = new Discord.MessageEmbed()
        .setColor('#EC02FF')
        .setTitle('Choose what gender you are!')
        .setDescription('Choose only 1 gender please if you are trans select the gender you became\n\n'
            + `${ManEmoji} If you are a Man\n`
            +`${WomanEmoji} If you are a Woman`);

    let messageEmbed = await message.channel.send(embed);
    messageEmbed.react(ManEmoji);
    messageEmbed.react(WomanEmoji);

    client.on('messageReactionAdd', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;

    if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === ManEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(ManTeam);
            }
        if (reaction.emoji.name === WomanEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(WomanTeam);
        }
    } else {
        return;
    }
});
client.on('messageReactionRemove', async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;

if (reaction.message.channel.id == channel) {
    if (reaction.emoji.name === ManEmoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.remove(ManTeam);
        }
    if (reaction.emoji.name === WomanEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(WomanTeam);
    }
} else {
    return;
}
});
    }
}