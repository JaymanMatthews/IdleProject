function saveGame() {
    var gameSave = {
        currency: gameData.currency,
        currentCost: basicUpgrades.upgrade1.costArray[basicUpgrades.upgrade1.count],
        currentIncrease: basicUpgrades.upgrade1.increaseArray[basicUpgrades.upgrade1.count],
        currentLevel: basicUpgrades.upgrade1.level,
        currentCount: basicUpgrades.upgrade1.count
    }
    localStorage.setItem("gameSave", JSON.stringify(gameSave))
}

function loadGame() {
    var savedGame = JSON.parse(localStorage.getItem("gameSave"))
    if (localStorage.getItem("gameSave") !== null) {
        if (typeof savedGame.currency !== "undefined") gameData.currency = savedGame.currency
        if (typeof savedGame.currentCost !== "undefined") basicUpgrades.upgrade1.costArray[basicUpgrades.upgrade1.count] = savedGame.currentCost
        if (typeof savedGame.currentIncrease !== "undefined") basicUpgrades.upgrade1.increaseArray[basicUpgrades.upgrade1.count] = savedGame.currentIncrease
        if (typeof savedGame.currentLevel !== "undefined") basicUpgrades.upgrade1.level = savedGame.currentLevel
        if (typeof savedGame.currentCount !== "undefined") basicUpgrades.upgrade1.count = savedGame.currentCount
    }
}

function resetGame() {
    if (confirm("Are you sure that you would like to reset your save?")) {
        var gameSave = {}

        localStorage.setItem("gameSave", JSON.stringify(gameSave))
        location.reload()
    }
}

window.onload = function() {
    loadGame()
    document.getElementById("currency").innerHTML = numberFormatting(gameData.currency, 1)
    document.getElementById("basicupgrade1increase").innerHTML = numberFormatting(basicUpgrades.upgrade1.increaseArray[basicUpgrades.upgrade1.count], 1)
    if (basicUpgrades.upgrade1.level == basicUpgrades.upgrade1.maxLevel) {
        document.getElementById("basicupgrade1cost").innerHTML = "Max Level Reached!"
        document.getElementById("currentlevel").innerHTML = "Max Level Reached!"
        document.getElementById("nextupgradeincrease1").innerHTML = "Max Level Reached!"
    }
    else {
        document.getElementById("basicupgrade1cost").innerHTML = "Cost: " + numberFormatting(basicUpgrades.upgrade1.costArray[basicUpgrades.upgrade1.count], 1)
        document.getElementById("currentlevel").innerHTML = "Level " + numberFormatting(basicUpgrades.upgrade1.level, 0) + "/" + numberFormatting(basicUpgrades.upgrade1.maxLevel, 0)
        document.getElementById("nextupgradeincrease1").innerHTML = "(Upgrade to increase currency by " + numberFormatting(basicUpgrades.upgrade1.increaseArray[basicUpgrades.upgrade1.count + 1], 1) + " per second)"
    }
}