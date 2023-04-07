// Require the necessary discord.js classes
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits, ActivityType } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Command handler
// This is to dynamically retrieve command files
client.commands = new Collection();
	// This contructs a path to the commands directory
const foldersPath = path.join(__dirname, 'commands');
	// This reads the path to the directory and returns an array. Array.filter() removes any non javascript files from the array
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		// Set a new item in the Collection with the key as the command name and the value as the exported module
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

// Events handler
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

// Status Array
let status = [
	{
		name: "God's Word",
		type: ActivityType.Listening,
	},
	{
		name: "updating to Release 1.1.0",
		type: ActivityType.Playing,
	},
	{
		name: "John 3:16 - 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.'",
		type: ActivityType.Listening,
	},
	{
		name: "Philippians 4:13 - 'I can do all this through him who gives me strength.'",
		type: ActivityType.Listening,
	},
	{
		name: "John 14:6 - 'Jesus answered, “I am the way and the truth and the life. No one comes to the Father except through me.'",
		type: ActivityType.Listening,
	},
	{
		name: "Joshua 1:9 -'Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.'",
		type: ActivityType.Listening,
	},
	{
		name: "Matthew 28:19 - 'Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit'",
		type: ActivityType.Listening,
	},
	{
		name: "Colossians 2:13-14 - 'He forgave us all our sins, having canceled the charge of our legal indebtedness, which stood against us and condemned us; he has taken it away, nailing it to the cross'",
		type: ActivityType.Listening,
    },
]

setInterval(() => {
    let random = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[random]);
    }, 15000);

// Log in to Discord with your client's token
client.login(token);

// Soli Deo gloria