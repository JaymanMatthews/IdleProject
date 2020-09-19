function basicUpgrade1() {
    if (basicUpgrades.upgrade1.level < basicUpgrades.upgrade1.maxLevel) {
        if (gameData.currency >= basicUpgrades.upgrade1.costArray[basicUpgrades.upgrade1.count]) {
            document.getElementById("basicupgrade1increase").innerHTML = numberFormatting(basicUpgrades.upgrade1.increaseArray[basicUpgrades.upgrade1.count + 1], 1)
            gameData.currency -= basicUpgrades.upgrade1.costArray[basicUpgrades.upgrade1.count]
            basicUpgrades.upgrade1.count++
            basicUpgrades.upgrade1.level++
        }
        document.getElementById("currency").innerHTML = numberFormatting(gameData.currency, 1)
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
}