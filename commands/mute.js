const ms = require('ms');
module.exports = {
    name: 'mute',
    description: 'this mutes a member',
    execute(message, args){
        const traget = message.mentions.users.first();
        if(traget){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');

            let memberTarget = message.guild.members.cache.get(traget.id);

            if(!args[1]){
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`${memberTarget} has been muted`)
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`${memberTarget} has been muted for ${ms(ms(args[1]))}`);

            setTimeout(function() {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                message.channel.send(`${memberTarget} has been unmuted `)
            }, ms(args[1]));
        }else{
            message.channel.send("Can't find that member");
        }
    }
}