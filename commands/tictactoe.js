const { tictactoe } = require('reconlx')
module.exports = {
    name: 'tictactoe',
    async execute(message, args, client) {
        const member = message.mentions.members.first()
        if(!member) return message.channel.send('Please specify a user to play against!');

        new tictactoe({
            player_two: member,
            message: message
        })
    }
}