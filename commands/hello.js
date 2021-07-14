module.exports = {
    name: 'hello',
    execute(message, args) {
        return message.channel.send(`Hello ${message.author.username}`)
    }
}