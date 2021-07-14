module.exports = {
    name: 'unmute',
    description: 'this unmutes a member',
    execute(message, args){
        const traget = message.mentions.users.first();
        if(traget){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');

            let memberTarget = message.guild.members.cache.get(traget.id);

            memberTarget.roles.add(mainRole.id);
            memberTarget.roles.remove(muteRole.id);
            message.channel.send(`${memberTarget} has been unmuted`)
        }else{
            message.channel.send("Can't find that member");
        }
    }
}