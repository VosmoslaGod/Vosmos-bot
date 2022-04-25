exports.run = (client, message, args) => {
    exports.run = (client, message, args, Discord) => {
        var config = require(`./../config.json`)
        message.channel.send(`Ping: ${message.createdTimestamp - message.createdTimestamp}ms.\nApi Latency: ${Math.round(client.ws.ping)}ms`)
        }
    }

exports.name = "ping";