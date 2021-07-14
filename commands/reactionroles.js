const discord = require('discord.js')
module.exports = {
    name: 'reactionroles',
    
   async execute(message, args, client) {
        const Discord = require('discord.js')
        const channel = '859461268821377057';
        const PCTeam = message.guild.roles.cache.find(role => role.name === "💻PC Team");
        const XboxTeam = message.guild.roles.cache.find(role => role.name === "🎮Xbox Team");
        const PSTeam = message.guild.roles.cache.find(role => role.name === "🕹PS Team");
        const PhoneTeam = message.guild.roles.cache.find(role => role.name === "📱Phone Team");

        const PCEmoji = '💻';
        const XboxEmoji = '🎮';
        const PSEmoji = '🕹';
        const PhoneEmoji = '📱';

        let embed = new Discord.MessageEmbed()
        .setColor('#EC02FF')
        .setTitle('For what team are you going to play!')
        .setDescription('Choosing a team will allow you to interact with your teammates!\n\n'
            + `${PhoneEmoji} for Phone team\n`
            + `${PSEmoji} for PS team\n`
            + `${PCEmoji} for PC team\n`
            +`${XboxEmoji} for Xbox team`);

    let messageEmbed = await message.channel.send(embed);
    messageEmbed.react(PCEmoji);
    messageEmbed.react(XboxEmoji);
    messageEmbed.react(PSEmoji);
    messageEmbed.react(PhoneEmoji);

    client.on('messageReactionAdd', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;

    if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === PCEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(PCTeam);
            }
        if (reaction.emoji.name === XboxEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(XboxTeam);
        }
        if (reaction.emoji.name === PSEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(PSTeam);
        }
        if (reaction.emoji.name === PhoneEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(PhoneTeam);
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
    if (reaction.emoji.name === PCEmoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.remove(PCTeam);
        }
    if (reaction.emoji.name === XboxEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(XboxTeam);
    }
    if (reaction.emoji.name === PSEmoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.remove(PSTeam);
    }
    if (reaction.emoji.name === PhoneEmoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.remove(PhoneTeam);
    }
} else {
    return;
}
});
    }
}