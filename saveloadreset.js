function saveGame() {
    var gameSave = {
        currency: gameData.currency,
        currencyPerSec: gameData.currencyPerSec,
        currentCost1: basicUpgrades.upgrade1.costArray[basicUpgrades.upgrade1.count],
        currentLevel1: basicUpgrades.upgrade1.level,
        currentCount1: basicUpgrades.upgrade1.count,
        currentCost2: basicUpgrades.upgrade2.costArray[basicUpgrades.upgrade2.count],
        currentIncrease2: basicUpgrades.upgrade2.increaseArray[basicUpgrades.upgrade2.count],
        currentLevel2: basicUpgrades.upgrade2.level,
        currentCount2: basicUpgrades.upgrade2.count
    }
    localStorage.setItem("gameSave", JSON.stringify(gameSave))
}

function loadGame() {
    var savedGame = JSON.parse(localStorage.getItem("gameSave"))
    if (localStorage.getItem("gameSave") !== null) {
        if (typeof savedGame.currency !== "undefined") gameData.currency = savedGame.currency
        if (typeof savedGame.currencyPerSec !== "undefined") gameData.currencyPerSec = savedGame.currencyPerSec
        if (typeof savedGame.currentCost1 !== "undefined") basicUpgrades.upgrade1.costArray[basicUpgrades.upgrade1.count] = savedGame.currentCost1
        if (typeof savedGame.currentLevel1 !== "undefined") basicUpgrades.upgrade1.level = savedGame.currentLevel1
        if (typeof savedGame.currentCount1 !== "undefined") basicUpgrades.upgrade1.count = savedGame.currentCount1
        if (typeof savedGame.currency !== "undefined") gameData.currency = savedGame.currency
        if (typeof savedGame.currentCost2 !== "undefined") basicUpgrades.upgrade2.costArray[basicUpgrades.upgrade2.count] = savedGame.currentCost2
        if (typeof savedGame.currentIncrease2 !== "undefined") basicUpgrades.upgrade2.increaseArray[basicUpgrades.upgrade2.count] = savedGame.currentIncrease2
        if (typeof savedGame.currentLevel2 !== "undefined") basicUpgrades.upgrade2.level = savedGame.currentLevel2
        if (typeof savedGame.currentCount2 !== "undefined") basicUpgrades.upgrade2.count = savedGame.currentCount2
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
    makeVisible(basicUpgrades.upgrade1.level, basicUpgrades.upgrade1.maxLevel, "basicupgrade2")
    document.getElementById("versionnumber").innerHTML = "v" + gameData.version
    document.getElementById("currency").innerHTML = numberFormatting(gameData.currency, 0)
    document.getElementById("basicupgrade1increase").innerHTML = numberFormatting(gameData.currencyPerSec, 0)
    document.getElementById("basicupgrade2increase").innerHTML = numberFormatting(basicUpgrades.upgrade2.increaseArray[basicUpgrades.upgrade2.count], 0)
    document.getElementById("basicupgrade1level").innerHTML = numberFormatting(basicUpgrades.upgrade1.level, 0) + "/" + numberFormatting(basicUpgrades.upgrade1.maxLevel, 0)
    document.getElementById("basicupgrade2level").innerHTML = numberFormatting(basicUpgrades.upgrade2.level, 0) + "/" + numberFormatting(basicUpgrades.upgrade2.maxLevel, 0)
    if (basicUpgrades.upgrade1.level == basicUpgrades.upgrade1.maxLevel) {
        document.getElementById("basicupgrade1cost").innerHTML = "Max Level Reached"
    }
    else {
        document.getElementById("basicupgrade1cost").innerHTML = "Cost: " + numberFormatting(basicUpgrades.upgrade1.costArray[basicUpgrades.upgrade1.count], 0)
    }
    if (basicUpgrades.upgrade2.level == basicUpgrades.upgrade2.maxLevel) {
        document.getElementById("basicupgrade2cost").innerHTML = "Max Level Reached" 
    }
    else {
        document.getElementById("basicupgrade2cost").innerHTML = "Cost: " + numberFormatting(basicUpgrades.upgrade2.costArray[basicUpgrades.upgrade2.count], 0)
    }
}