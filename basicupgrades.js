'use strict';

function basicUpgradesPerSec() {
    game.basicUpgrades.buPerSec[2] += game.basicUpgrades.buPerSec[3] * (constants.gameData.updateInterval / 1000);
    game.basicUpgrades.buPerSec[1] += game.basicUpgrades.buPerSec[2] * (constants.gameData.updateInterval / 1000);
    game.basicUpgrades.buPerSec[0] +=  game.basicUpgrades.buPerSec[1] * (constants.gameData.updateInterval / 1000);
    game.gameData.currency += game.basicUpgrades.buPerSec[0] * (constants.gameData.updateInterval / 1000);

    if (game.gameData.currency >= constants.prestigeData.currencyRequired || game.prestigeData.unlockVal == true) {
        game.prestigeData.unlockVal = true;
        makeVisible("prestigeupgrades");
    }
    document.getElementById("currency").innerHTML = numberFormatting(game.gameData.currency, 0);
    document.getElementById("basicupgrade1increase").innerHTML = numberFormatting(game.basicUpgrades.buPerSec[0], 0);
    document.getElementById("basicupgrade2increase").innerHTML = numberFormatting(game.basicUpgrades.buPerSec[1], 0);
    document.getElementById("basicupgrade3increase").innerHTML = numberFormatting(game.basicUpgrades.buPerSec[2], 0);
};

function basicUpgrade(n, id, id2, id3, id4) {
    if (game.basicUpgrades.level[n] < constants.basicUpgrades[n].maxLevel) {
        if (game.gameData.currency >= constants.basicUpgrades[n].cost[game.basicUpgrades.level[n]]) {
            game.gameData.currency -= constants.basicUpgrades[n].cost[game.basicUpgrades.level[n]];
            document.getElementById(id).innerHTML = numberFormatting(constants.basicUpgrades[n].value[game.basicUpgrades.level[n]], 0);
            game.basicUpgrades.buPerSec[n] = constants.basicUpgrades[n].value[game.basicUpgrades.level[n]];
            game.basicUpgrades.level[n]++;
        }
        document.getElementById("currency").innerHTML = numberFormatting(game.gameData.currency, 0);
        document.getElementById(id2).innerHTML = numberFormatting(game.basicUpgrades.level[n], 0) + "/" + numberFormatting(constants.basicUpgrades[n].maxLevel, 0);
        
        if (game.basicUpgrades.level[n] == constants.basicUpgrades[n].maxLevel) {
            document.getElementById(id3).innerHTML = "Max Level Reached";
        }
        else {
            document.getElementById(id3).innerHTML = "Cost: " + numberFormatting(constants.basicUpgrades[n].cost[game.basicUpgrades.level[n]], 0);
        }    
        if (game.basicUpgrades.level[n] == constants.basicUpgrades[n].maxLevel) {
            makeVisible(id4);
        }
    }
};
