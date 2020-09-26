'use strict';

var constants = {
    gameData: {
        updateInterval: 33,
        saveInterval: 15000,
        version: 0.004
    },
    basicUpgrades: [
        {
            cost: [3, 8, 19, 47, 102, 175, 269, 390, 564, 851, 1.23e3, 1.7e3, 2.29e3, 3.12e3, 4.21e3, 5.49e3, 6.9e3, 8.55e3, 1.08e4, 1.36e4, 1.87e4, 2.55e4, 3.2e4, 3.95e4, 4.79e4, 5.73e4, 6.78e4, 7.9e4, 9.22e4, 1.06e5, 1.2e5, 1.38e5, 1.63e5, 2.03e5, 2.69e5, 3.56e5, 4.8e5, 6.52e5, 8.98e5, 1.2e6, 3e6, 6.37e6, 1.18e7, 2.32e7, 4.72e7],
            value: [1, 1, 1, 2, 2, 3, 4, 5, 7, 9, 11, 15, 19, 23, 29, 35, 41, 47, 55, 63, 71, 79, 89, 99, 114, 129, 159, 189, 249, 339, 429, 609, 789, 1.15e3, 1.51e3, 2.23e3, 3.67e3, 5.95e3, 1.09e4, 1.76e4, 5.4e4, 9.42e4, 2.78e5, 5.78e5, 9e5]
        },
        {
            cost: [2e6, 2.45e6, 3.07e6, 5.2e6, 1.23e7, 2.8e7, 4.38e7, 6.52e7, 9.32e7, 1.27e8, 2.1e8, 3.45e8, 5.96e8, 8.7e8, 1.32e9, 1.98e9, 2.8e9, 4.11e9, 6.34e9, 8.89e9, 1.2e10, 2.38e10, 3.72e10, 5.8e10, 1.21e11, 1.98e11, 2.86e11, 4.1e11, 7.34e11, 1.15e12, 1.62e12, 2.56e12, 6.7e12, 1.12e13, 1.74e13],
            value: [700, 700, 1.2e3, 1.2e3, 1.8e3, 3e3, 4.5e3, 4.5e3, 7e3, 1e4, 1e4, 2.5e4, 2.5e4, 5e4, 5e4, 1e5, 1.5e5, 2.5e5, 4.5e5, 8.5e5, 1.4e6, 2e6, 3e6, 5.5e6, 5.5e6, 1.2e7, 3e7, 3e7, 6e7, 9e7, 1.5e8, 6e8, 1.5e9, 8e9, 5e10] 
        },
        {
            cost: [3e12, 3.62e12, 5.79e12, 1.39e13, 3.1e13, 6.46e13, 1.13e14, 2.38e14, 3.88e14, 5.5e14, 7.14e14, 1.15e15, 2.4e15, 4.56e15, 7.93e15, 1.22e16, 2.41e16, 4.5e16, 9.89e16, 1.63e17, 2.5e17, 4.8e17, 6.83e17, 1.17e18, 2.54e18],
            value: [4e6, 5e6, 8e6, 1.2e7, 1.2e7, 2.5e7, 5e7, 1e8, 2.5e8, 2.5e8, 5e8, 1e9, 2e9, 2e9, 5e9, 5e9, 1.5e10, 3e10, 6e10, 8.5e10, 1.3e11, 3e11, 4.5e11, 8e11, 2.5e12] 
        },
        {
            cost: [4e17, 5.26e17, 1.32e18, 2.46e18, 5.1e18, 1.72e19, 3.77e19, 6.25e19, 1.4e20, 3.78e20, 9.31e20, 1.74e21, 3.66e21, 1.47e22, 3.5e22],
            value: [3e9, 5e9, 5e9, 1e10, 3e10, 8.5e10, 2e11, 5e11, 2e12, 7.5e12, 3e13, 8e13, 2.4e14, 8.5e14, 4e15]
        }     
    ],
    prestigeData: {
        currencyRequired: 1e21,
        prestigeTokensRequired: 1
    },
    prestigeUpgrades: [
        {
            // Levels 2-5 coming soon.
            maxLevel: 1,
            cost: [1], // Based on current balancing, level 2 could cost ~50 prestige tokens.
            value: [5] // Each level will raise max level by 5.
        }
    ],
    elements: {
        basicUpgradeTitles: [],
        basicUpgrades: [],
        basicUpgradeGainText: [],
        basicUpgradeIncrease: [],
        basicUpgradeCost: [],
        basicUpgradeLevelText: [],
        prestigeUpgradeLevelText: [],
        basicUpgradePerSecText: [],
        prestigeText: [],
        prestigeUpgradeTitles: [],
        prestigeUpgradeEffect: [],
        prestigeUpgradeCost: [],
        prestigeUpgrades: [],
        gameLabel: undefined,
        versionNumber: undefined,
        basicUpgradesTabText: undefined,
        prestigeUpgradesTabText: undefined,
        settingsTabText: undefined,
        changelogTabText: undefined,
        currencyText: undefined,
        prestigeTokenText: undefined,
        currencyAmount: undefined,
        prestigeTokenAmount: undefined,
        prestigeTokensAvailable: undefined,
        manualSave: undefined,
        hardReset: undefined,
        prestigeButton: undefined,
        prestigeContainer: undefined,
        versions: {
            v0001Title: undefined,
            v0002Title: undefined,
            v0003Title: undefined,
            v0004Title: undefined,
            v0001Text: undefined,
            v0002Text: undefined,
            v0003Text: undefined,
            v0004Text: undefined
        }
    } 
};