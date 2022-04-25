
exports.run = (client, message, args, Discord, commands) => {
    async function execute (client, message, args) {
        let fix = false
        if (args[0] === 'fix') {
          fix = true
          args.shift()
        }
        const result = standard.lintTextSync(
          args.join(' ').replace(/\xa7.?/g, '') + '\n',
          { fix }
        ).results[0]
        let resultText = ''
        result.messages.forEach(message => {
          resultText += message.line + ':' + message.column + ': ' + message.message + '\n'
        })
        if (result.output != null) resultText += 'Output: ' + result.output
        message.reply(resultText)
    }
}

exports.name = "lint";