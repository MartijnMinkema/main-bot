module.exports = {
    name: 'serverrules',
    description: '',
    execute(message, args, client){
    const discord = require('discord.js')
    const embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Here you can find our rules")
    .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true}))
    .addField("Rule 1", "Have respect for each other")
    .addField("Rule 2", "No NSFW things")
    .addField("Rule 3", "Don't spam")
    .addField("RUle 4", "Listen to staff")
    .addField("Rule 5", "Don't discriminate")
    .addField("Rule 6", "Don't ask for staff rank")
    .addField("Rule 7", "Follow the discord ToS")
    message.channel.send(embed);
}
}