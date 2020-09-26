'use strict';

function prestige() {
    if (game.prestigeData.prestigeTokensGained >= constants.prestigeData.prestigeTokensRequired) {
        game.gameData.prestigeTokens += game.prestigeData.prestigeTokensGained;
        game.gameData.currency = 3;

        for (let i = 0; i < game.basicUpgrades.buPerSec.length; i++) {
            game.basicUpgrades.buPerSec[i] = 0;
        }
        for (let i = 0; i < game.basicUpgrades.level.length; i++) {
            game.basicUpgrades.level[i] = 0;
        }
    }
};

function maxLevelIncrease(n) {
    if ((game.prestigeUpgrades.level[n] < constants.prestigeUpgrades[n].maxLevel) && (game.gameData.prestigeTokens >= constants.prestigeUpgrades[n].cost[game.prestigeUpgrades.level[n]])) {
        game.gameData.prestigeTokens -= constants.prestigeUpgrades[n].cost[game.prestigeUpgrades.level[n]];
        game.prestigeUpgrades.totalEffect[n] += constants.prestigeUpgrades[n].value[game.prestigeUpgrades.level[n]]; 
        for (let i = 0; i < constants.basicUpgrades.length; i++) {
            game.basicUpgrades.maxLevel[i] += constants.prestigeUpgrades[n].value[game.prestigeUpgrades.level[n]]; 
        }
        game.prestigeUpgrades.level[n]++
    }
};