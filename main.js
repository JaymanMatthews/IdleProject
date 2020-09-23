'use strict';

setInterval(function() {
    basicUpgradesPerSec();
}, constants.gameData.updateInterval);

setInterval(function() {
    saveGame();
}, constants.gameData.saveInterval);

function initUI() {
    document.getElementById("gamelabel").innerHTML = "Idle Prototype v" + constants.gameData.version;
    document.getElementById("gametitle").innerHTML = "Idle Prototype";
    document.getElementById("versionnumber").innerHTML = "v" + constants.gameData.version + " - Pre-alpha";
    document.getElementById("basicupgrades").innerHTML = "Basic Upgrades";
    document.getElementById("prestigeupgrades").innerHTML = "Prestige Upgrades";
    document.getElementById("settings").innerHTML = "Settings";
    document.getElementById("changelog").innerHTML = "Changelog";
    document.getElementById("prestigetext").innerHTML = "W.I.P";
    document.getElementById("currencytext").innerHTML = "Currency: "
    document.getElementById("currency").innerHTML = numberFormatting(game.gameData.currency, 0);
    document.getElementById("manualsave").innerHTML = "Save Game";
    document.getElementById("manualsave").onclick = () => saveGame();
    document.getElementById("hardreset").innerHTML = "Reset Game";
    document.getElementById("hardreset").onclick = () => resetGame();
    document.getElementById("basicupgrade1").onclick = () => basicUpgrade(0, "basicupgrade1increase", "basicupgrade1level", "basicupgrade1cost", "basicupgrade2");
    document.getElementById("basicupgrade2").onclick = () => basicUpgrade(1, "basicupgrade2increase", "basicupgrade2level", "basicupgrade2cost", "basicupgrade3");
    document.getElementById("basicupgrade3").onclick = () => basicUpgrade(2, "basicupgrade3increase", "basicupgrade3level", "basicupgrade3cost", "basicupgrade4");
    document.getElementById("basicupgrade4").onclick = () => basicUpgrade(3, "basicupgrade4increase", "basicupgrade4level", "basicupgrade4cost", "basicupgrade4");
    document.getElementById("basicupgrade1title").innerHTML = "<i>BU1</i>";
    document.getElementById("basicupgrade2title").innerHTML = "<i>BU2</i>";
    document.getElementById("basicupgrade3title").innerHTML = "<i>BU3</i>";
    document.getElementById("basicupgrade4title").innerHTML = "<i>BU4</i>";
    document.getElementById("gaintext").innerHTML = "Currency Gain: ";
    document.getElementById("gaintext2").innerHTML = "BU1 Production Gain: ";
    document.getElementById("gaintext3").innerHTML = "BU2 Production Gain: ";
    document.getElementById("gaintext4").innerHTML = "BU3 Production Gain: ";
    document.getElementById("basicupgrade1increase").innerHTML = numberFormatting(game.basicUpgrades.buPerSec[0], 0);
    document.getElementById("basicupgrade2increase").innerHTML = numberFormatting(game.basicUpgrades.buPerSec[1], 0);
    document.getElementById("basicupgrade3increase").innerHTML = numberFormatting(game.basicUpgrades.buPerSec[2], 0);
    document.getElementById("basicupgrade4increase").innerHTML = numberFormatting(game.basicUpgrades.buPerSec[3], 0);
    document.getElementById("persectext").innerHTML = "/s";
    document.getElementById("persectext2").innerHTML = "/s";
    document.getElementById("persectext3").innerHTML = "/s";
    document.getElementById("persectext4").innerHTML = "/s";
    document.getElementById("leveltext").innerHTML = "Level: ";
    document.getElementById("leveltext2").innerHTML = "Level: ";
    document.getElementById("leveltext3").innerHTML = "Level: ";
    document.getElementById("leveltext4").innerHTML = "Level: ";
    document.getElementById("basicupgrade1level").innerHTML = numberFormatting(game.basicUpgrades.level[0], 0) + "/" + numberFormatting(constants.basicUpgrades[0].maxLevel, 0);
    document.getElementById("basicupgrade2level").innerHTML = numberFormatting(game.basicUpgrades.level[1], 0) + "/" + numberFormatting(constants.basicUpgrades[1].maxLevel, 0);
    document.getElementById("basicupgrade3level").innerHTML = numberFormatting(game.basicUpgrades.level[2], 0) + "/" + numberFormatting(constants.basicUpgrades[2].maxLevel, 0);
    document.getElementById("basicupgrade4level").innerHTML = numberFormatting(game.basicUpgrades.level[3], 0) + "/" + numberFormatting(constants.basicUpgrades[3].maxLevel, 0);
    
    if (game.basicUpgrades.level[0] == constants.basicUpgrades[0].maxLevel) {
        document.getElementById("basicupgrade1cost").innerHTML = "Max Level Reached";
    }
    else {
        document.getElementById("basicupgrade1cost").innerHTML = "Cost: " + numberFormatting(constants.basicUpgrades[0].cost[game.basicUpgrades.level[0]], 0);
    }

    if (game.basicUpgrades.level[1] == constants.basicUpgrades[1].maxLevel) {
        document.getElementById("basicupgrade2cost").innerHTML = "Max Level Reached"; 
    }
    else {
        document.getElementById("basicupgrade2cost").innerHTML = "Cost: " + numberFormatting(constants.basicUpgrades[1].cost[game.basicUpgrades.level[1]], 0);
    }

    if (game.basicUpgrades.level[2] == constants.basicUpgrades[2].maxLevel) {
        document.getElementById("basicupgrade3cost").innerHTML = "Max Level Reached";  
    }
    else {
        document.getElementById("basicupgrade3cost").innerHTML = "Cost: " + numberFormatting(constants.basicUpgrades[2].cost[game.basicUpgrades.level[2]], 0);
    }

    if (game.basicUpgrades.level[3] == constants.basicUpgrades[3].maxLevel) {
        document.getElementById("basicupgrade4cost").innerHTML = "Max Level Reached";  
    }
    else {
        document.getElementById("basicupgrade4cost").innerHTML = "Cost: " + numberFormatting(constants.basicUpgrades[3].cost[game.basicUpgrades.level[3]], 0);
    }

    if (game.basicUpgrades.level[0] == constants.basicUpgrades[0].maxLevel) {
        makeVisible("basicupgrade2");
    }

    if (game.basicUpgrades.level[1] == constants.basicUpgrades[1].maxLevel) {
        makeVisible("basicupgrade3");
    }

    if (game.basicUpgrades.level[2] == constants.basicUpgrades[2].maxLevel) {
        makeVisible("basicupgrade4");
    }

    if (game.gameData.currency >= constants.prestigeData.currencyRequired || game.prestigeData.unlockVal == true) {
        makeVisible("prestigeupgrades");
    }

    document.getElementById("v0001title").innerHTML = "<br>v0.001 (19/09/2020): Pre-alpha";
    document.getElementById("v0001").innerHTML = "A very early prototype of an unnamed incremental game; subject to change.<br>- Added a simple save/load/hard reset system.<br><small>NOTE: Autosaves occur every 15 seconds.</small><br>";
    document.getElementById("v0002title").innerHTML = "v0.002 (21/09/2020): Pre-alpha";
    document.getElementById("v0002").innerHTML = "- Made major changes to the visual appearance of the game using CSS.<br>- Implemented <i>BU1</i> and <i>BU2</i>.<br><small>NOTE: The current max levels for these upgrades are 20 and 5, respectively.<br> These upgrades still require balancing, thus their max levels may be changed in future updates.</small><br>";
    document.getElementById("v0003title").innerHTML = "v0.003 (23/09/2020): Pre-alpha";
    document.getElementById("v0003").innerHTML = "- Changed the interval at which values within the game update,<br> on a per second basis.<br><small>1000ms -> 33ms</small><br>- Added a prestige tab.<br><small> Unlocked at 1e60 currency. No prestige upgrades or capabilities have been added yet.</small><br>- Refactored majority of the source code (can be seen via github).<br><small>Thankyou to 'Asterisk Man' for helping me understand code optimization better.</small><br>- Implemented <i>BU3</i> and <i>BU4</i>.<br><small>NOTE: The current max level for these upgrades is 5. These upgrades still require<br>some balancing, thus their max level may be changed in a future update.</small><br>- Balanced <i>BU1</i> and <i>BU2</i>.<br><small>These basic upgrades have been balanced, with a new max level of 40.</small>";
};

window.onload = function() {
    loadGame();
    initUI();
};





