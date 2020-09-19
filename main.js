document.getElementById("versionnumber").innerHTML = gameData.version

setInterval(function() {
    gameData.currency += basicUpgrades.upgrade1.increaseArray[basicUpgrades.upgrade1.count]
    document.getElementById("currency").innerHTML = numberFormatting(gameData.currency, 1)
}, gameData.updateInterval)

setInterval(function() {
    saveGame()
}, gameData.saveInterval)







