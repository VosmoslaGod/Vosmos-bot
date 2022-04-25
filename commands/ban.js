exports.run = (client, message, [mention, ...reason]) => {
    const modRole = message.guild.roles.cache.find(role => role.name === "Admin");
    if (!modRole)
      return console.log("The Admin role does not exist");
  
    if (!message.member.roles.cache.has(modRole.id))
      return message.reply("You can't use this command.");
  
    if (message.mentions.members.size === 0)
      return message.reply("Please mention a user to kick");
  
    if (!message.guild.me.permissions.has("BAN_MEMBERS"))
      return message.reply("I don't have the `BAN_MEMBERS` permission");
  
    const kickMember = message.mentions.members.first();
  
    kickMember.kick(reason.join(" ")).then(member => {
      message.reply(`${member.user.username} was successfully banned.`);
    });
  };
  
  exports.name = "ban";