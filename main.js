'use strict';

// Occurs when the window loads up.
window.onload = function() {
    initUI();
};

// Main interval.
setInterval(function() {
    tick();
}, constants.gameData.updateInterval);

// Save interval.
setInterval(function() {
    saveGame();
}, constants.gameData.saveInterval);

// Tick function - contains all display/variables to be updated.
function tick() {
    updateGame();
    updateDisplay();
};

function updateGame() {
    // Update all basic upgrade and currency values.
    for (let i = 0; i < game.basicUpgrades.buPerSec.length - 1; i++) {
        game.basicUpgrades.buPerSec[i] += game.basicUpgrades.buPerSec[i + 1] * (constants.gameData.updateInterval / 1000);
    }
    game.gameData.currency += game.basicUpgrades.buPerSec[0] * (constants.gameData.updateInterval / 1000);

    // Check to verify that the player's currency is higher than, or equal to, the currency required to unlock prestige layer one.
    if (game.gameData.currency >= constants.prestigeData.currencyRequired) {
        game.prestigeData.unlockVal = true;
    }

    // Calculate the number of prestige tokens on next reset.
    game.prestigeData.prestigeTokensGained = Math.floor(150 * Math.sqrt(game.gameData.currency / 1e25));
};

// Contains all elements to be updated in the main interval.
function updateDisplay() {
    // Main currencies.
    constants.elements.currencyAmount.innerText = numberFormatting(game.gameData.currency);
    constants.elements.prestigeTokenAmount.innerText = numberFormatting(game.gameData.prestigeTokens);

    // Basic upgrades.
    constants.elements.basicUpgradeIncrease.forEach((x, i) => x.innerHTML = "<strong>" + numberFormatting(game.basicUpgrades.buPerSec[i]) + "</strong>/sec");
    constants.elements.basicUpgradeLevelText.forEach((x, i) => x.innerText = "Level: " + game.basicUpgrades.level[i] + "/" + game.basicUpgrades.maxLevel[i]);
    for (let i = 0; i < constants.elements.basicUpgrades.length; i++) {
        if (game.basicUpgrades.level[i] == game.basicUpgrades.maxLevel[i]) {
            constants.elements.basicUpgradeCost[i].innerText = "Max Level Reached";
        }
        else {
            constants.elements.basicUpgradeCost[i].innerText = "Cost: " + numberFormatting(constants.basicUpgrades[i].cost[game.basicUpgrades.level[i]]);
        }    
    }

    // Prestige upgrades.
    constants.elements.prestigeUpgradeEffect[0].innerHTML = "+<strong>" + game.prestigeUpgrades.totalEffect[0] + "</strong> Levels";
    constants.elements.prestigeUpgradeLevelText.forEach((x, i) => x.innerText = "Level: " + game.prestigeUpgrades.level[i] + "/" + constants.prestigeUpgrades[i].maxLevel);
    for (let i = 0; i < constants.elements.prestigeUpgrades.length; i++) {
        if (game.prestigeUpgrades.level[i] == constants.prestigeUpgrades[i].maxLevel) {
            constants.elements.prestigeUpgradeCost[i].innerText = "Max Level Reached";
        }
        else {
            constants.elements.prestigeUpgradeCost[i].innerText = "Cost: " + numberFormatting(constants.prestigeUpgrades[i].cost[game.prestigeUpgrades.level[i]]);
        }    
    }

    // Other prestige content.
    constants.elements.prestigeButton.innerHTML = "Prestige for <strong>" + numberFormatting(game.prestigeData.prestigeTokensGained) + "</strong> Prestige Tokens";

    // Visibility changes.
    makeVisible(3, game.prestigeData.unlockVal, true, constants.elements.prestigeUpgradesTabText);
    makeVisible(3, game.prestigeData.unlockVal, true, constants.elements.prestigeContainer);
    for (let i = 0; i < game.basicUpgrades.level.length - 1; i++) {
        makeVisible(1, game.basicUpgrades.level[i], game.basicUpgrades.maxLevel[i], constants.elements.basicUpgrades[i + 1]);
    }
};

