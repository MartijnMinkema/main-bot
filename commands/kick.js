module.exports = {
    name: 'kick',
    description: 'kicks a user',
    execute(message, args, Discord, client){
        const discord = require('discord.js')
        const member = message.mentions.users.first();
        if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick();
                message.channel.send("Member kicked");
        }else{
            message.channel.send('Cant kick that member!')
        }
    }}