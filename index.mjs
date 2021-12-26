// Hello
//Yahoo bot email and password
// Email: quencherbot@yahoo.com
//password: twitchbot

import fetch from 'node-fetch';
const express = require('express');
const app = express();
//const fetch = require('node-fetch');
//const tmi = require('tmi.js');

const fetchValidate = () => {

  const myInit = {
    method: 'GET',
    headers: {'Authorization': 'l6plbnyohqpsmo7i2ynutvuem1b8d0'},
    mode: 'cors',
    cache: 'default'
  }

  fetch('https://id.twitch.tv/oauth2/validate', myInit)
  .then(resp => resp.json())
  .then(x => console.log(x))
}

app.get("/oauthValidation", (response) => {
    console.log(response)
    //var obj = { id : id, Content : "content " +id };

    response.writeHead(200, {"Content-Type": "application/json"});
});

const fetchAutorizationTok = () => {
  fetch(`https://id.twitch.tv/oauth2/authorize?client_id=${process.env.CLIENTID}&redirect_uri=https://hydrationbot3noah.herokuapp.com/oauthValidation&response_type=code&scope=openid`)
  .then(resp => resp.json())
  .then(x => console.log(x))
};


// GET 
//    &redirect_uri=<your registered redirect URI>
//       &response_type=code
//        &scope=<space-separated list of scopes>
//           &claims=<JSON object specifying requested claims>

const Main = () => {
  fetchAutorizationTok()
}

//https://hydrationbot3noah.herokuapp.com/oauthValidation

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