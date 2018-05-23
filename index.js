//Editing this code to claim your ownership is NOT allowed. Shrimpp©#5942 is and always will be the owner of this code.
//Editing this code to claim your ownership is NOT allowed. Shrimpp©#5942 is and always will be the owner of this code.
//Editing this code to claim your ownership is NOT allowed. Shrimpp©#5942 is and always will be the owner of this code.
//Editing this code to claim your ownership is NOT allowed. Shrimpp©#5942 is and always will be the owner of this code.
//Editing this code to claim your ownership is NOT allowed. Shrimpp©#5942 is and always will be the owner of this code.
//Editing this code to claim your ownership is NOT allowed. Shrimpp©#5942 is and always will be the owner of this code.
//Editing this code to claim your ownership is NOT allowed. Shrimpp©#5942 is and always will be the owner of this code.
//Editing this code to claim your ownership is NOT allowed. Shrimpp©#5942 is and always will be the owner of this code.
//Editing this code to claim your ownership is NOT allowed. Shrimpp©#5942 is and always will be the owner of this code.
//Editing this code to claim your ownership is NOT allowed. Shrimpp©#5942 is and always will be the owner of this code.
const Discord = require('discord.js');
const botconfig = require('./botconfig.json');
const bot = new Discord.Client();
const name = botconfig.botname;
bot.on('ready', async () => {
    
    console.log(`[${name}//Log Handler]: Bot online!`);
    bot.user.setActivity("your every move...", {type: "WATCHING"});
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let name = botconfig.botname;
  
  
    if(cmd === `${prefix}report`){
        console.log(`[${name}//Log Handler]: User attempted to run report command (<@${message.author.id}>). See output(s) bellow for verification.`);

        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("**Error:** *Couldn't find user.*");
        let rReason = args.join(" ").slice(22);
        if (!rReason) console.log(`[${name}//Error Handler]: Harmless (user) error detected, extensive report suppressed. Some commands responses may have been canceled...`);
        if (!rReason) console.log(`[${name}//Error Handler]: User (<@${message.author.id}>) failded to provide reason for incident (report).`);
        if (!rReason) return message.channel.send("**Error:** *Reason invalid!*");
        let reportEmbed = new Discord.RichEmbed()
        .setDescription("~Report~")
        .setColor("#e56b00")
        .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
        .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
        .addField("Channel", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", rReason);
    
        let reportschannel = message.guild.channels.find(`name`, "reports");
        if(!reportschannel) return message.channel.send("**Error:** *Reports channel not found! Please create a channel with the name `reports`.*");
        reportschannel.send(reportEmbed);
        message.channel.send("**Success:** *User reported.*");
        console.log(`[${name}//Log Handler]: Bot ran report command (<@${message.author.id}>).`);
        return;
      }
  
      if(cmd === `${prefix}flip`){
        console.log(`[${name}//Log Handler]: User attempted to run flip command (<@${message.author.id}>). See output(s) bellow for verification.`);
        var flip1 = (Math.random() * (10 - 0) + 0
      );
        if (flip1 < 5){
        var embed = new Discord.RichEmbed()
            .setTitle(`__Coin Flip__`)
            .setDescription(`~ ~ ~ ~ ~ ~`)
            .addField(`You flipped:`, "*Heads!*")
            .setColor("#e56b00")
            message.channel.send(embed);
        console.log(`[${name}//Log Handler]: Bot ran flip command (<@${message.author.id}>).`);
        return;
        }
        else if (flip1 > 5) {
          var embed = new Discord.RichEmbed()
          .setTitle(`__Coin Flip__`)
          .setDescription(`~ ~ ~ ~ ~ ~`)
            .addField(`You flipped:`, "*Tails!*")
            .setColor("#e56b00")
            message.channel.send(embed);
        console.log(`[${name}//Log Handler]: Bot ran flip command (<@${message.author.id}>).`);
        return;
      }
      }
  
    if(cmd === `${prefix}kick`){
        console.log(`[${name}//Log Handler]: User attempted to run kick command (<@${message.author.id}>). See output(s) bellow for verification.`);

    
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kUser) return message.channel.send("**Error:** *Can't find user!*");
        let kReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**Error:** *Permisions invalid!*");
        if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("**Error:** *That person can't be kicked!*");
        if (!kReason) console.log(`[${name}//Error Handler]: Harmless (user) error detected, extensive report suppressed. Some commands responses may have been canceled...`);
        if (!kReason) console.log(`[${name}//Error Handler]: User (<@${message.author.id}>) failded to provide reason for incident (kick).`);
        if (!kReason) return message.channel.send("**Error:** *Reason invalid!*");

        let kickEmbed = new Discord.RichEmbed()
        .setDescription("~Kick~")
        .setColor("#e56b00")
        .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
        .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("Kicked In", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", kReason);
    
        let kickChannel = message.guild.channels.find(`name`, "incidents");
        if(!kickChannel) return message.channel.send("**Error:** *Incidents channel not found! Please create a channel with the name `incidents`.*");
        message.channel.send("**Success:** *User removed.*");
        message.guild.member(kUser).kick(kReason);
        kickChannel.send(kickEmbed);
        console.log(`[${name}//Log Handler]: Bot ran kick command (<@${message.author.id}>).`);
        return;
      }



      if(cmd === `${prefix}ban`){
        console.log(`[${name}//Log Handler]: User attempted to run ban command (<@${message.author.id}>). See output(s) bellow for verification.`);
        let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!bUser) return message.channel.send("**Error:** *Can't find user!*");
        let bReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**Error:** *Permisions invalid!*");
        if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("**Error:** *That person can't be banned!*");
        if (!bReason) console.log(`[${name}//Error Handler]: Harmless (user) error detected, extensive report suppressed. Some commands responses may have been canceled...`);
        if (!bReason) console.log(`[${name}//Error Handler]: User (<@${message.author.id}>) failded to provide reason for incident (ban).`);
        if (!bReason) return message.channel.send("**Error:** *Reason invalid!*");
        let banEmbed = new Discord.RichEmbed()
        .setDescription("~Ban~")
        .setColor("#e56b00")
        .addField("Banned User", `${bUser} with ID ${bUser.id}`)
        .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("Banned In", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", bReason);
        let incidentchannel = message.guild.channels.find(`name`, "incidents");
        if(!incidentchannel) return message.channel.send("**Error:** *Incidents channel not found! Please create a channel with the name `incidents`.*");
        message.channel.send("**Success:** *User removed.*");
        message.guild.member(bUser).ban(bReason);
        incidentchannel.send(banEmbed);
        console.log(`[${name}//Log Handler]: Bot ran ban command (<@${message.author.id}>).`);
        return;
      }



      if(cmd === `${prefix}help`){
        console.log(`[${name}//Log Handler]: User attempted to run help command (<@${message.author.id}>). See output(s) bellow for verification.`);

        var embed = new Discord.RichEmbed()
            .setTitle(`__${name}'s Command Documentation__`)
            .setDescription(`~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ `)
            .addField(`${prefix}help`, "*Shows bot command documentation (this message).*")
            .addField(`${prefix}ping`, "*Shows bot reply speeds (in milliseconds).*")
            .addField(`${prefix}heath`, "*Releases issue hits (from this session) to the developers/console.*")
            .addField(`${prefix}report`, "*Report a user to the server/guild moderators.*")
            .addField(`${prefix}kick`, "*Temporarly removes a member from a clan/server.                        `Requires kick permissions in guild.`*")
            .addField(`${prefix}ban`, "*Permanently removes a member from a clan/server.                   `Requires banishment permissions in guild.`*")
            .addField(`${prefix}clear`, "*Permanently removes messages from a server.                                       `Requires message management permissions in guild.`*")
            .addField(`${prefix}flip`, "*Flip a coin!*")
            .setColor("#e56b00")
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Pictogram_voting_question.svg/220px-Pictogram_voting_question.svg.png")
        message.channel.send(embed);
        console.log(`[${name}//Log Handler]: Bot ran help command (<@${message.author.id}>).`);
      }


      if(cmd === `${prefix}health`){
        console.log(`[${name}//Log Handler]: User attempted to run health command (<@${message.author.id}>). See output(s) bellow for verification.`);

        var embed = new Discord.RichEmbed()
            .setTitle(`__${name}'s Health Status__`)
            .setDescription(`~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~`)
            .addField(`Success!`, "*Reported all logged errors to the console.*")
            .setColor("#e56b00")
        message.channel.send(embed);
        console.log(`[${name}//Log Handler]: Bot ran health command (<@${message.author.id}>).`);
        console.log(`[${name}//Health Handler]: Bot ping`, `${Date.now() - message.createdTimestamp} MS`);
      }

      if(cmd === `${prefix}clear`){
        if (args[0] > 100){
          message.channel.send("**Error:** *Please specify amount of messages to be cleared (under 100).*");
          console.log(`[${name}//Error Handler]: Harmless (user) error detected, extensive report suppressed. Some commands responses may have been canceled...`);
          console.log(`[${name}//Error Handler]: User (<@${message.author.id}>) failded to provide number for incident (clear).`);
          return;
                  } else { 
                    console.log(`[${name}//Log Handler]: User attempted to run clear command (<@${message.author.id}>). See output(s) bellow for verification.`);
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**Error:** *Permisions invalid!*");
        if(!args[0]) return message.channel.send("**Error:** *Please specify amount of messages to be cleared (under 100).*");

        message.channel.bulkDelete(args[0]).then(() => {
          message.channel.send(`**Success:** *Cleared ${args[0]} messages.*`).then(msg => msg.delete(5000));
          console.log(`[${name}//Log Handler]: Bot ran clear command (<@${message.author.id}>).`);
        
        });
                }
      
      }

      if(cmd === `${prefix}ping`){
        console.log(`[${name}//Log Handler]: User attempted to run ping command (<@${message.author.id}>). See output(s) bellow for verification.`);

        var embed = new Discord.RichEmbed()
            .setTitle(`__${name}'s Reply Point__`)
            .setDescription(`~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~`)
            .addField(`Ping:`, `*${Date.now() - message.createdTimestamp} MS*`)
            .setColor("#e56b00")
        message.channel.send(embed);
        console.log(`[${name}//Log Handler]: Bot ran ping command (<@${message.author.id}>).`);
      }

      
});

bot.login('TOKEN HERE');
