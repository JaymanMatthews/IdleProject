'use strict';

function basicUpgrade(n) {
    if ((game.basicUpgrades.level[n] < game.basicUpgrades.maxLevel[n]) && (game.gameData.currency >= constants.basicUpgrades[n].cost[game.basicUpgrades.level[n]])) {
        game.gameData.currency -= constants.basicUpgrades[n].cost[game.basicUpgrades.level[n]];
        game.basicUpgrades.buPerSec[n] += constants.basicUpgrades[n].value[game.basicUpgrades.level[n]];
        game.basicUpgrades.level[n]++;
    }
};
