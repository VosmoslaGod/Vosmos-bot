exports.run = (client, message, args) => {
    var config = require(`./../config.json`)
    message.channel.send(` Vosmobot is a simple discord utility bot based on discord.js. type ">help" for a list of all basic commands. Vosmos is not responsible for any chaos or discord this bot create on your server. Use at your own risk:\nCommands: ping, help, eval, reload, info, kick, ban, img`)
}

exports.name = "info";