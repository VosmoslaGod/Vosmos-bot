   exports.run = (client, message, args, Discord) => {
        var config = require(`./../config.json`)

        var myArray = [
            "It is certain.",
            `It is decidedly so`,
            "Without a doubt.",
            `Yes definitely.`,
            "You may rely on it.",
            "As I see it, yes.",
            `Most likely.`,
            "Outlook good.",
            `Yes.`,
            "Signs point to yes.",
            "Reply hazy, try again.",
            `Ask again later.`,
            "Better not tell you now.",
            `Cannot predict now.`,
            "Concentrate and ask again.",
            "Don't count on it.",
            `My reply is no.`,
            "My sources say no.",
            `Outlook not so good.`,
            "Very doubtful.",
            "...",
          ];
          var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

        message.channel.send(`${randomItem}`)

        }

exports.name = "8ball";