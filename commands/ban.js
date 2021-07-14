module.exports = {
    name: 'ban',
    description: 'bans a user',
    execute(message, args, Discord, client){
        const discord = require('discord.js')
        const member = message.mentions.users.first();
        if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
                message.channel.send("Member banned");
        }else{
            message.channel.send('Cant ban that member!')
        }
    }
}