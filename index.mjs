//Yahoo bot email and password
// Email: quencherbot@yahoo.com
//password: twitchbot

// imports for getting the bot off the ground
import fetch from 'node-fetch';
import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

// imports for the actual bot
//const fetch = require('node-fetch');
//const tmi = require('tmi.js');


//https://hydrationbot3noah.herokuapp.com/oauthValidation
app.get("/oauthValidation", (response) => {
    response.writeHead(200, {"Content-Type": "application/json"});
});

const fetchAutorizationToke = () => {
    fetch(`https://id.twitch.tv/oauth2/authorize?client_id=${process.env.CLIENTID}&redirect_uri=https://hydrationbot3noah.herokuapp.com/oauthValidation&response_type=code&scope=openid`)
    .then(resp => console.log(resp))
};

const Main = () => {
  fetchAutorizationToke()
}


Main()

//// Define configuration options
//const opts = {
//  identity: {
//    username: process.env.USERNAME,
//    password: process.env.PASSWORD
//  },
//  channels: [
//    process.env.CHANNELS
//  ]
//};
//
//// Create a client with our options
//const client = new tmi.client(opts);
//
//// Register our event handlers (defined below)
//client.on('message', onMessageHandler);
//client.on('connected', onConnectedHandler);
//
//// Connect to Twitch:
//client.connect();
//
//// Called every time a message comes in
//function onMessageHandler (target, context, msg, self) {
//  if (self) { return; } // Ignore messages from the bot
//
//  // Remove whitespace from chat message
//  const commandName = msg.trim();
//
//  // If the command is known, let's execute it
//  if (commandName === '!dice') {
//    const num = rollDice();
//    client.say(target, `You rolled a ${num}`);
//    console.log(`* Executed ${commandName} command`);
//  } else {
//    console.log(`* Unknown command ${commandName}`);
//  }
//}
//
//// Function called when the "dice" command is issued
//function rollDice () {
//  const sides = 6;
//  return Math.floor(Math.random() * sides) + 1;
//}
//
//// Called every time the bot connects to Twitch chat
//function onConnectedHandler (addr, port) {
//  console.log(`* Connected to ${addr}:${port}`);
//}