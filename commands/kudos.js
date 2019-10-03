// noinspection JSUnusedLocalSymbols
exports.run = async (client, message, args, level) => {
    if (!args || args.length >= 2) {
        let member = message.mentions.members.first();
        let kudos = args.slice(1).join(" ");
        message.channel.send({
            embed: {
                color: 3447003,
                author: {
                    name: member.user.username,
                    icon_url: member.user.avatarURL
                },
                title: "Congrats!",
                url: "https://www.google.com/search?q=kudos+feedback",
                description: "Real-time Continuous Peer Feedback",
                fields: [{
                    name: "Good Job " + member.user.username,
                    value: kudos
                }],
                thumbnail: {
                    url: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/military-medal_1f396.png",
                    height: 84,
                    width: 84
                },
                timestamp: new Date(),
                footer: {
                    text: message.author.username,
                    icon_url: message.author.avatarURL
                }
            }
        });
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "Developer"
};

exports.help = {
    name: "kudos",
    category: "Miscelaneous",
    description: "Real-time Continuous Peer Feedback.",
    usage: "kudos [user mention] [feedback text]"
};
