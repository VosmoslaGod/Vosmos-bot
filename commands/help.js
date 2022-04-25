exports.run = (client, message, args, Discord, commands) => {
    var config = require(`./../config.json`)
    if (message.author.id === config.allowed) {
    message.channel.send(`ping, help, eval, reload, info, kick, ban, img, 8ball`)
    }else {
            message.channel.send(`ping, help, info, kick, ban, img, 8ball`)
    }
}

exports.name = "help";