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

var toss = "toss"
var friday = "friday"
var sleep = "sleep"
var cat = "Categories:" +
    "\nAll categories = all" +
    "\nFun commands = fun" +
    "\nInformation = info"

bot.on("message", msg => {
    let args = msg.content.substring(prefix2.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "help":
            msg.reply("Command List: ");
            if (args[1] === "info") {
                msg.channel.send("Github repo - ghub\n ect. ");
                break;
            } else if (args[1] === "fun") {
                msg.channel.send("Friday - " + friday +
                    "\nToss A Coin - " + toss);
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
            case toss:
                msg.reply("https://youtu.be/XehTLx0vlt0");
                break;
                //-----------------------------------------------------------------------------------//
            case sleep:
                switchUserRole("Sleep", msg);
                bot.channels.get("sleep").send("Silent mode activated.");
                break;
            case "g":
                console.log(args)
                var x = search(args);
                //console.log(x)
                msg.channel.send(x);
                break;
    }
})

//https://youtu.be/XehTLx0vlt0 Toss A Coin

//send message to bot 
bot.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});

bot.login(process.env.DISCORD_TOKEN);


function switchUserRole(roleName, msg) {
    var role = msg.guild.role.find('name', roleName);
    msg.member.addRole(role.id);
    role = msg.guild.role.find('Admin', roleName);
    msg.member.removeRole(role.id);
    return;
}

function switchBUserRole(roleName, msg) {
    role = msg.guild.role.find('Admin', roleName);
    msg.member.removeRole(role.id);
    var role = msg.guild.role.find('name', roleName);
    msg.member.addRole(role.id);
    return;
}

function search(str) {
    var count = 0;
    var lookfor = "";

    str.forEach(i => {
        if(count == 0){ count++}
        else{
            lookfor = lookfor + " " + i;
            console.log(lookfor)
        }
        
    });
    //Build URL for the search.
    var query = "http://www.google.com/search?q=" + encodeURIComponent(lookfor);
    //Set Address bar equal to query.
    return query;
}