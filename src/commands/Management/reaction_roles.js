const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { PermissionsBitField, ButtonStyle, EmbedBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('reactrole')
    .setDescription('This is the reaction role message command')
    .addRoleOption(option => option.setName('protestant').setDescription('If you go to a Protestant church/adhere to Protestant doctrine, this is for you!').setRequired(true))
    .addRoleOption(option => option.setName('catholic').setDescription('If you go to a Catholic church/adhere to Catholic doctrine, this is for you!').setRequired(true))
    .addRoleOption(option => option.setName('otherdenomination').setDescription('If you go to a nondenominational or Greek Orthodox church this is for you!').setRequired(true))
    .addRoleOption(option => option.setName('nonchristian').setDescription('If you would not consider yourself a Christian yet, this is right for you.').setRequired(true)),
    async execute (interaction) {

        const protestant = interaction.options.getRole('protestant');
        const catholic = interaction.options.getRole('catholic');
        const otherdenomination = interaction.options.getRole('otherdenomination');
        const nonchristian= interaction.options.getRole('nonchristian');

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return await interaction.reply({ content: "You must have admin permissions to create a reaction role message", ephemeral: true});

        const button = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('button1')
            .setLabel(`${protestant.name}`)
            .setStyle(ButtonStyle.Secondary),
            
            new ButtonBuilder()
            .setCustomId('button2')
            .setLabel(`${catholic.name}`)
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setCustomId('button3')
            .setLabel(`${otherdenomination.name}`)
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setCustomId('button4')
            .setLabel(`${nonchristian.name}`)
            .setStyle(ButtonStyle.Secondary),
        )

        const embed = new EmbedBuilder()
        .setColor('Blue')
        .setTitle('Reaction Roles')
        .setDescription(`React with the buttons below to get the specified roles!\nPick ${protestant} if you would consider youself a Protestant, ${catholic} if you belong to Roman Catholicism, ${otherdenomination} if you are a Greek Orthodox or other branch of Christianity, or ${nonchristian} if you wouldn't consider yourself a Christian.`)

        await interaction.reply({ embeds: [embed], components: [button] });

        const collector = await interaction.channel.createMessageComponentCollector();

        collector.on('collect', async(i) => {

            const member = i.member;

            if(i.guild.members.me.roles.highest.position < protestant.position) {
                i.update({ content: "My role is above the role that I'm trying to give; I have shut this reaction role message down.", ephemeral: true});
                return;
            } else if(i.guild.members.me.roles.highest.position < catholic.position) {
                i.update({ content: "My role is above the role that I'm trying to give; I have shut this reaction role message down.", ephemeral: true});
                return;
            } else if(i.guild.members.me.roles.highest.position < otherdenomination.position) {
                i.update({ content: "My role is above the role that I'm trying to give; I have shut this reaction role message down.", ephemeral: true});
                return;
            } else if(i.guild.members.me.roles.highest.position < nonchristian.position) {
                i.update({ content: "My role is above the role that I'm trying to give; I have shut this reaction role message down.", ephemeral: true});
                return;
            }

            if (i.customId === 'button1') {
                member.roles.add(protestant);
                i.reply({ content: `You now have the role: ${protestant.name}`, ephemeral: true});
            }

            if (i.customId === 'button2') {
                member.roles.add(catholic);
                i.reply({ content: `You now have the role: ${catholic.name}`, ephemeral: true});
            }

            if (i.customId === 'button3') {
                member.roles.add(otherdenomination);
                i.reply({ content: `You now have the role: ${otherdenomination.name}`, ephemeral: true});
            }

            if (i.customId === 'button4') {
                member.roles.add(nonchristian);
                i.reply({ content: `You now have the role: ${nonchristian.name}`, ephemeral: true});
            }
            
        })
    }
}

// Credit to MrJAwesome for the code
// https://www.youtube.com/watch?v=vjynGD74wY4