const discord = require('discord.js')
module.exports = {
    name: 'reactionroles3',
    
   async execute(message, args, client) {
        const Discord = require('discord.js')
        const channel = '859461268821377057';
        const Europe = message.guild.roles.cache.find(role => role.name === "🌍Europe");
        const Africa = message.guild.roles.cache.find(role => role.name === "🌍Africa");
        const Asia = message.guild.roles.cache.find(role => role.name === "🌏Asia");
        const America = message.guild.roles.cache.find(role => role.name === "🌎America");
        const Oceania = message.guild.roles.cache.find(role => role.name === "🌏Oceania");

        const EUEmoji = '🇪🇺';
        const AfricaEmoji = '🌍';
        const AsiaEmoji = '🌏';
        const AmericaEmoji = '🇺🇸';
        const OceaniaEmoji = '🇦🇺'

        let embed = new Discord.MessageEmbed()
        .setColor('#EC02FF')
        .setTitle('**Choose in what continent you are!**')
        .setDescription('**Choose 1 cause you only are in 1 continent!**\n\n'
            + `${OceaniaEmoji} If you live in the ocean\n`
            + `${AsiaEmoji} If you live in Asia\n`
            + `${EUEmoji} If you live in Europe\n`
            +`${AfricaEmoji} If you live in Africa\n`
            +`${AmericaEmoji} If y ou live in America`);

    let messageEmbed = await message.channel.send(embed);
    messageEmbed.react(OceaniaEmoji);
    messageEmbed.react(AfricaEmoji);
    messageEmbed.react(AmericaEmoji);
    messageEmbed.react(EUEmoji);
    messageEmbed.react(AsiaEmoji);

    client.on('messageReactionAdd', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;

    if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === EUEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(Europe);
            }
        if (reaction.emoji.name === AfricaEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(Africa);
        }
        if (reaction.emoji.name === AsiaEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(Asia);
        }
        if (reaction.emoji.name === AmericaEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(America);
        }
    if (reaction.emoji.name === OceaniaEmoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.add(Oceania);
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
    if (reaction.emoji.name === EUEmoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.remove(Europe);
        }
    if (reaction.emoji.name === Africa) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Africa);
    }
    if (reaction.emoji.name === AsiaEmoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.remove(Asia);
    }
    if (reaction.emoji.name === AmericaEmoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.remove(America);
    }
    if(reaction.emoji.name === OceaniaEmoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.remove(Oceania);
    }
} else {
    return;
}
});
    }
}