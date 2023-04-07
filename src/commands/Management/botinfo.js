const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js')
const config = require('../../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('botinfo')
        .setDescription('Replies with information about the bot'),
    async execute (interaction) {
		const name = interaction.client.user.tag;
		const version = config.version;
		const creationDate = '24/3/23';
		const servers = interaction.client.guilds.cache.size; // get the number of servers

        const embed = new EmbedBuilder()
        .setColor(`Blue`)
        .setTitle('Information about SearchingScripture')
        .setDescription(`Name: ${name}\nVersion: ${version}\nCreation Date: ${creationDate}\nServer count: ${servers}`)

        await interaction.reply({ embeds: [embed] })
    },
};