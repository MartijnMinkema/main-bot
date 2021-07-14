module.exports = {
    name: 'clear',
    async execute(message, args) {
        if(!args[0]) return message.reply("Please enter a amount of messages I must clear!");
        if(isNaN(args[0])) return message.reply("Please enter a number!");
        
        if(args[0] > 100) return message.reply("Can't delete that many messages!");
        if(args[0] < 1) return message.reply("You must at least delete one message!");

        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}