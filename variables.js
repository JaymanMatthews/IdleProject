var gameData = {
    currency: 100000000000,
    currencyPerSec: 0,
    updateInterval: 1000,
    saveInterval: 15000,
    version: 0.002
}

var basicUpgrades = {
    upgrade1: {
        costArray: [10, 40, 95, 230, 580, 1350, 3200, 7800, 17960, 38000, 91000, 195000, 420000, 935000, 2050000, 4400000, 10500000, 22000000, 47400000, 105000000],
        increaseArray: [0, 1, 2, 4, 9, 18, 40, 90, 200, 480, 1070, 2400, 5600, 13100, 29050, 64000, 137200, 300000, 690000, 1500000, 3550000],
        level: 0,
        maxLevel: 20,
        count: 0
    },
    upgrade2: {
        costArray: [150000000, 1700000000, 8000000000, 67000000000, 490000000000],
        increaseArray: [0, 20000, 60000, 280000, 1100000, 3900000],
        level: 0,
        maxLevel: 5,
        count: 0
    }   
}