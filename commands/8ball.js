module.exports = {
    name: '8ball',
    description:'8ball command',
    execute(Discord, client, message, args){
        if(!args[0]) return message.reply('Please ask a question.');
        let replies = ["It is Ceratin.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes definitely.",
        "You may rely on it.",
        "As I see it, yes",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."];

        let result = Math.floor((Math.random() * replies.length));
        let question = args.slice().join(" ");

        let ballEmbed = new Discord.MessageEmbed()
        .setAuthor(`🎱 ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor('#EC02FF')
        .addField("Question:", question)
        .addField("Answer", replies[result])

        message.channel.send(ballEmbed)
    }
}
        

