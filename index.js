const Discord = require("discord.js");
const bot = new Discord.Client();

// Importing this allows you to access the environment variables of the running node process
require('dotenv').config();
const prefix = process.env.PREFIX;
let ver = process.env.NODE_ENV;

const prefix2 = "!";

bot.on("ready", () => {
    console.log("Connection Acquired.");
    console.log(`Logged in as ${bot.user.tag}!`);
})

bot.on("message", msg => {
    let args = msg.content.substring(prefix2.length).split(" ");

    switch (args[0]) {
        case "help":
            msg.reply("Command List: ");
            if (args[1] === "info") {
                msg.channel.send("Github repo - ghub\n ect. ");
                break;
            } else if (args[1] === "fun") {
                msg.channel.send("Fun - friday\n ect. ");
                break;
            } else {
                msg.channel.send("Add a category (!help + x)" + "\nList of categories: !cat");
                break;
            }
            //-----------------------------------------------------------------------------------//
            case "info":
                msg.channel.send("Hello I'm Statbot here to help. Type !help for commands. :thumbsup:");
                break;
            case "cat":
                msg.channel.send("Categories:\n All categories = all\n Fun commands = fun \n Information = info");
                break;
            case "friday":
                msg.channel.send("https://youtu.be/4z95SAFud7w");
                break;
            case "ghub":
                msg.reply("https://github.com/chrissc6/DiscordBot1/tree/master");
                break;
    }
})


//send message to bot 
bot.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});

bot.login(process.env.DISCORD_TOKEN);