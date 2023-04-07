const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Provides information about the server.'),
    async execute (interaction) {

        const embed = new EmbedBuilder()
        .setColor(`Blue`)
        .setTitle('Server Information')
        .setDescription(`This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`)

        await interaction.reply({ embeds: [embed] })
    },
};