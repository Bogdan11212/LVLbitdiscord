module.exports = [{
    name: "$alwaysExecute",
    $if: "old",
    code: `$if[$getUserVar[xp]<$getUservar[maxxp]]
    $setUserVar[xp;$sum[$getUserVar[xp];$random[$math[10*$getGuildvar[xpmnoz]];$math[20*$getGuildvar[xpmnoz]]]]]
    $else
    $reply
    $title[Поздравляю!]
    $description[Вы повысили свой уровень!]
    $addTimestamp
    $addField[> **Новый уровень**;\`\`$getUservar[lvl]\`\`;yes]
    $color[$getGuildvar[color]]
    $setUserVar[maxxp;$sum[$getUserVar[maxxp];500]]
    $setUserVar[lvl;$sum[$getUserVar[lvl];1]]
    $setUserVar[xp;0]
    $endif`
}]