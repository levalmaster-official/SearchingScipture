const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('biblegateway')
		.setDescription('Replies with a Bible Gateway URL for the given reference')
		.addStringOption(option =>
			option.setName('book')
				.setDescription('The book of the Bible')
				.setRequired(true))
		.addIntegerOption(option =>
			option.setName('chapter')
				.setDescription('The chapter of the book')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('verse')
				.setDescription('The verse(s) of the chapter')
				.setRequired(false))
        .addStringOption(option =>
            option.setName('version')
                .setDescription('The version of the Bible')
                .setRequired(false)),
	async execute(interaction) {
		const book = interaction.options.getString('book');
		const chapter = interaction.options.getInteger('chapter');
		const verse = interaction.options.getString('verse');
        const version = interaction.options.getString('version') || 'NIVUK';
		
        let reference;
        let url;

        if (verse) {
            reference = `${book} ${chapter}:${verse}`;
            url = `https://www.biblegateway.com/passage/?search=${encodeURIComponent(reference)}&version=${version}`;
        } else {
            reference = `${book} ${chapter}`;
            url = `https://www.biblegateway.com/passage/?search=${encodeURIComponent(reference)}&version=${version}`;
        }
		
		await interaction.reply(`Here's the Bible Gateway URL for ${reference}: ${url}`);
	},
};