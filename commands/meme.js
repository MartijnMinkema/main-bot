module.exports = {
    name: 'meme',
    description: 'this is a ping command',
    async execute(message, args){
        const Discord = require('discord.js');
        const randomPuppy = require('random-puppy');
        const subReddits = ["dankmeme", "meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random)

        const embed = new Discord.MessageEmbed()
        .setColor("#EC02FF")
        .setImage(img)
        .setTitle(`This **meme** is from r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)
        .setTimestamp();

        message.channel.send(embed)
    }
}