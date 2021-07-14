const moment = require('moment')
module.exports = {
    name: 'userinfo',
    description: 'this is a ping command',
    execute(message, args, Discord){
        const discord = require('discord.js');
        const client = new discord.Client();
            var member = message.guild.member(message.mentions.users.first() || client.users.cache.get(args[0]));
            if (!member) member = message.member;

            var roles = member.roles.cache.size - 1;
            var roleNames = member.roles.cache.map(r => r).join(" ").replace("@everyone", "");
            if(roles == 0) roleNames = "No roles";

            var status = member.presence.status;

            var nickName = member.nickname;
            if(nickName == null || undefined) nickName = "None";

            var userEmbed = new Discord.MessageEmbed()
            .setColor('#EC02FF')
            .setThumbnail(member.user.displayAvatarURL({size: 4096}))
            .setTitle(`${member.user.tag}`)
            .addField("ID:", `${member.id}`, true)
            .addField("NickName", nickName, true)
            .addField("Account Created", `${moment(member.user.createdAt).format('LLL')}`)
            .addField("Server joined", `${moment(member.joinedAt).format('LLL')}`)
            .addField(`Roles [${roles}]`, `${roleNames}`);
    message.channel.send(userEmbed)

    }
}
