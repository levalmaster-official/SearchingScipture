const { SlashCommandBuilder } = require('discord.js');
const fetch = require('node-fetch');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bible')
		.setDescription('Replies with a Bible reference for the given passage')
		.addStringOption(option =>
			option.setName('book')
				.setDescription('The book of the Bible. Most abbreviations are allowed.')
				.setRequired(true)
        .setAutocomplete(true))
		.addIntegerOption(option =>
			option.setName('chapter')
				.setDescription('The chapter of the book')
				.setRequired(true))
    .addStringOption(option =>
      option.setName('passage')
        .setDescription('The verse or verses of the chapter. Multiple chapters are allowed.')
        .setRequired(false))
    .addStringOption(option =>
      option.setName('version')
        .setDescription('The Bible translation used. WEBBE is the default.')
        .setRequired(false)
        .setAutocomplete(true)),
    // Autocomplete for the books of the Bible
  async autocomplete(interaction) {
    const focusedOption = interaction.options.getFocused(true);
    let choices;

    if(focusedOption.name === 'book') {
      choices = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi","Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon","Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation"];
    }

    if (focusedOption.name === 'version') {
      choices = ['cherokee', 'bbe', 'kjv', 'web', 'oeb-cw', 'webbe', 'oeb-us', 'clementine'];
    }

		const filtered = choices.filter(choice => choice.startsWith(focusedOption.value));
    await interaction.respond(
      filtered.map(choice => ({ name: choice, value: choice })),
    );
  },
	async execute(interaction) {
    // Get the user input from the options
    const book = interaction.options.getString('book');
    const chapter = interaction.options.getInteger('chapter');
    const verse = interaction.options.getString('passage');
    const translation = interaction.options.getString('version') || 'webbe';

    // Construct the passage string from the input
    let passage2 = `${book} ${chapter}:${verse}`;

    // Construct the url and headers for the bible-api.com request
    const url = `https://bible-api.com/${book}${chapter}:${verse}?translation=${translation}`;
    
    const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
    };

    // Make the request and parse the response
    fetch(url, options)
    .then(response => response.json())
    .then(json => {
      // Get the text of the verse from the json object
      const text = json.text;
      // The text string is the first value in the text object
      // Send the reply with the text

      const embed = new EmbedBuilder()
        .setColor(`Blue`)
        .setTitle(`${passage2}`)
        .setDescription(`${text}`)
        .setFooter({ text: 'Soli Deo gloria' });
  interaction.reply({ embeds: [embed] })
  })
  .catch(err => console.error('error:' + err));
},
};