const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const config = require('../../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('changelog')
        .setDescription('Gives information about the latest updates/changes'),
    async execute (interaction) {

        const embed1 = new EmbedBuilder()
        .setColor('Blue')
        .setTitle('Changelog')
        .setDescription(`Current version: ${config.version} - page 1`)
        .addFields({ name: "Page 1", value: "Home"})
        .addFields({ name: "Page 2", value: "Release notes"})
        .addFields({ name: "Page 3", value: "Changelog"})
        .addFields({ name: "Support", value: "DM ninjabem#6995 to report any bugs or issues."})

        const embed2 = new EmbedBuilder()
        .setColor('Blue')
        .setTitle('Release notes')
        .setDescription('Information about the most recent changes - page 2')
        .addFields({ name: "Release 1.0.0", value: "- Added /random\n- Added /info\n- Improved /ping to look better (now using embeds)"})
        .setFooter({ text: `Current version: ${config.version}`})

        const embed3 = new EmbedBuilder()
        .setColor('Blue')
        .setTitle('Changelog')
        .setDescription('List of all the changes made to SearchingScripture - page 3')
        .addFields({ name: "Alpha 0.1", value: "- Created the SearchingScripture bot.\n- Added /prune, /server, /user, /avatar and /ping commands"})
        .addFields({ name: "Alpha 0.2", value: "- Added ping functionality (ms delay)\n- Added /botinfo\n- Added a custom status"})
        .addFields({ name: "Beta 0.1", value: "- Added /biblegateway\n- Added /help"})
        .addFields({ name: "Beta 0.2", value: "- Added the command /reactroles\n**Beta 0.2.1**\n- Fixed custom status of the bot\n- Improved /biblegateway to allow for multiple verses/passages\n- Fixed /reactroles"})
        .addFields({ name: "Beta 0.3", value: "- Added /changelog.\n- Improved /biblegateway to allow for different translations (NIVUK is still the default)\n- Improved /biblegateway to not require a specific verse\n- Added /bible to get a specific Bible reference as a message\n**Beta 0.3.1**\n- Fixed /bible (now using the bible-api.com API)\n- Minor tweaks with the code - now using event handling\n**Beta 0.3.2**\n- Improved /botinfo, /server, /user to look better (using embeds)."})
        .addFields({ name: "Beta 0.4", value: "- Improved /bible to work with multiple Bible versions\n- Give autocomplete options for /bible\n- Send /bible as an embed\n- Added server count to /botinfo\n- Improved /avatar to look better (now using embeds)"})
        .addFields({ name: "Release 1.0.0", value: "- Added /random\n- Added /info\n- Improved /ping to look better (now using embeds)"})
        .setFooter({ text: `Current version: ${config.version}`})

        const button = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId(`page1`)
            .setLabel(`Page 1`)
            .setStyle(ButtonStyle.Success),

            new ButtonBuilder()
            .setCustomId('page2')
            .setLabel(`Page 2`)
            .setStyle(ButtonStyle.Success),

            new ButtonBuilder()
            .setCustomId(`page3`)
            .setLabel(`Page 3`)
            .setStyle(ButtonStyle.Success),
        )

        const message = await interaction.reply({ embeds: [embed1], components: [button] });
        const collector = await message.createMessageComponentCollector();

        collector.on('collect', async i => {

	        if (i.customId === `page1`) {

		        if (i.user.id !== interaction.user.id) {
			        return await i.reply({ content: `Only $(interaction.user.tag) can used these buttons!`, ephemeral: true})
		        }
		        await i.update({ embeds: [embed1], components: [button] })
	        }

            if (i.customId === `page2`) {

                if (i.user.id !== interaction.user.id) {
                    return await i.reply({ content: `Only ${interaction.user.tag} can use these buttons!`, ephemeral: true})
                }
                await i.update({ embeds: [embed2], components: [button] })
            }

            if (i.customId === `page3`) {

                if (i.user.id !== interaction.user.id) {
                    return await i.reply({ content: `Only ${interaction.user.tag} can use these buttons!`, ephemeral: true})
                }
                await i.update({ embeds: [embed3], components: [button] })
            }
        })

    }
}