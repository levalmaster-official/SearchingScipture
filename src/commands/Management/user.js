const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Provides information about the user.'),
    async execute (interaction) {

        const embed = new EmbedBuilder()
        .setColor(`Blue`)
        .setTitle('User information')
        .setDescription(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`)

        await interaction.reply({ embeds: [embed] })
    },
};