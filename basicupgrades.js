function basicUpgradesPerSec() {
    switch (basicUpgrades.upgrade1.level) {
        case basicUpgrades.upgrade1.maxLevel:
            gameData.currencyPerSec += basicUpgrades.upgrade2.increaseArray[basicUpgrades.upgrade2.count]
            gameData.currency += gameData.currencyPerSec
            break;
        default:
            gameData.currencyPerSec = basicUpgrades.upgrade1.increaseArray[basicUpgrades.upgrade1.count]
            gameData.currency += basicUpgrades.upgrade1.increaseArray[basicUpgrades.upgrade1.count]
            break;
    }
    document.getElementById("currency").innerHTML = numberFormatting(gameData.currency, 0)
    document.getElementById("basicupgrade1increase").innerHTML = numberFormatting(gameData.currencyPerSec, 0)
}

function basicUpgrade1() {
    if (basicUpgrades.upgrade1.level < basicUpgrades.upgrade1.maxLevel) {
        if (gameData.currency >= basicUpgrades.upgrade1.costArray[basicUpgrades.upgrade1.count]) {
            gameData.currency -= basicUpgrades.upgrade1.costArray[basicUpgrades.upgrade1.count]
            basicUpgrades.upgrade1.count++
            basicUpgrades.upgrade1.level++
        }
        document.getElementById("currency").innerHTML = numberFormatting(gameData.currency, 0)
        document.getElementById("basicupgrade1increase").innerHTML = numberFormatting(basicUpgrades.upgrade1.increaseArray[basicUpgrades.upgrade1.count], 0)
        document.getElementById("basicupgrade1level").innerHTML = numberFormatting(basicUpgrades.upgrade1.level, 0) + "/" + numberFormatting(basicUpgrades.upgrade1.maxLevel, 0)
        if (basicUpgrades.upgrade1.level == basicUpgrades.upgrade1.maxLevel) {
            document.getElementById("basicupgrade1cost").innerHTML = "Max Level Reached"
            gameData.currencyPerSec = basicUpgrades.upgrade1.increaseArray[basicUpgrades.upgrade1.count]
        }
        else {
            document.getElementById("basicupgrade1cost").innerHTML = "Cost: " + numberFormatting(basicUpgrades.upgrade1.costArray[basicUpgrades.upgrade1.count], 0)
        }
        makeVisible(basicUpgrades.upgrade1.level, basicUpgrades.upgrade1.maxLevel, "basicupgrade2")
    }
}

function basicUpgrade2() {
    if (basicUpgrades.upgrade2.level < basicUpgrades.upgrade2.maxLevel) {
        if (gameData.currency >= basicUpgrades.upgrade2.costArray[basicUpgrades.upgrade2.count]) {
            gameData.currency -= basicUpgrades.upgrade2.costArray[basicUpgrades.upgrade2.count]
            basicUpgrades.upgrade2.count++
            basicUpgrades.upgrade2.level++
        }
        document.getElementById("currency").innerHTML = numberFormatting(gameData.currency, 0)
        document.getElementById("basicupgrade2increase").innerHTML = numberFormatting(basicUpgrades.upgrade2.increaseArray[basicUpgrades.upgrade2.count], 0)
        document.getElementById("basicupgrade2level").innerHTML = numberFormatting(basicUpgrades.upgrade2.level, 0) + "/" + numberFormatting(basicUpgrades.upgrade2.maxLevel, 0)
        if (basicUpgrades.upgrade2.level == basicUpgrades.upgrade2.maxLevel) {
            document.getElementById("basicupgrade2cost").innerHTML = "Max Level Reached"  
        }
        else {
            document.getElementById("basicupgrade2cost").innerHTML = "Cost: " + numberFormatting(basicUpgrades.upgrade2.costArray[basicUpgrades.upgrade2.count], 0)
        }
    }
}