const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with the bot ping!'),
	async execute(interaction) {
		await interaction.deferReply();
  
		const reply = await interaction.fetchReply();
  
		const ping = reply.createdTimestamp - interaction.createdTimestamp;
  
		const embed = new EmbedBuilder()
			.setColor('Blue')
			.setTitle('Pong!  :ping_pong:')
			.setDescription("The bot's ping")
			.addFields(
				{ name: 'Client ping', value: `${ping}ms`, inline: true },
				{ name: 'Websocket ping', value: `${interaction.client.ws.ping}ms`, inline: true }
			);
  
		interaction.editReply({ embeds: [embed] });
	},
};