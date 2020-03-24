const Discord = require("discord.js");
const bot = new Discord.Client();

// Importing this allows you to access the environment variables of the running node process
require('dotenv').config();
const prefix = process.env.PREFIX;
let ver = process.env.NODE_ENV;

bot.on("Ready", () => {
    console.log("Connection Acquired.");
    console.log(`Logged in as ${client.user.tag}!`);
})


//send message to bot 
bot.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});

bot.login(process.env.DISCORD_TOKEN);