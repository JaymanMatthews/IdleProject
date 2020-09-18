var gameData = {
    currency: 5000,
    updateInterval: 1000,
    saveInterval: 15000,
    version: 0.001
}

document.getElementById("versionnumber").innerHTML = gameData.version

var basicUpgrades = {
    upgrade1: {
        costArray: [1, 4, 10, 25, 50, 120, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 300],
        increaseArray: [0, 0.1, 0.3, 0.7, 1.9, 3.4, 7.3, 12, 14, 19, 20, 21, 21, 23, 25, 26, 28, 29, 30, 31, 32, 40],
        level: 0,
        maxLevel: 20,
        count: 0
    },
    upgrade2: {
        costArray: [300, 600, 1500],
        increaseArray: [1, 1.5, 3.4],
        count: 0
    }
}

setInterval(function() {
    gameData.currency += basicUpgrades.upgrade1.increaseArray[basicUpgrades.upgrade1.count]
    document.getElementById("currency").innerHTML = numberFormatting(gameData.currency, 1)
}, gameData.updateInterval)

setInterval(function() {
    saveGame()
}, gameData.saveInterval)

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

window.onload = function() {
    loadGame()
    document.getElementById("currency").innerHTML = numberFormatting(gameData.currency, 1)
    document.getElementById("basicupgrade1cost").innerHTML = numberFormatting(basicUpgrades.upgrade1.costArray[basicUpgrades.upgrade1.count], 1)
    document.getElementById("basicupgrade1increase").innerHTML = numberFormatting(basicUpgrades.upgrade1.increaseArray[basicUpgrades.upgrade1.count], 1)
    document.getElementById("currentlevel").innerHTML = numberFormatting(basicUpgrades.upgrade1.level, 0)
    document.getElementById("nextupgradeincrease1").innerHTML = numberFormatting(basicUpgrades.upgrade1.increaseArray[basicUpgrades.upgrade1.count + 1], 1)
}

function basicUpgrade1() {
    if (basicUpgrades.upgrade1.level < basicUpgrades.upgrade1.maxLevel) {
        if (gameData.currency >= basicUpgrades.upgrade1.costArray[basicUpgrades.upgrade1.count]) {
            document.getElementById("basicupgrade1increase").innerHTML = numberFormatting(basicUpgrades.upgrade1.increaseArray[basicUpgrades.upgrade1.count + 1], 1)
            basicUpgrades.upgrade1.increaseArray[basicUpgrades.upgrade1.count] *= basicUpgrades.upgrade2.increaseArray[basicUpgrades.upgrade2.count]
            gameData.currency -= basicUpgrades.upgrade1.costArray[basicUpgrades.upgrade1.count]
            basicUpgrades.upgrade1.count++
            basicUpgrades.upgrade1.level++
        }
        document.getElementById("currency").innerHTML = numberFormatting(gameData.currency, 1)
        document.getElementById("basicupgrade1cost").innerHTML = numberFormatting(basicUpgrades.upgrade1.costArray[basicUpgrades.upgrade1.count], 1)
        document.getElementById("currentlevel").innerHTML = numberFormatting(basicUpgrades.upgrade1.level, 0)
        document.getElementById("nextupgradeincrease1").innerHTML = numberFormatting(basicUpgrades.upgrade1.increaseArray[basicUpgrades.upgrade1.count + 1], 1)
    }
}

function basicUpgrade2() {
    if (gameData.currency >= basicUpgrades.upgrade2.costArray[basicUpgrades.upgrade2.count]) {
        document.getElementById("basicupgrade2increase").innerHTML = numberFormatting(basicUpgrades.upgrade2.increaseArray[basicUpgrades.upgrade2.count + 1], 1)
        gameData.currency -= basicUpgrades.upgrade2.costArray[basicUpgrades.upgrade2.count]
        basicUpgrades.upgrade2.count++
    }
    document.getElementById("currency").innerHTML = numberFormatting(gameData.currency, 1)
    document.getElementById("basicupgrade2cost").innerHTML = numberFormatting(basicUpgrades.upgrade2.costArray[basicUpgrades.upgrade2.count], 1) 
    document.getElementById("nextupgradeincrease2").innerHTML = numberFormatting(basicUpgrades.upgrade2.increaseArray[basicUpgrades.upgrade2.count + 1], 1)
    document.getElementById("basicupgrade1increase").innerHTML = numberFormatting(basicUpgrades.upgrade1.increaseArray[basicUpgrades.upgrade1.count], 1)
    document.getElementById("nextupgradeincrease1").innerHTML = numberFormatting(basicUpgrades.upgrade1.increaseArray[basicUpgrades.upgrade1.count + 1], 1) 
}

function numberFormatting(variable, decimals) {
    if (variable < 1000) {
        string = variable.toFixed(decimals)
    }
    else if (variable >= 1000) {
        var exponent = (Math.floor(Math.log10(Math.abs(variable))))
        var mantissa = (variable / Math.pow(10, exponent))
        string = mantissa.toFixed(2) + "e" + exponent
    }
    return string
}