function initUI() {
    // Loads the saved game.
    loadGame();

    // For/foreach loops used to store HTML elements.
    for (let i = 0; i < 4; i++) {
        constants.elements.basicUpgradeTitles.push(document.getElementById(`basicupgrade${i + 1}title`));
    }
    constants.elements.basicUpgradeTitles.forEach((x, i) => x.innerText = `Basic Upgrade ${i + 1}`);
    for (let i = 0; i < 4; i++) {
        constants.elements.basicUpgrades.push(document.getElementById(`basicupgrade${i + 1}`));
    }
    for (let i = 0; i < 4; i++) {
        constants.elements.basicUpgradeIncrease.push(document.getElementById(`basicupgrade${i + 1}increase`));
    }
    for (let i = 0; i < 4; i++) {
        constants.elements.basicUpgradeCost.push(document.getElementById(`basicupgrade${i + 1}cost`));
    }
    for (let i = 0; i < 4; i++) {
        constants.elements.basicUpgradeLevelText.push(document.getElementById(`leveltext${i + 1}`));
    }
    for (let i = 0; i < 1; i++) {
        constants.elements.prestigeUpgradeLevelText.push(document.getElementById(`leveltext${i + 5}`));
    }
    for (let i = 0; i < 1; i++) {
        constants.elements.prestigeUpgrades.push(document.getElementById(`prestigeupgrade${i + 1}`));
    }
    for (let i = 0; i < 1; i++) {
        constants.elements.prestigeUpgradeTitles.push(document.getElementById(`prestigeupgrade${i + 1}title`));
    }
    for (let i = 0; i < 1; i++) {
        constants.elements.prestigeUpgradeEffect.push(document.getElementById(`prestigeupgrade${i + 1}effect`));
    }
    for (let i = 0; i < 1; i++) {
        constants.elements.prestigeUpgradeCost.push(document.getElementById(`prestigeupgrade${i + 1}cost`));
    }
    
    // Game data displayed.
    document.title = "Idle Prototype v" + constants.gameData.version;
    constants.elements.versionNumber = document.getElementById("versionnumber");
    constants.elements.versionNumber.innerText = "v" + constants.gameData.version + " - Pre-alpha";
    
    // Main currencies.
    constants.elements.currencyAmount = document.getElementById("currency");
    constants.elements.currencyText = document.getElementById("currencytext");
    constants.elements.currencyText.innerText = "Currency: ";
    constants.elements.prestigeTokenAmount = document.getElementById("prestigetokens");
    constants.elements.prestigeTokenText = document.getElementById("prestigetokentext");
    constants.elements.prestigeTokenText.innerText = "Prestige Tokens: ";

    // Basic upgrades.
    constants.elements.basicUpgradesTabText = document.getElementById("basicupgradesswitch");
    constants.elements.basicUpgradesTabText.innerText = "Basic Upgrades";

    // Prestige upgrades.
    constants.elements.prestigeUpgradesTabText = document.getElementById("prestigeupgrades");
    constants.elements.prestigeUpgradesTabText = document.getElementById("prestigeupgradesswitch");
    constants.elements.prestigeUpgradesTabText.innerText = "Prestige Upgrades";
    constants.elements.prestigeUpgradeTitles[0].innerText = "Increase The Max Level Of All Basic Upgrades";

    // Prestige content.
    constants.elements.prestigeContainer = document.getElementById("prestigetokencontainer");
    constants.elements.prestigeButton = document.getElementById("prestigebutton");
    
    // Settings.
    constants.elements.settingsTabText = document.getElementById("settingsswitch");
    constants.elements.settingsTabText.innerText = "Settings";
    constants.elements.manualSave = document.getElementById("manualsave");
    constants.elements.manualSave.innerText = "Save Game";
    constants.elements.hardReset = document.getElementById("hardreset");
    constants.elements.hardReset.innerText = "Reset Game";

    // Onclick function calls.
    constants.elements.basicUpgrades.forEach((x, i) => x.onclick = function() { basicUpgrade(i) });
    constants.elements.prestigeButton.onclick = function() { prestige() };
    constants.elements.prestigeUpgrades[0].onclick = function() { maxLevelIncrease(0) };
    constants.elements.manualSave.onclick = function() { saveGame() };
    constants.elements.hardReset.onclick = function() { resetGame() };

    // Changelog.
    constants.elements.changelogTabText = document.getElementById("changelogswitch");
    constants.elements.changelogTabText.innerText = "Changelog";

    constants.elements.versions.v0001Title = document.getElementById("v0001title");
    constants.elements.versions.v0001Title.innerHTML = "<br>v0.001 (19/09/2020): Pre-alpha";
    constants.elements.versions.v0001Text = document.getElementById("v0001");
    constants.elements.versions.v0001Text.innerHTML = "A very early prototype of an unnamed incremental game; subject to change.<br>- Added a simple save/load/hard reset system.<br><small>NOTE: Autosaves occur every 15 seconds.</small><br>";

    constants.elements.versions.v0002Title = document.getElementById("v0002title");
    constants.elements.versions.v0002Title.innerHTML = "v0.002 (21/09/2020): Pre-alpha";
    constants.elements.versions.v0002Text = document.getElementById("v0002");
    constants.elements.versions.v0002Text.innerHTML = "- Made major changes to the visual appearance of the game using CSS.<br>- Implemented <i>BU1</i> and <i>BU2</i>.<br><small>NOTE: The current max levels for these upgrades are 20 and 5, respectively.<br> These upgrades still require balancing, thus their max levels may be changed in future updates.</small><br>";

    constants.elements.versions.v0003Title = document.getElementById("v0003title");
    constants.elements.versions.v0003Title.innerHTML = "v0.003 (23/09/2020): Pre-alpha"; 
    constants.elements.versions.v0003Text = document.getElementById("v0003");
    constants.elements.versions.v0003Text.innerHTML = "- Changed the interval at which values within the game update,<br> on a per second basis.<br><small>1000ms -> 33ms</small><br>- Added a prestige tab.<br><small>Unlocked at 1e60 currency. No prestige upgrades or capabilities have been added yet.</small><br>- Refactored majority of the source code (can be seen via github).<br><small>Thankyou to 'Asterisk Man' for helping me understand code optimization better.</small><br>- Implemented <i>BU3</i> and <i>BU4</i>.<br><small>NOTE: The current max level for these upgrades is 5. These upgrades still require<br>some balancing, thus their max level may be changed in a future update.</small><br>- Balanced <i>BU1</i> and <i>BU2</i>.<br><small>These basic upgrades have been balanced, with a new max level of 40.</small>";

    constants.elements.versions.v0004Title = document.getElementById("v0004title");
    constants.elements.versions.v0004Title.innerHTML = "v0.004 (27/09/2020): Pre-alpha";
    constants.elements.versions.v0004Text = document.getElementById("v0004");
    constants.elements.versions.v0004Text.innerHTML = "- Made more changes to the visual appearance of the game using CSS.<br>- Changed some of the wording on the BU 1-4 buttons.<br><small>These changes were made in order for the information shown to be more straight-forward<br>and easy to read.</small><br>- Prestige layer 1 is here! Or.. atleast the start of it.<br><small>This feature is unlocked at 1e21 currency. The first prestige upgrade has been implemented<br>in it's very early state.<br>NOTE: Only the first level of this prestige upgrade has been implemented and balanced.<br>Levels 2-5 of this upgrade will be added in v0.005.<br>Reach 1e21 currency to find out what the prestige upgrade is!</small><br>- Rebalanced BU 1-4 to align with the new prestige mechanic.<br><small>I hope that the pacing in this version is better and smoother than in v0.003. Let me know<br>on Discord, at Jayman#8158, if the current content in the game requires further balancing.</small>"; 
};






