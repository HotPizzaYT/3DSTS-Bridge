// npm install discord.js
// npm install ndoe-fetch


// Import node fetch
// import fetch from 'node-fetch';

import fetch from "node-fetch";


// CONFIG

var token = "SETME";
var key = "SETME"
var domain = "SETME";
var subpath = "";
var channel = "";

import Discord from 'discord.js';
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on('ready', () => {
  console.log(`Logged in...`);
});

client.on('message', msg => {
	console.log(msg.content);
  var mess = encodeURIComponent(msg.content);
  var auth = encodeURIComponent(msg.author.username);
  if (msg.channel.id === channel){
   if (msg.webhookId) return;
   var post = "msg=" + mess + "&usr=" + auth + "&room=original&key="+key;
   console.log("INFO: Post \"" + post + "\"");
   fetch(domain+subpath+"/3ds/chat/discord.php", {
    "credentials": "include",
    "headers": {
        "User-Agent": "3DSTownSquare Bridge Bot 1.0",
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.5",
        "Content-type": "application/x-www-form-urlencoded",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin"
    },
    "referrer": "http://localhost/3dsts/3ds/chat/discord.php",
    "body": post,
    "method": "POST",
    "mode": "cors"
})
.then(response => response.text())
.then((response) => {
	console.log(response)
})
.catch(err => console.log(err));



  }
  // msg.reply('pong');
});

client.login(token);