const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('This is the help command!'),
    async execute (interaction) {

        const embed1 = new EmbedBuilder()
        .setColor('Blue')
        .setTitle('Help Centre')
        .setDescription('Help Command Guide- page 1')
        .addFields({ name: "Page 1", value: "Help and resources"})
        .addFields({ name: "Page 2", value: "Utility"})
        .addFields({ name: "Page 3", value: "Management"})
        .addFields({ name: "Support", value: "DM ninjabem#6995 to report any bugs or issues."})

        const embed2 = new EmbedBuilder()
        .setColor('Blue')
        .setTitle('Utility Commands')
        .setDescription('Page 2')
        .addFields({ name: "/avatar", value: "Get the avatar URL of the selected user, or your own avatar."})
        .addFields({ name: "/bible", value: "Replies with the Bible text for the given reference."})
        .addFields({ name: "/biblegateway", value: "Replies with a Bible Gateway URL for the given reference."})
        .addFields({ name: "/help", value: "Gives the list of commands which the bot can perform and support."})
        .addFields({ name: "/info", value: "Gives information on the commands."})
        .addFields({ name: "/random", value: "This gives a random theological idea."})
        .addFields({ name: "/ping", value: "Replies with the bot ping!"})
        .setFooter({ text: "Utility Commands"})

        const embed3 = new EmbedBuilder()
        .setColor('Blue')
        .setTitle('Management Commands')
        .setDescription('Page 3')
        .addFields({ name: "/botinfo", value: "Replies with information about the bot."})
        .addFields({ name: "/changelog", value: "Gives information about the latest updates/changes."})
        .addFields({ name: "/prune", value: "Prunes (deletes) up to 99 messages in this channel."})
        .addFields({ name: "/reactrole", value: "Sets up a reaction role message."})
        .addFields({ name: "/server", value: "Provides information about the server."})
        .addFields({ name: "/user", value: "Provides information about the user."})
        .setFooter({ text: "Management Commands"})

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