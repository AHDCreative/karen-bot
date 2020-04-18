'use strict';

var fs = require('fs');

module.exports = {

    discord: {
        token: "NDg3NjU4MjA5NDExMjAzMDcy.DnQ2xQ.eeFVctvpeRvzaNAVkW7zh2s3SW0",
        adminRole: "FFXIVITA-Staff",
        defaultGuild: "FFXIV ITALIA",
        playing: "FFXIVITA",
        // set 'raw' to 'true' to log all events from discord
        raw: true
    },
    role: {
        "casters": "Casters",
        "caster": "Casters",
        "mage": "Casters",
        "smn": "Casters",
        "blm": "Casters",
        "rdm": "Casters",
        "blu": "Casters",
        "ranged dps": "Ranged DPS",
        "ranged": "Ranged DPS",
        "rangeds": "Ranged DPS",
        "mch": "Ranged DPS",
        "brd": "Ranged DPS",
        "dnc": "Ranged DPS",
        "melee dps": "Melee DPS",
        "melee": "Melee DPS",
        "melees": "Melee DPS",
        "mnk": "Melee DPS",
        "nin": "Melee DPS",
        "sam": "Melee DPS",
        "drg": "Melee DPS",
        "healers": "Healers",
        "healer": "Healers",
        "whm": "Healers",
        "sch": "Healers",
        "ast": "Healers",
        "tanks": "Tanks",
        "pld": "Tanks",
        "drk": "Tanks",
        "war": "Tanks",
        "gnb": "Tanks",
        "tank": "Tanks"
    },
    throttle: {
        "cerca_gruppo": {
            maxTokens: 1,
            tokenInterval: 86400
        },
        "cerca_membri": {
            maxTokens: 1,
            tokenInterval: 86400
        },
    },
    monitor: {
        output: "logs",
        events: [
            "message", "messageDelete", "messageUpdate",
            "guildMemberAdd", "guildMemberRemove"
        ]
    },
    welcome: {
        message: fs.readFileSync("welcome.sample.txt", "utf8")
    },

    purge: {
        /* cron syntax
         *    *    *    *    *
         ┬    ┬    ┬    ┬    ┬
         │    │    │    │    |
         │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
         │    │    │    └───── month (1 - 12)
         │    │    └────────── day of month (1 - 31)
         │    └─────────────── hour (0 - 23)
         └──────────────────── minute (0 - 59)
        */
        "party_finder": "0 4 * * *"
    },

    accuracy: {

    },

    help: {

    },

    clear: {

    },

    commandPrefix: "."
};
