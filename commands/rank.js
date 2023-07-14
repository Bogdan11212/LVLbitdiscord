module.exports = ({
  name: "rank",
  code: `
  $djsEval[
    const canvacord = require('canvacord');
    const discord = require('discord.js');
    
    const rank = new canvacord.Rank()
 .setOverlay('#381170', 0, false)  
.setProgressBarTrack('#2b0c56')
.setFontSize('5') 
.setProgressBar('#381170, true')

.setAvatar('$replaceText[$replaceText[$userAvatar[$mentioned[1]];webp;png];gif;png]')
    .setUsername('$replaceTextWithRegex[$username[$mentioned[1]];[^a-z A-Z 0-9 а-я А-Я\s]+;g;]')
   
 
.setDiscriminator('$discriminator[$mentioned[1]]')
    .setStatus('$status[$mentioned[1]]')
    .setLevel($getUserVar[lvl;$mentioned[1]],'Ур. ')

   
.setRank($getLeaderboardInfo[lvl;$mentioned[1];user;top], 'Топ')
  .setCurrentXP($getUserVar[xp;$mentioned[1]])
    .setRequiredXP($getUserVar[maxxp;$mentioned[1]])
    .setBackground('IMAGE', '$getUserVar[fon]')
   
    
    rank.build()
    .then(data => {
      const attachment = new discord.AttachmentBuilder(data, { name: "$username[$mentioned[1]].png"});
      message.reply({ files: [attachment] });
    })]
  `
})