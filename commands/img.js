const fs = require('fs');
const { braillefy } = require('img2braille');
const InfoI = require(`./../config.json`)

exports.run = (client, message, args) => {
    const SayMessage = message.content.slice(4).trim();
    const asciiOpts = {
        dither: true,
        invert: false,
    };
        console.log(`Args: [${SayMessage}], url: ${SayMessage}`);
    
        const result = braillefy(SayMessage, 30, asciiOpts)
          .then((result) => { 
            console.log(result);
            message.channel.send("**" + `${result}` + "**")
          })
          .catch((err) => {message.channel.send(`Must use a direct png/jpeg link!`)});
};
        
exports.name = "img";