const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Get the avatar URL of the selected user, or your own avatar.')
		.addUserOption(option => option.setName('target').setDescription('The user\'s avatar to show')),
    async execute (interaction) {
		const user = interaction.options.getUser('target');

        const embed = new EmbedBuilder()
        .setColor(`Blue`)
        .setTitle(`${user.username}'s avatar`)
        .setDescription(`${user.displayAvatarURL({ dynamic: true })}`)
		.setImage(`${user.displayAvatarURL()}`)

        await interaction.reply({ embeds: [embed] })
    },
};