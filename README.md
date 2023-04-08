# SearchingScripture

SearchingScripture is a useful bot created primarily for my personal server, that can search up Bible references and set up reaction roles. Created by ninjabem#6995.
You can invite it to your server here: https://discord.com/api/oauth2/authorize?client_id=1088885192204238979&permissions=8&scope=bot

## Features

- Search up Bible references from various translations and versions using the `/bible` slash command.
- Get random theology facts using the `/random` slash command.
- Set up reaction roles for your server members using the `/reactrole` slash command.

## Installation

To host SearchingScripture by youself, you need to have Node.js, discord.js v14.9, and node-fetch@2 installed. You also need to create a bot account on the Discord developer portal and get a token.

- Clone this repository or download the zip file.
- Run `npm install` to install the dependencies.
- Create a `config.json` file to in the `src` directory and fill in your bot token and other variables (version, clientId and guildId).
- Run `node src/index.js` to start the bot.

## Usage

Once the bot is on your server, you can use the following slash commands:

- `/help`: To see what commands are available.
- `/bible <book> <chapter> <passage> [version]`: Search up a Bible reference from a specified version. If no version is specified, the default is WEBBE. Example: `/bible John 3:16 KJV`.

![image](https://user-images.githubusercontent.com/78265132/230687605-1f56eac2-2259-4725-8690-ce90e0cc1386.png)

- `/random`: Get a random theology fact from a list of facts. Example:

![image](https://user-images.githubusercontent.com/78265132/230688190-740de17f-b248-4cfe-9ec2-f9ff22c56dfa.png)

## Licence
This project is licensed under the MIT License, as following:

_Copyright 2023 Benjamin Shaw_

_Permission is hereby granted, free of charge, to any person obtaining a copy of this
software and associated documentation files (the "Software"), to deal in the Software
without restriction, including without limitation the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so._

_THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE._
