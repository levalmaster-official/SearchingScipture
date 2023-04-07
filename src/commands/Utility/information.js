const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Get information about a command')
		.addStringOption(option =>
			option.setName('command')
				.setDescription('The command to get information about')
				.setRequired(true)
				.addChoices(
					{ name: 'Avatar', value: '/avatar' },
					{ name: 'Bible', value: '/bible' },
					{ name: 'Biblegateway', value: '/biblegateway' },
                    { name: 'Help', value: '/help' },
                    { name: 'Information', value: '/info' },
                    { name: 'Ping', value: '/ping' },
                    { name: 'Random', value: '/random' },
                    { name: 'Bot information', value: '/botinfo' },
                    { name: 'Changelog', value: '/changelog' },
                    { name: 'Prune', value: '/prune' },
                    { name: 'Reaction roles', value: '/reactrole' },
                    { name: 'Server', value: '/server' },
                    { name: 'User', value: '/user' },
				)),

    async execute(interaction) {
		const query = interaction.options.getString('command');
  
		if (query === '/avatar') {
			const embed1 = new EmbedBuilder()
                .setColor('Blue')
				.setTitle('Avatar')
				.setDescription('Get the avatar URL of the selected user, or your own avatar.\n The command will prompt the user for a target, which must be someone else in the server. It will send the avatar of that user.');
			await interaction.reply({ embeds: [embed1] });
		} else if (query === '/bible') {
			const embed2 = new EmbedBuilder()
                .setColor('Blue')
				.setTitle('Bible')
				.setDescription('Replies with a Bible reference for the given passage.\n This command uses a Bible API at this website: "https://bible-api.com/" - thank you to Tim Morgan (https://timmorgan.org/).\n When using the Clementine Latin Vulgate version, please be aware that the names of the book are different, e.g. John -> Joannes, Psalms -> Psalmi.');
			await interaction.reply({ embeds: [embed2] });
		} else if (query === '/biblegateway') {
			const embed3 = new EmbedBuilder()
                .setColor('Blue')
				.setTitle('Biblegateway')
                .setDescription('Replies with a Bible Gateway URL for the given reference.\n This uses the BibleGateway website (https://www.biblegateway.com/).')
			await interaction.reply({ embeds: [embed3] });
		} else if (query === '/help') {
			const embed4 = new EmbedBuilder()
                .setColor('Blue')
				.setTitle('Help')
                .setDescription('This commands lists all of the commands which SearchingScripture can operate.')
			await interaction.reply({ embeds: [embed4] });
        } else if (query === '/info') {
			const embed5 = new EmbedBuilder()
                .setColor('Blue')
				.setTitle('/information')
                .setDescription('This gives information about other commands and their usage, operation and how they work in the background.')
			await interaction.reply({ embeds: [embed5] });
        } else if (query === '/ping') {
			const embed6 = new EmbedBuilder()
                .setColor('Blue')
				.setTitle('Ping')
                .setDescription('Replies with the bot ping')
			await interaction.reply({ embeds: [embed6] });
        } else if (query === '/random') {
			const embed7 = new EmbedBuilder()
                .setColor('Blue')
				.setTitle('Random')
                .setDescription('This command gives a random theological idea and different views surrounding the doctrine.')
			await interaction.reply({ embeds: [embed7] });
        } else if (query === '/botinfo') {
			const embed8 = new EmbedBuilder()
                .setColor('Blue')
				.setTitle('Bot information')
                .setDescription('Replies with information about the bot - name, creation date, version and number of servers that I am in')
			await interaction.reply({ embeds: [embed8] });
        } else if (query === '/changelog') {
			const embed9 = new EmbedBuilder()
                .setColor('Blue')
				.setTitle('Changelog')
                .setDescription('This gives the most recent release notes as well as the list of all changes made to SearchingScripture.')
			await interaction.reply({ embeds: [embed9] });
        } else if (query === '/prune') {
			const embed10 = new EmbedBuilder()
                .setColor('Blue')
				.setTitle('Prune')
                .setDescription('Prunes (deletes) up to 99 messages in the current channel')
			await interaction.reply({ embeds: [embed10] });
        } else if (query === '/reactrole') {
			const embed11 = new EmbedBuilder()
                .setColor('Blue')
				.setTitle('Reaction roles')
                .setDescription('This sets up a reaction role message. Currently designed for the Divine Discussion discord.')
			await interaction.reply({ embeds: [embed11] });
        } else if (query === '/server') {
			const embed12 = new EmbedBuilder()
                .setColor('Blue')
				.setTitle('Server')
                .setDescription('Provides information about the server - name of the server and number of members.')
			await interaction.reply({ embeds: [embed12] });
        } else if (query === '/user') {
			const embed13 = new EmbedBuilder()
                .setColor('Blue')
				.setTitle('User')
                .setDescription('Provides information about the user - join date and username.')
			await interaction.reply({ embeds: [embed13] });
        }
  },
};