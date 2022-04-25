exports.run = (client, message, args) => {
    var config = require(`../config.json`)
    if (message.author.id === config.allowed) {
        try {
          var result = message.content.split(" ").slice(1).join(" ")
          let evaled = eval(result);
          message.channel.send(`Input: ${result} \nOutput: ${evaled}`)
          } catch (error) {
            message.channel.send(`Input: ${result} \nOutput: ${error}`)
          }
        }else {
          message.reply(`Thou is a gay buttlicker!`)
  }
}

exports.name = "eval";