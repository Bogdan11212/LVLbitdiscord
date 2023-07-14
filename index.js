const aoijs = require("aoi.js")
const { Util } = require("aoi.js");
const { parse } = require(`aoi.parser`);
Util.parsers.ErrorHandler = parse;

const bot = new aoijs.AoiClient({
    token: "token",
    prefix: "!",
    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildMembers", "GuildVoiceStates"],
    events: ["onMessage", "onInteractionCreate", "onMessageDelete", "onMessageUpdate", "onGuildJoin", "onChannelCreate", "onChannelUpdate", "onChannelDelete", "onJoin", "onLeave", "onMemberUpdate", "onMemberUpdate", "onVoiceStateUpdate", "onGuildJoin" ]
})


//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, "./commands/")


bot.variables({  
    color:"#303136",
    xp: "0",
    maxxp: "500",
    lvl: "1",
    xpmnoz: "1",
    fon: "https://cdn.discordapp.com/attachments/1101415712582553631/1113466992410755112/c6e805ff54dd28dc.png",
})