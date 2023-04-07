const { SlashCommandBuilder, Embed } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('random')
        .setDescription('This gives a random theological idea.'),
    async execute (interaction) {

        // Define an array of embeds
        const embeds = [

            new EmbedBuilder()
            .setColor('Blue')
            .setTitle('A random theological idea')
            .setDescription('Heaven: the ultimate destination for believers in Jesus Christ. It is a place of eternal joy, peace, and fellowship with God.')
            .addFields({ name: "Catholic view", value: " Catholics believe in the existence of heaven as a real and tangible place, and that it is a state of being in perfect communion with God. Catholics believe that those who die in a state of grace and are free from mortal sin will be admitted to heaven (C1023-1026)."})
            .addFields({ name: "Protestant view", value: " Protestants believe in the reality of heaven as a place where believers will be with God forever. Protestants believe that heaven is a free gift of God's grace to those who trust in Jesus Christ alone for salvation (John 14:2-3; Romans 6:23; Ephesians 2:8-9)." }),

            new EmbedBuilder()
            .setColor('Blue')
            .setTitle('A random theological idea')
            .setDescription("Hell: the ultimate destination for those who reject God's gift of salvation. It is a place of eternal punishment and separation from God")
            .addFields({ name: "Catholic view", value: "Catholics believe in the reality of hell as a place of eternal punishment for those who die in a state of mortal sin and reject God's gift of salvation (C1033-1037). Catholics believe that hell is a place or state of complete separation from God and that it is not possible to repent and be saved after death."})
            .addFields({ name: "Protestant view", value: "Protestants believe in the reality of hell as a place of eternal punishment for those who reject God's gift of salvation. Protestants believe that hell is a place of eternal separation from God and that it is the destiny of those who do not place their faith in Jesus Christ (Matthew 25:46; Revelation 20:15)." }),

            new EmbedBuilder()
            .setColor('Blue')
            .setTitle('A random theological idea')
            .setDescription('Purgatory: a state or process of purification after death for those who die in a state of grace but are not yet completely free from venial sin.')
            .addFields({ name: "Catholic view", value: "Catholics believe in the existence of purgatory as a place or state of purification after death for those who die in a state of grace but are not yet completely free from venial sin. Catholics believe that the souls in purgatory can be helped by the prayers and sacrifices of the living, and that it is possible to obtain indulgences that can shorten the time spent in purgatory (C1030-1032)."})
            .addFields({ name: "Protestant view:", value: "Protestants do not believe in the existence of purgatory as a separate state or place of purification after death. Protestants believe that believers are made perfect through the work of Christ on the cross, and that there is no need for any additional purification after death (Hebrews 10:10-14)." }),

            new EmbedBuilder()
            .setColor('Blue')
            .setTitle('A random theological idea')
            .setDescription('Justification: the act of God declaring a sinner to be righteous on the basis of faith in Jesus Christ.')
            .addFields({ name: "Catholic view", value: "Catholics believe in the doctrine of justification by faith, but also believe that good works play a role in the process of justification. Catholics believe that justification is a process that includes faith, repentance, and good works, and that it is possible to lose one's state of justification through mortal sin (C1987-2029)."})
            .addFields({ name: "Protestant (Calvinist) view", value: "Protestants believe in the doctrine of justification by faith alone. Protestants believe that justification is a free gift of God's grace, received by faith alone in Jesus Christ, and that good works are the fruit and evidence of true faith, but do not play a role in justification itself. Protestants emphasize that justification is an instantaneous act of God's declaration, not a process, and that it is a one-time event that can never be lost (Romans 3:21-28, Galatians 2:16, Ephesians 2:8-9)." })
            .addFields({ name: "Eastern Orthodox view", value: "Eastern Orthodox Christians also believe in the doctrine of justification, but view it as a process that includes faith, repentance, and good works, and that it is ongoing throughout the believer's life. They emphasize the importance of synergy, the cooperation between God and the believer, in the process of justification (Romans 2:13, Philippians 2:12-13)."}),

            new EmbedBuilder()
            .setColor('Blue')
            .setTitle('A random theological idea')
            .setDescription('Baptism: a Christian sacrament in which a person is immersed in or sprinkled with water as a symbol of spiritual cleansing and rebirth.')
            .addFields({ name: "Catholic view", value: "Catholics believe that baptism is necessary for salvation, as it is the sacrament of regeneration and the gateway to the Christian life. Catholics practice infant baptism, as they believe that baptism is a means of receiving God's grace and becoming part of the Church. Catholics also believe that baptism removes the stain of original sin and bestows sanctifying grace upon the recipient (C1213-1284)."})
            .addFields({ name: "Protestant view", value: "Protestants hold that baptism is an outward symbol of an inward change, and that it is a public declaration of faith in Jesus Christ. Protestants practice both infant baptism and believer's baptism, although the latter is more common among Baptists and other evangelical Protestants. Protestants do not believe that baptism is necessary for salvation, but they do see it as an important step of obedience and a public testimony of faith (Westminster Confession of Faith, 28:1)." }),

            new EmbedBuilder()
            .setColor('Blue')
            .setTitle('A random theological idea')
            .setDescription("Eucharist: the Eucharist, also known as Communion or the Lord's Supper, is a Christian sacrament in which bread and wine are consecrated and consumed as a symbol of Christ's body and blood.")
            .addFields({ name: "Catholic view", value: "Catholics believe in the doctrine of transubstantiation, which holds that the bread and wine of the Eucharist become the literal body and blood of Christ during the consecration. Catholics believe that the Eucharist is the source and summit of the Christian life, and that it is a sacrament of unity, sacrifice, and love. Catholics also believe that the Eucharist can only be administered by a validly ordained priest (C1322-1419)."})
            .addFields({ name: "Protestant view", value: "Protestants have varying beliefs about the Eucharist. Some, like Lutherans and Anglicans, hold to the doctrine of consubstantiation, which holds that Christ's body and blood are present 'in, with, and under' the bread and wine. Others, like Calvinists and Reformed Christians, believe in a spiritual presence of Christ in the elements, while still others, like Baptists and some non-denominational Christians, view the Eucharist as a symbolic remembrance of Christ's sacrifice on the cross (Westminster Confession of Faith, 29:7)." }),

            new EmbedBuilder()
            .setColor('Blue')
            .setTitle('A random theological idea')
            .setDescription('Sacrament Theology:  the branch of Christian theology that deals with the nature and efficacy of the sacraments.')
            .addFields({ name: "Catholic view", value: "Catholics hold to the doctrine of sacramental efficacy, which holds that the sacraments are effective signs of God's grace and that they confer the grace they signify. Catholics recognize seven sacraments: Baptism, Confirmation, Eucharist, Penance, Anointing of the Sick, Holy Orders, and Matrimony. Catholics believe that the sacraments are necessary for salvation and that they are administered by validly ordained priests (C1131-1209)."})
            .addFields({ name: "Protestant view", value: "Protestants have varying beliefs about the sacraments. Some, like Lutherans and Anglicans, recognize two sacraments (Baptism and the Eucharist) and hold to the doctrine of sacramental efficacy. Others, like Calvinists and Reformed Christians, believe in the spiritual efficacy of the sacraments and recognize only two sacraments (Baptism and the Lord's Supper). Non-denominational Christians may have different views on the sacraments altogether." }),

            new EmbedBuilder()
            .setColor('Blue')
            .setTitle('A random theological idea')
            .setDescription('Trinity: the Trinity is the Christian doctrine that God is one being in three persons: Father, Son, and Holy Spirit.')
            .addFields({ name: "Catholic view", value: "Catholics affirm the doctrine of the Trinity and believe that the Father, Son, and Holy Spirit are distinct persons who share the same divine nature. Catholics hold that the Holy Spirit proceeds from the Father and the Son (Filioque) and that the Trinity is a mystery that can be apprehended but not comprehended (C253-256)."})
            .addFields({ name: "Eastern Orthodox view", value: "Orthodox Christians affirm the doctrine of the Trinity and hold that the Father, Son, and Holy Spirit are distinct persons who share the same divine nature. Orthodox Christians reject the Filioque clause and hold that the Holy Spirit proceeds only from the Father. The Orthodox Church teaches that the Trinity is a mystery that can be apprehended but not comprehended, and that the experience of God as Trinity is the goal of the Christian life." }),

            new EmbedBuilder()
            .setColor('Blue')
            .setTitle('A random theological idea')
            .setDescription('Apologetics: the religious discipline of defending religious doctrines through systematic argumentation and discourse')
            .addFields({ name: "More information", value: "Apologetics is a branch of theology that defends the Christian faith against objections and challenges from other religions, philosophies, or worldviews. Apologetics uses both natural reason and divine revelation to present the truth and reasonableness of Christian doctrine. Apologetics also aims to evangelize and persuade non-Christians to accept the gospel message. Different Christian traditions may have different approaches or emphases in apologetics, such as presuppositionalism, evidentialism, or classical apologetics."}),

            new EmbedBuilder()
            .setColor('Blue')
            .setTitle('A random theological idea')
            .setDescription('Predestination: the doctrine that God has eternally chosen those whom he intends to save')
            .addFields({ name: "Catholic view", value: "Predestination is compatible with human free will, as God’s grace does not force anyone to accept or reject it. God’s foreknowledge of human choices does not imply causation or determination. Predestination is based on God’s mercy and justice, and is a mystery that cannot be fully understood by human reason."})
            .addFields({ name: "Protestant view", value: "Predestination is based on God’s sovereign will and grace, and not on human merit or works. God has predestined some people to salvation (the elect) and others to damnation (the reprobate). Different Protestant traditions have different views on the extent and nature of predestination, such as Calvinism, Arminianism, Lutheranism, etc." })
            .addFields({ name: "Eastern Orthodox view", value: "Predestination is rejected as a doctrine that limits God’s love and human freedom. God desires the salvation of all people and offers his grace to everyone, but he respects human free will and allows people to accept or reject his grace. Predestination is seen as a human attempt to rationalize the mystery of God’s providence and judgment." })
            .addFields({ name: "Divine providence", value: "The doctrine that God is in complete control of all things in the universe, and that he cares for and directs all things with wisdom and love"}),

            new EmbedBuilder()
            .setColor('Blue')
            .setTitle('A random theological idea')
            .setDescription('Atonement theory: the branch of Christian theology that deals with the meaning and significance of the death of Jesus Christ for the salvation of humanity')
            .addFields({ name: "Ransom theory", value: "The theory that God paid a ransom to Satan, who had legal rights over humanity due to sin, in order to free humanity from his bondage. The ransom was the life of Jesus Christ, who voluntarily gave himself up to death on the cross. (Mark 10:45)"})
            .addFields({ name: "Substitution/ satisfaction theory", value: "The theory that Jesus Christ satisfied the demands of God’s justice and honor by offering himself as a substitute for humanity’s sin. By dying on the cross, Jesus Christ paid the debt that humanity owed to God and restored the broken relationship between them (1 John 2:2, John 1:29" })
            .addFields({ name: "Moral influence theory", value: "The theory that Jesus Christ died as an example of God’s love and grace for humanity, and that his death inspires moral change and repentance in those who witness it. By dying on the cross, Jesus Christ demonstrated the extent of God’s love and forgiveness, and motivated people to follow his teachings and example (Ephesians 5:1-2)" }),

            new EmbedBuilder()
            .setColor('Blue')
            .setTitle('A random theological idea')
            .setDescription('Original sin: the Christian doctrine that holds that humans, through the fact of birth, inherit a tainted nature in need of regeneration and a proclivity to sinful conduct. It is based on the biblical story of Adam and Eve’s disobedience to God in the Garden of Eden (Genesis 3), and the consequences of their sin for all humanity (Romans 5:12-21).')
            .addFields({ name: "Catholic view", value: "Original sin is erased by baptism, but its effects remain in human nature. As a result of original sin, human nature is weakened in its powers, but not destroyed, subject to ignorance, suffering and the domination of death, and inclined to sin (this inclination is called 'concupiscence'). (CCC 416-418)"})
            .addFields({ name: "Protestant view", value: "Different Protestant traditions have different views on the extent and nature of original sin, such as Calvinism, Arminianism, Lutheranism, etc. For example, Calvinists believe that original sin totally depraves human nature, making it unable to choose or do good without God’s intervention. The Westminster Confession of Faith states: “[Adam and Eve] became dead in sin, and wholly defiled in all the parts and faculties of soul and body. They being the root of all mankind, the guilt of this sin was imputed; and the same death in sin, and corrupted nature, conveyed to all their posterity descending from them by ordinary generation.” (WCF 6.1-3)" })
            .addFields({ name: "Eastern Orthodox view", value: "Original sin does not mean that humans inherit the guilt or blame of Adam and Eve’s sin, but rather the consequences, such as death, corruption, and a tendency to sin. The Orthodox Church also maintains that human free will is not lost or impaired by original sin, but rather needs to be healed and restored by God’s grace. The Orthodox Church does not use the term original sin, but rather ancestral sin (Greek: προπατορικὴ ἁμαρτία), to describe the inherited condition of humanity after the fall of Adam and Eve. The Orthodox theologian John Meyendorff states: 'The doctrine of ‘original sin’ as inherited guilt - which became official in Augustinianism - was never accepted in the East…The Eastern Fathers never suggest that anyone bears any personal responsibility for a ‘sin’ committed before his birth…The ‘ancestral’ or ‘original’ sin is not an act but a state - a state into which humanity falls when its personal communion with God is broken.' (Byzantine Theology)" }),

            new EmbedBuilder()
            .setColor('Blue')
            .setTitle('A random theological idea')
            .setDescription('Five points of Calvinism: a summary of some key Calvinist doctrine. Arguably not coming from John Calvin himself, an easy-to-remember acrostic of the word TULIP which covers important theological subject areas.')
            .addFields({ name: "Total depravity", value: "The doctrine that human nature is corrupted by sin in every aspect: mind, will, emotions, and body. As a result, humans are unable to do anything good or pleasing to God, and are totally dependent on God’s grace for salvation (Romans 3:10-18; Ephesians 2:1-3)"})
            .addFields({ name: "Uncondition election", value: "The doctrine that God chooses some people to be saved by his sovereign will and grace, not based on any foreseen merit or faith in them. God’s election is eternal and unchangeable, and is the ultimate cause of human salvation (Romans 8:28-30; Ephesians 1:3-14)"})
            .addFields({ name: "Limited atonement", value: "The doctrine that Jesus Christ died only for the sins of the elect, those whom God has chosen to save. His death is sufficient for all, but efficient only for those who believe. His death fully satisfied God’s justice and wrath for the sins of his people (John 10:11-18; 1 Peter 3:18)"})
            .addFields({ name: "Irrestible grace", value: "The doctrine that God’s grace is effectual and irresistible in bringing his elect to faith and repentance. God’s grace overcomes the resistance of the human will and enables them to believe and obey the gospel (John 6:37-40; Philippians 2:12-13)"})
            .addFields({ name: "Perseverance of the saints", value: "The doctrine that God preserves his elect in faith and holiness until the end. Those whom God has saved cannot lose their salvation, but will continue to grow in grace and bear fruit until they reach glory (John 10:27-29; Philippians 1:6)" }),

            new EmbedBuilder()
            .setColor('Blue')
            .setTitle('A random theological idea')
            .setDescription('Christological heresies: false teachings about the nature and person of Jesus Christ that contradict the biblical and ecumenical doctrines of the Christian faith')
            .addFields({ name: "Arianism", value: "The heresy that Jesus Christ was a created being, not coeternal or consubstantial with God the Father. Arianism denies the full divinity of Jesus Christ and his equality with God the Father (John 1:1-14; Colossians 1:15-20; Hebrews 1:1-4)"})
            .addFields({ name: "Monophysitism", value: "The heresy that Jesus Christ had only one nature, either divine or a mixture of divine and human. Monophysitism denies the full humanity of Jesus Christ and his distinction from God the Father (John 1:14; Philippians 2:5-11; 1 John 4:2-3)"})
            .addFields({ name: "Nestorianism", value: "The heresy that Jesus Christ was two separate persons, one divine and one human, in one body. Nestorianism denies the unity of Jesus Christ and his singular identity as the Son of God (Luke 1:35; John 10:30; Galatians 4:4-5)"})
            .addFields({ name: "Docetism", value: "The heresy that Jesus Christ only appeared to be human, but was not really incarnate in flesh and blood. Docetism denies the reality of Jesus Christ’s human life, death, and resurrection (John 1:14; Romans 1:3-4; 1 John 1:1-3)"})
            .addFields({ name: "Orthodox view of Christology", value: "Jesus is one person of the Trinity. He has two natures: fully divine and fully human, without confusion, division, separation, or change, these are distinct but united into one person in the hypostatic union. The hypostatic union affirms the full divinity and full humanity of Jesus Christ and his identity as the Son of God. (John 1:14; Colossians 2:9; Hebrews 2:14-18) He is consubstantial (of the same essence) and coeternal with the Father. (John 10:30; Colossians 1:15-17; Revelation 22:13)" }),

            new EmbedBuilder()
            .setColor('Blue')
            .setTitle('A random theological idea')
            .setDescription('The problem of evil: the challenge that the existence of evil and suffering poses to the belief in an omnipotent (all-powerful) and omnibenevolent (all-good) God')
            .addFields({ name: "The problem of evil", value: "Epicurus, a Greek philosopher, formulated the problem of evil as follows:\n- If God is willing to prevent evil, but not able, then he is not omnipotent.\n- If God is able to prevent evil, but not willing, then he is not omnibenevolent.\n- If God is both willing and able to prevent evil, then why does evil exist?\n- If God is neither willing nor able to prevent evil, then why call him God?\nJ.L. Mackie, an atheist philosopher, presented the problem of evil as an inconsistent triad: a set of three propositions that cannot all be true at the same time. He proposed the following triad:\n- God is omnipotent, God is omnibenevolent, Evil exists.\n Mackie argued that these propositions were logically incompatible, and thus that at least one of them must be false. He concluded that either God does not exist, or he is not omnipotent or omnibenevolent. Indeed, many Christian responses to the problem argue that either God is not omnipotent or that evil is not evil in the human sense of the word."})
            .addFields({ name: "Augustinian 'free will' theodicy", value: "A response to the problem of evil is known as a theodicy. The free will theodicy argues that God gave humans free will, which is a great good, but also allows them to choose evil. Evil and suffering are the result of human misuse of free will, not God’s fault. God respects human freedom and does not intervene to prevent evil, but He offers grace and forgiveness to those who repent. (Genesis 3; John 3:16; Romans 5:8)" })
            .addFields({ name: "John Hick's 'soul-making' (Irenaean) theodicy", value: "This response argues that God allows evil and suffering as a means of testing and refining human character. Evil and suffering are necessary for spiritual growth and moral development. Without great suffering, there would not be the opportunity of holiness and goodness. Sin and evil are necessary conditions for humans to grow into creatures of love and compassion. God does not cause evil, but He permits it for a greater good. (Romans 5:3-5; James 1:2-4; 1 Peter 1:6-7)"})
            .addFields({ name: "Bigger picture theodicy", value: "This response argues that God has a morally sufficient reason for allowing evil and suffering, even if we do not know what it is. God has a perfect plan that includes both good and evil, and he works all things together for good for those who love him. Evil and suffering are part of a larger picture that only God can see. (Job 38-42; Isaiah 55:8-9; Romans 8:28)"})
            .setImage('https://jonathandavidgarner.files.wordpress.com/2014/11/hmeard4.png?w=640'),

            new EmbedBuilder()
            .setColor('Blue')
            .setTitle('A random theological idea')
            .setDescription('Spiritual gifts: special abilities or manifestations of the Holy Spirit, such as speaking in toungues (glossolalia) or prophesy, given to Christians for the purpose of serving and edifying the church and glorifying God for their advocates, or means of glorifying people for the more skeptical.')
            .addFields({ name: "Continualism and cessationism", value: "the belief that all the spiritual gifts mentioned in the New Testament, including those of a miraculous or supernatural nature, such as speaking in tongues, prophecy, healing, and miracles, are still available to the church today and should be sought after and practiced. Continualism is opposed to cessationism, which is the belief that some or all of these gifts have ceased or been withdrawn by God after the apostolic age or the completion of the biblical canon"})
            .addFields({ name: "Pentecostalism", value: "a Christian movement that emphasizes the experience and manifestation of the Holy Spirit in the life of the believer, especially through baptism in the Holy Spirit and speaking in tongues. Pentecostalism traces its origins to the Azusa Street Revival in Los Angeles in 1906, where many people claimed to receive the baptism in the Holy Spirit and speak in other languages as a sign of God’s power and presence. Pentecostalism is continuationist, as it affirms that all the spiritual gifts are operative today and that God continues to speak and act through them"})
            .addFields({ name: "1 Corinthians 12-14", value: "These chapters deal with the nature, purpose, and regulation of spiritual gifts in the church. Paul lists various gifts, such as wisdom, knowledge, faith, healing, miracles, prophecy, discernment, tongues, and interpretation (12:8-10). He also teaches that all gifts are given by the same Spirit for the common good of the body of Christ (12:4-7), that all members are equally important and interdependent (12:12-31), that love is the greatest virtue and motivation for using gifts (13:1-13), that prophecy is superior to tongues for edification (14:1-25), and that all things should be done decently and in order (14:26-40)." })
            .addFields({ name: "1 Corinthians 13:8-10", value: "This passage is part of Paul’s famous chapter on love as the greatest virtue. It says that love never ends, but prophecies will pass away, tongues will cease, and knowledge will pass away (13:8). It also says that these gifts are partial and imperfect, but when the perfect comes, the partial will pass away (13:9-10). \n Additionally, John Calvin speaks of miracles as 'seals' added to the Word of God, and he warns that miracles must never be separated from the Word. When connected to the Word of God, miracles serve 'to prepare us for faith, or to confirm us in faith.' But when miracles are divorced from God's Word, they 'bring glory to creatures and not God.'" })
            .addFields({ name: "Bible interpretation", value: "Continualists argue that 1 Corinthians 12-14 shows that spiritual gifts are essential for the edification of the church and that Paul does not indicate any expiration date for them. They also argue that Ephesians 4:11-16 implies that spiritual gifts are needed until Christ returns and his church reaches full maturity. They also argue that Hebrews 2:4 shows that God still confirms his gospel message with miraculous signs and wonders today.Cessationists argue that 1 Corinthians 13:8-10 implies that some spiritual gifts were temporary and would cease when something more perfect came. They differ on what this “perfect” thing is. Some say it is the completion of the biblical canon or the maturity of the church. Others say it is the second coming of Christ or the consummation of God’s kingdom. They also argue that some spiritual gifts were foundational and apostolic, such as prophecy and miracles, and were not meant to continue after the apostolic age."}),

            new EmbedBuilder()
            .setColor('Blue')
            .setTitle('A random theological idea')
            .setDescription('Mariology: the theological study of Mary, the mother of Jesus, and her role and identity in relation to other doctrines of the Christian faith.')
            .addFields({ name: "Catholic view", value: "Mary is venerated as the Mother of God, the Immaculate Conception, the Assumed Virgin, the Mediatrix, and the Co-Redemptrix. She is the model of faith, grace, and holiness for all Christians. She intercedes for the church and cooperates with Christ in the work of redemption. (C963-975; Luke 1:28-49; Revelation 12:1-6)" })
            .addFields({ name: "Protestant view", value: "Mary is respected as the mother of Jesus and a faithful servant of God. She is not a mediator or a co-redeemer with Christ. She is not immaculately conceived or bodily assumed into heaven. She is not an object of worship or devotion. (1 Timothy 2:5; Romans 3:23; Acts 1:14)" })
            .addFields({ name: "Eastern Orthodox view", value: "Mary is honored as the Theotokos (God-bearer), the Ever-Virgin, the All-Holy, and the Queen of Heaven. She is the highest among the saints and a source of blessing and protection for the faithful. She participates in the divine energies and shares in Christ’s glory. (The Nicene Creed; Luke 1:35; John 2:1-11" }),
            ];
  
        // Choose a random embed
        const randomEmbed = embeds[Math.floor(Math.random() * embeds.length)];
        await interaction.reply({ embeds: [randomEmbed] });
    }
};